// firebase-messaging-init.js
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-messaging.js";
import { app } from './firebase-init.js'; // Importa a app do firebase-init.js

const messaging = getMessaging(app);

// Chave VAPID do projeto Firebase (Console do Firebase > Project settings > Cloud Messaging > Web configuration)
const vapidKey = "BHy9bqyRYZsTBeGzNLH0-O6XSpUFDp2klNI5oOGtpro6nzstl10nlCgMEAZan-YIBAqkZ4oJoVdvGweCvIOFPTs"; 

// Solicitar permissão e obter o token
export async function setupNotifications() {
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('Permissão para notificação concedida.');

            const currentToken = await getToken(messaging, { vapidKey: vapidKey });
            if (currentToken) {
                console.log('Token de notificação:', currentToken);
                // Aqui é preciso salvar este token no Firestore
                // em um campo como 'fcmTokens' no documento do usuário.
                return currentToken;
            } else {
                console.log('Nenhum token de notificação disponível. Permissão negada ou token não gerado.');
                return null;
            }
        } else {
            console.log('Permissão para notificação negada.');
            return null;
        }
    } catch (error) {
        console.error('Ocorreu um erro ao obter o token:', error);
        return null;
    }
}

// Lidar com mensagens quando o app está em primeiro plano
onMessage(messaging, (payload) => {
    console.log('Mensagem recebida em primeiro plano:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon-32x32.png'
    };
    new Notification(notificationTitle, notificationOptions);
});
