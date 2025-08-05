// firebase-init.js

// Importa os módulos necessários do Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js';

// Sua configuração do Firebase (a mesma que você já possui)
export const firebaseConfig = { // Exportado para ser usado em firebase-init.js
    apiKey: "AIzaSyCn-qbqXscs8x9DhZbFQQc_m4-X_ji4jvg",
    authDomain: "fitadapt-4a71a.firebaseapp.com",
    projectId: "fitadapt-4a71a",
    storageBucket: "fitadapt-4a71a.firebasestorage.app",
    messagingSenderId: "525068610805",
    appId: "1:525068610805:web:3e4d3526a93c602ec4e9bc",
    measurementId: "G-96J6RKBQY3"
};

// Inicializa o Firebase e exporta as instâncias para serem usadas em outros arquivos
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Instância de autenticação
export const db = getFirestore(app); // Instância do Firestore
export const googleProvider = new GoogleAuthProvider(); // Provedor de autenticação do Google

// --- Estrutura de Dados para Planos de Treino (Exportado) ---
export const workoutPlans = {
    'Melhorar mobilidade': [
        {
            id: 'alongamento-coluna', // Adicionado ID para exercícios
            dayTitle: 'Dia 1 - Foco em Mobilidade Articular',
            exercises: [
                {
                    id: 'alongamento-coluna-ex1', // ID único para cada exercício
                    title: 'Alongamento para Coluna',
                    videoUrl: 'https://www.youtube.com/embed/QEzj6OMR3t8',
                    duration: '10 min',
                    intensity: 'Leve',
                    description: 'Exercício adaptado para aliviar tensão na lombar. Execute com cuidado, mantendo a respiração constante.'
                },
                {
                    id: 'mobilidade-quadril-ex1',
                    title: 'Mobilidade de Quadril',
                    videoUrl: 'https://www.youtube.com/embed/Z52p8Xl3XjA', // Exemplo de vídeo de mobilidade de quadril
                    duration: '8 min',
                    intensity: 'Leve',
                    description: 'Exercícios suaves para melhorar a amplitude de movimento do quadril.'
                }
            ]
        },
        {
            id: 'mobilidade-ombro-tronco',
            dayTitle: 'Dia 2 - Mobilidade de Ombro e Tronco',
            exercises: [
                {
                    id: 'rotacoes-ombro-pescoco-ex1',
                    title: 'Rotações de Ombro e Pescoço',
                    videoUrl: 'https://www.youtube.com/embed/09m8d1T6QpQ', // Exemplo de vídeo de mobilidade de ombro
                    duration: '7 min',
                    intensity: 'Leve',
                    description: 'Movimentos circulares e suaves para aumentar a flexibilidade dos ombros e aliviar a tensão no pescoço.'
                },
                 {
                    id: 'flexao-lateral-tronco-ex1',
                    title: 'Flexão Lateral de Tronco',
                    videoUrl: 'https://www.youtube.com/embed/J1f3w0fE4uQ', // Exemplo de vídeo de mobilidade de tronco
                    duration: '5 min',
                    intensity: 'Leve',
                    description: 'Alongamento lateral para melhorar a flexibilidade da coluna e do tronco.'
                }
            ]
        }
    ],
    'Alívio de dores': [
        {
            id: 'alivio-lombar',
            dayTitle: 'Dia 1 - Alívio de Dores na Lombar',
            exercises: [
                {
                    id: 'alongamento-gato-camelo-ex1',
                    title: 'Alongamento Gato-Camelo',
                    videoUrl: 'https://www.youtube.com/embed/QEzj6OMR3t8', // Reutilizando vídeo, mas o foco é diferente
                    duration: '10 min',
                    intensity: 'Suave',
                    description: 'Movimento para mobilizar a coluna e aliviar a compressão na região lombar.'
                },
                {
                    id: 'ponte-gluteos-ex1',
                    title: 'Ponte para Glúteos',
                    videoUrl: 'https://www.youtube.com/embed/W-d4Jj7m_wM', // Exemplo de ponte para glúteos
                    duration: '12 min',
                    intensity: 'Moderado',
                    description: 'Fortalecimento de glúteos para dar suporte à região lombar e reduzir dores.'
                }
            ]
        }
    ],
    'Condicionamento físico': [
        {
            id: 'cardio-leve',
            dayTitle: 'Dia 1 - Treino Cardiovascular Leve',
            exercises: [
                {
                    id: 'caminhada-adaptada-ex1',
                    title: 'Caminhada Adaptada (Baixo Impacto)',
                    videoUrl: 'https://www.youtube.com/embed/1vR2aL5Q_7o', // Exemplo de caminhada adaptada
                    duration: '20 min',
                    intensity: 'Leve',
                    description: 'Série de caminhada e movimentos leves para melhorar a capacidade cardiovascular sem sobrecarga.'
                },
                {
                    id: 'polichinelos-modificados-ex1',
                    title: 'Polichinelos Modificados',
                    videoUrl: 'https://www.youtube.com/embed/i38vI0Y6eUo', // Exemplo de polichinelo modificado
                    duration: '10 min',
                    intensity: 'Moderado',
                    description: 'Versão de baixo impacto do polichinelo, ideal para aquecimento e condicionamento.'
                }
            ]
        }
    ],
    'Reabilitação pós-lesão': [
        {
            id: 'reabilitacao-joelho',
            dayTitle: 'Dia 1 - Reabilitação de Joelho (Fase Inicial)',
            exercises: [
                {
                    id: 'isometria-quadriceps-ex1',
                    title: 'Isometria de Quadríceps',
                    videoUrl: 'https://www.youtube.com/embed/o7jK8tBGNVQ', // Reutilizando vídeo, mas o foco é diferente
                    duration: '8 min',
                    intensity: 'Baixíssima',
                    description: 'Exercícios isométricos para fortalecer o quadríceps sem movimento articular, essencial na recuperação de lesões no joelho.'
                },
                {
                    id: 'elevacao-calcanhares-ex1',
                    title: 'Elevação de Calcanhares Sentado',
                    videoUrl: 'https://www.youtube.com/embed/g_y9v3-7d_Q', // Exemplo de elevação de calcanhares
                    duration: '7 min',
                    intensity: 'Leve',
                    description: 'Movimento suave para ativar os músculos da panturrilha e melhorar a circulação.'
                }
            ]
        }
    ],
    // Plano padrão para quando não há correspondência exata ou para o início
    'default': [
        {
            id: 'plano-basico',
            dayTitle: 'Plano Básico de Mobilidade',
            exercises: [
                {
                    id: 'alongamento-coluna-pernas-ex1',
                    title: 'Alongamento para Coluna e Pernas',
                    videoUrl: 'https://www.youtube.com/embed/QEzj6OMR3t8',
                    duration: '10 min',
                    intensity: 'Leve',
                    description: 'Série fundamental para iniciar a melhora da mobilidade e reduzir a rigidez corporal.'
                },
                {
                    id: 'hidroginastica-introducao-ex1',
                    title: 'Hidroginástica Adaptada (Introdução)',
                    videoUrl: 'https://www.youtube.com/embed/TpOSjpWQl1A',
                    duration: '20 min',
                    intensity: 'Leve',
                    description: 'Movimentos na água que oferecem baixo impacto e alta resistência, ideal para diversas condições.'
                }
            ]
        }
    ]
};

