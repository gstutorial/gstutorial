<?php
// save_question.php
header('Content-Type: application/json');

// Get POST data
$xml_content = $_POST['xml_content'] ?? '';
$file_path = $_POST['file_path'] ?? '';
$chapter = $_POST['chapter'] ?? '';
$class = $_POST['class'] ?? '';
$subject = $_POST['subject'] ?? '';

// Security check - allow only XML files
if (pathinfo($file_path, PATHINFO_EXTENSION) !== 'xml') {
    echo json_encode(['success' => false, 'message' => 'Invalid file type']);
    exit;
}

// Sanitize inputs
$chapter = preg_replace('/[^a-zA-Z0-9\s\-_]/', '', $chapter);
$class = preg_replace('/[^0-9]/', '', $class);
$subject = preg_replace('/[^a-zA-Z0-9\s\-_]/', '', $subject);

// Create directory structure if it doesn't exist
$directory = "{$class}/{$subject}/";
if (!is_dir($directory)) {
    mkdir($directory, 0777, true);
}

// Save XML file
$xml_file = "{$directory}{$chapter}.xml";

if (file_put_contents($xml_file, $xml_content)) {
    // Backup the old file
    $backup_file = "{$directory}{$chapter}_backup_" . date('Y-m-d_H-i-s') . ".xml";
    copy($xml_file, $backup_file);
    
    echo json_encode([
        'success' => true, 
        'message' => 'Questions saved successfully',
        'file' => $xml_file,
        'backup' => $backup_file
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to save file']);
}
?>
