const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Inicializa o SDK do Admin do Firebase.
admin.initializeApp();

// Importa o SDK do SendGrid Mail.
const sgMail = require("@sendgrid/mail");
// Acessa a chave da API do SendGrid a partir das variáveis de ambiente do .env
// O nome da variável deve ser o mesmo que você definiu no arquivo .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// NOTIFICAÇÃO POR E-MAIL: Função agendada para enviar lembretes de treino
// Esta função será executada diariamente às 10h da manhã (0 10 * * *)
// no fuso horário de São Paulo ("America/Sao_Paulo").
exports.dailyWorkoutReminderEmail = functions.pubsub.schedule("0 10 * * *")
    .timeZone("America/Sao_Paulo") // Ajuste o fuso horário se necessário
    .onRun(async (context) => {
        console.log("Executando envio de e-mails de lembrete de treino...");

        try {
            // 1. Busca todos os documentos na coleção 'user_questionnaires' no Firestore.
            const usersSnapshot = await admin.firestore()
                .collection("user_questionnaires").get();

            // Verifica se não há usuários na base de dados.
            if (usersSnapshot.empty) {
                console.log("Nenhum usuário encontrado na base de dados para " +
                            "enviar e-mails.");
                return null;
            }
            
            const emailsToSend = []; // Array para armazenar os objetos de e-mail.
            
            // Itera sobre cada documento (usuário) encontrado.
            usersSnapshot.forEach((doc) => {
                const userData = doc.data(); // Obtém os dados do usuário.
                
                // 2. Verifica se o usuário tem um e-mail válido e um objetivo de treino.
                if (userData.email && userData.objetivo) { 
                    emailsToSend.push({
                        to: userData.email, // Endereço de e-mail do destinatário.
                        from: "noreply@seusite.com", // **SUBSTITUA PELO SEU E-MAIL VERIFICADO**
                        subject: "Está na hora do seu treino!", // Assunto do e-mail.
                        html: `
                            <div style="font-family: Arial, sans-serif; padding: 20px; ` +
                            `color: #333;">
                                <h2>Olá, ${userData.name || "usuário FitAdapt"}!</h2>
                                <p>Seu plano de treino personalizado está esperando por ` +
                                `você. Mantenha a motivação e vamos nos mover hoje!</p>
                                <p style="margin-top: 20px;">
                                    <a href="https://seusite.com/arealogad.html" ` +
                                    `style="background-color: #007BFF; color: white; ` +
                                    `padding: 10px 20px; text-decoration: none; ` +
                                    `border-radius: 5px;">Acessar Meu Plano</a>
                                </p>
                                <p style="margin-top: 30px; font-size: 0.9em; ` +
                                `color: #777;">
                                    Seu objetivo: ${userData.objetivo}
                                </p>
                                <p style="font-size: 0.8em; color: #999;">
                                    Este é um e-mail automático. Por favor, não responda.
                                </p>
                            </div>
                        `,
                    });
                }
            });

            // 3. Se houver e-mails para enviar, usa o SendGrid para enviá-los.
            if (emailsToSend.length > 0) {
                await sgMail.send(emailsToSend);
                console.log("E-mails de lembrete de treino enviados com sucesso para " +
                            emailsToSend.length + " usuários.");
            } else {
                console.log("Nenhum e-mail para enviar com os critérios atuais.");
            }

            return null;
        } catch (error) {
            console.error("Erro ao enviar e-mails:", error);
            if (error.response) {
                console.error("Resposta de erro do SendGrid:", error.response.body);
            }
            return null;
        }
    });