// Estrutura de dados para os artigos (exportado)
export const articles = [
    {
        id: 'nutricao-basica', // ID ÚNICO
        title: 'Dicas de Nutrição Básica para Todos',
        summary: 'Descubra como uma alimentação equilibrada pode transformar sua energia e bem-estar, com dicas simples para o dia a dia.',
        content: `
            <p>Uma alimentação saudável é a base para qualquer programa de fitness, especialmente para quem busca adaptação ou reabilitação. Não se trata de dietas restritivas, mas sim de escolhas inteligentes e consistentes.</p>
            <h3>Priorize Alimentos Naturais</h3>
            <p>Opte por alimentos integrais, frutas, vegetais, proteínas magras e grãos. Eles fornecem os nutrientes essenciais que seu corpo precisa para funcionar bem e se recuperar dos exercícios.</p>
            <h3>Hidrate-se Constantemente</h3>
            <p>A água é vital para todas as funções corporais. Mantenha uma garrafa de água por perto e beba ao longo do dia, especialmente antes, durante e depois dos treinos.</p>
            <h3>Planeje Suas Refeições</h3>
            <p>Ter um plano ajuda a evitar escolhas impulsivas e menos saudáveis. Prepare suas refeições com antecedência ou tenha opções nutritivas prontas para consumo.</p>
            <h3>Ouça Seu Corpo</h3>
            <p>Preste atenção aos sinais de fome e saciedade. Coma devagar e saboreie seus alimentos. Evite comer por tédio ou estresse.</p>
            <p>Lembre-se: pequenas mudanças fazem uma grande diferença a longo prazo. Consulte sempre um profissional de saúde ou nutricionista para um plano alimentar personalizado.</p>
        `,
        category: 'Nutrição'
    },
    {
        id: 'saude-mental', // ID ÚNICO
        title: 'Cuidados com a Saúde Mental no Dia a Dia',
        summary: 'Entenda a importância da saúde mental e como pequenas ações podem fazer uma grande diferença no seu bem-estar emocional.',
        content: `
            <p>A saúde mental é tão importante quanto a saúde física. Em um mundo agitado, cuidar da mente é fundamental para uma vida equilibrada e plena. Aqui estão algumas dicas práticas:</p>
            <h3>Pratique a Atenção Plena (Mindfulness)</h3>
            <p>Dedique alguns minutos do dia para focar no presente. Observe sua respiração, seus pensamentos e sensações sem julgamento. Isso pode reduzir o estresse e aumentar a clareza mental.</p>
            <h3>Mantenha Conexões Sociais</h3>
            <p>Interaja com amigos e familiares. O apoio social é um pilar da saúde mental. Mesmo que seja uma chamada de vídeo ou uma breve conversa, manter-se conectado faz a diferença.</p>
            <h3>Durma Bem</h3>
            <p>Priorize um sono de qualidade. A privação do sono afeta diretamente o humor, a concentração e a capacidade de lidar com o estresse. Crie uma rotina relaxante antes de dormir.</p>
            <h3>Gerencie o Estresse</h3>
            <p>Identifique o que causa estresse em sua vida e encontre formas saudáveis de lidar com isso. Pode ser através de exercícios físicos, meditação, hobbies ou conversas com alguém de confiança.</p>
            <h3>Busque Ajuda Profissional</h3>
            <p>Não hesite em procurar um psicólogo ou terapeuta se estiver a sentir dificuldades persistentes. Cuidar da saúde mental é um ato de coragem e autocuidado.</p>
        `,
        category: 'Saúde Mental'
    },
    {
        id: 'manter-motivacao', // ID ÚNICO
        title: 'Como Manter a Motivação nos Treinos e na Vida',
        summary: 'Descubra estratégias eficazes para manter a chama da motivação acesa, superando desafios e alcançando seus objetivos de forma consistente.',
        content: `
            <p>Manter a motivação, seja nos treinos ou em qualquer área da vida, é um desafio comum. A boa notícia é que a motivação não é algo fixo; ela pode ser cultivada e renovada. Veja como:</p>
            <h3>Defina Metas Claras e Realistas</h3>
            <p>Tenha objetivos específicos e alcançáveis. Em vez de "quero ser mais ativo", defina "quero caminhar 30 minutos, 3 vezes por semana". Metas claras são mais fáceis de monitorar e celebrar.</p>
            <h3>Celebre Pequenas Vitórias</h3>
            <p>Reconheça e celebre cada passo do seu progresso, por menor que seja. Isso reforça o comportamento positivo e recarrega sua motivação para continuar.</p>
            <h3>Encontre Seu "Porquê"</h3>
            <p>Conecte-se com a razão mais profunda pela qual você começou. É pela saúde? Pela família? Pela independência? Lembre-se constantemente do seu propósito.</p>
            <h3>Varie Seus Treinos</h3>
            <p>A rotina pode levar ao tédio. Experimente novos exercícios, diferentes ambientes ou até mesmo um novo horário. A novidade pode reacender o interesse.</p>
            <h3>Busque Apoio</h3>
            <p>Compartilhe seus objetivos com amigos, familiares ou a comunidade FitAdapt. Ter alguém para te apoiar ou treinar junto pode ser um grande impulsionador.</p>
            <h3>Seja Gentil Consigo Mesmo</h3>
            <p>Haverá dias em que a motivação estará baixa. Não se culpe. Permita-se um descanso, mas volte à rotina no dia seguinte. A consistência é mais importante que a perfeição.</p>
        `,
        category: 'Motivação'
    }
];

// Função para buscar um item (treino ou artigo) pelo ID
export function findItemById(itemId) {
    // Procura nos treinos
    for (const planType in workoutPlans) {
        for (const day of workoutPlans[planType]) {
            const foundExercise = day.exercises.find(ex => ex.id === itemId);
            if (foundExercise) {
                return { ...foundExercise, type: 'treino' };
            }
        }
    }
    // Procura nos artigos
    const foundArticle = articles.find(art => art.id === itemId);
    if (foundArticle) {
        return { ...foundArticle, type: 'artigo' };
    }
    return null; // Item não encontrado
}
