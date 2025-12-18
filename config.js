// config.js - UPDATED FOR YOUR WORKER
// Use your actual Worker URL
const CLOUDFLARE_WORKER_URL = 'https://gstutorial.gobind-bngn.workers.dev';

// API Endpoints - MUST MATCH WORKER.JS ROUTES
const API_CONFIG = {
    BASE_URL: CLOUDFLARE_WORKER_URL,
    get USERS_ENDPOINT() { return `${this.BASE_URL}/api/users`; },
    get TELEGRAM_CONFIG_ENDPOINT() { return `${this.BASE_URL}/api/telegram-config`; },
    get SEND_TELEGRAM_ENDPOINT() { return `${this.BASE_URL}/api/send-telegram`; },
    get AUTHENTICATE_ENDPOINT() { return `${this.BASE_URL}/api/authenticate`; },
    get HEALTH_CHECK() { return `${this.BASE_URL}/api/health`; }
};

// WhatsApp Configuration (optional - disable if not using)
const WHATSAPP_CONFIG = {
    ENABLED: false, // Set to false since we're using Telegram
    PHONE_NUMBER: '919706195457',
    MESSAGE_TEMPLATE: {
        LOGIN: "🔔 *New User Login* 🔔\n👤 Username: {username}\n📛 Name: {name}\n🏫 Class: {class}\n👥 Role: {role}\n📅 Date: {date}\n⏰ Time: {time}\n🌐 IP: {ip}",
        QUIZ_RESULT: "📊 *Quiz Result* 📊\n👤 Username: {username}\n📛 Name: {name}\n🏫 Class: {class}\n📚 Subject: {subject}\n📖 Chapter: {chapter}\n✅ Correct: {correct}\n📋 Total: {total}\n📈 Score: {percentage}%\n⏱️ Time: {timeTaken}\n📅 Date: {date}"
    }
};

// Telegram Configuration - Will be loaded from Cloudflare Worker
const TELEGRAM_CONFIG = {
    ENABLED: false, // Will be updated by worker
    BOT_TOKEN: '',  // Empty - will come from worker
    CHAT_ID: '',    // Empty - will come from worker
    MESSAGE_TEMPLATE: {
        LOGIN: "🔔 *New User Login* 🔔\n👤 Username: {username}\n🎓 Name: {name}\n🏫 Class: {class}\n👥 Role: {role}\n📅 Date: {date}\n⏰ Time: {time}\n🌐 IP: {ip}",
        QUIZ_RESULT: "📊 *Quiz Result* 📊\n👤 Username: {username}\n🎓 Name: {name}\n🏫 Class: {class}\n📚 Subject: {subject}\n📖 Chapter: {chapter}\n✅ Correct: {correct}\n📋 Total: {total}\n🔷 Attempted: {attempted}\n📈 Score: {percentage}%\n⏱️ Time Taken: {timeTaken}\n📅 Date: {date}"
    }
};

// Logo configuration
const LOGO_CONFIG = {
    src: 'logo.png',
    alt: 'G. S. Tutorial Logo',
    width: '40px',
    height: '40px'
};

// Logging Configuration
const LOGGING_CONFIG = {
    ENABLE_CONSOLE_LOG: true,
    LOG_LEVEL: 'INFO',
    AUTO_SEND_NOTIFICATIONS: true
};

// Export configurations
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        API_CONFIG,
        WHATSAPP_CONFIG,
        TELEGRAM_CONFIG,
        LOGO_CONFIG,
        LOGGING_CONFIG
    };
}
