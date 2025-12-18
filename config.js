// config.js - FINAL WORKING VERSION
const CLOUDFLARE_WORKER_URL = 'https://gstutorial.gobind-bngn.workers.dev';

const API_CONFIG = {
    BASE_URL: CLOUDFLARE_WORKER_URL,
    // ONLY these endpoints exist in your current worker.js
    get USERS_ENDPOINT() { return `${this.BASE_URL}/api/users`; },
    get AUTHENTICATE_ENDPOINT() { return `${this.BASE_URL}/api/authenticate`; },
    get HEALTH_CHECK() { return `${this.BASE_URL}/api/health`; }
    // REMOVE telegram-config and send-telegram for now
};

// Disable WhatsApp completely for now
const WHATSAPP_CONFIG = {
    ENABLED: false,
    PHONE_NUMBER: '',
    MESSAGE_TEMPLATE: { LOGIN: '', QUIZ_RESULT: '' }
};

// Disable Telegram for now - we'll add it back later
const TELEGRAM_CONFIG = {
    ENABLED: false,
    BOT_TOKEN: '',
    CHAT_ID: '',
    MESSAGE_TEMPLATE: {
        LOGIN: "",
        QUIZ_RESULT: ""
    }
};

// Other configs (LOGO_CONFIG, LOGGING_CONFIG) remain the same...
