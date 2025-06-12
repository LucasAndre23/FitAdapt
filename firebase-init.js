import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCn-qbqXscs8x9DhZbFQQc_m4-X_ji4jvg",
    authDomain: "fitadapt-4a71a.firebaseapp.com",
    projectId: "fitadapt-4a71a",
    storageBucket: "fitadapt-4a71a.firebasestorage.app",
    messagingSenderId: "525068610805",
    appId: "1:525068610805:web:3e4d3526a93c602ec4e9bc",
    measurementId: "G-96J6RKBQY3"
};

// Inicializa o Firebase e exporta as instâncias
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
