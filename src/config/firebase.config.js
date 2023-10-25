import { initializeApp } from 'firebase/app'
import 'dotenv'

const firebaseConfig = {
    apikey: process.env.APIKEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

// initialize firebase
const app = initializeApp(firebaseConfig);

export default app;