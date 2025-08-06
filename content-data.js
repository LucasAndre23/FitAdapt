// content-data.js

// Estrutura de Dados para Planos de Treino (Exportado)
export const workoutPlans = {
    'Melhorar mobilidade': [
        {
            dayTitle: 'Dia 1 - Foco em Mobilidade Articular',
            exercises: [
                {
                    id: 'mobility-spine-stretch-1',
                    title: 'Alongamento para Coluna',
                    videoUrl: 'https://www.youtube.com/embed/QEzj6OMR3t8',
                    duration: '10 min',
                    durationMinutes: 10,
                    intensity: 'Leve',
                    type: 'Alongamento',
                    equipment: 'Nenhum',
                    description: 'Exercício adaptado para aliviar tensão na lombar. Execute com cuidado, mantendo a respiração constante.'
                },
                {
                    id: 'mobility-hip-mobilization-1',
                    title: 'Mobilidade de Quadril',
                    videoUrl: 'https://www.youtube.com/embed/CgloG8T1VmU',
                    duration: '17 min',
                    durationMinutes: 17,
                    intensity: 'Leve',
                    type: 'Mobilidade',
                    equipment: 'Nenhum',
                    description: 'Exercícios suaves para melhorar a amplitude de movimento do quadril.'
                }
            ]
        },
        {
            dayTitle: 'Dia 2 - Mobilidade de Ombro e Tronco',
            exercises: [
                {
                    id: 'mobility-shoulder-neck-rotations-1',
                    title: 'Rotações de Ombro e Pescoço',
                    videoUrl: 'https://www.youtube.com/embed/QCAev2GSz2c',
                    duration: '7 min',
                    durationMinutes: 7,
                    intensity: 'Leve',
                    type: 'Mobilidade',
                    equipment: 'Nenhum',
                    description: 'Movimentos circulares e suaves para aumentar a flexibilidade dos ombros e aliviar a tensão no pescoço.'
                },
                 {
                    id: 'mobility-trunk-lateral-flexion-1',
                    title: 'Flexão Lateral de Tronco',
                    videoUrl: 'https://www.youtube.com/embed/KZw-LERb59A',
                    duration: '5 min',
                    durationMinutes: 5,
                    intensity: 'Leve',
                    type: 'Alongamento',
                    equipment: 'Nenhum',
                    description: 'Alongamento lateral para melhorar a flexibilidade da coluna e do tronco.'
                }
            ]
        }
    ],
    'Alívio de dores': [
        {
            dayTitle: 'Dia 1 - Alívio de Dores na Lombar',
            exercises: [
                {
                    id: 'pain-relief-cat-camel-1',
                    title: 'Alongamento Gato-Camelo',
                    videoUrl: 'https://www.youtube.com/embed/IwVYLXuMdfc',
                    duration: '10 min',
                    durationMinutes: 10,
                    intensity: 'Suave',
                    type: 'Alongamento',
                    equipment: 'Nenhum',
                    description: 'Movimento para mobilizar a coluna e aliviar a compressão na região lombar.'
                },
                {
                    id: 'pain-relief-standing-stretch-1',
                    title: 'Alongamento em pé',
                    videoUrl: 'https://www.youtube.com/embed/Ty5kwQgXUrI',
                    duration: '12 min',
                    durationMinutes: 12,
                    intensity: 'Moderado',
                    type: 'Alongamento',
                    equipment: 'Cadeira',
                    description: 'Fortalecimento de glúteos para dar suporte à região lombar e reduzir dores.'
                }
            ]
        }
    ],
    'Condicionamento físico': [
        {
            dayTitle: 'Dia 1 - Treino Cardiovascular Leve',
            exercises: [
                {
                    id: 'conditioning-aerohiit-1',
                    title: 'AEROHIIT',
                    videoUrl: 'https://www.youtube.com/embed/eO3-QPbXwD8',
                    duration: '20 min',
                    durationMinutes: 20,
                    intensity: 'Intenso',
                    type: 'Cardio', // <-- Certifique-se que está assim
                    equipment: 'Nenhum',
                    description: 'Exercícios para Emagrecer Rápido'
                },
                {
                    id: 'conditioning-modified-jumping-jacks-1',
                    title: 'Polichinelos Modificados',
                    videoUrl: 'https://www.youtube.com/embed/n5Vi9G2k5v8',
                    duration: '10 min',
                    durationMinutes: 10,
                    intensity: 'Moderado',
                    type: 'Cardio', // <-- Certifique-se que está assim
                    equipment: 'Nenhum',
                    description: 'Versão de baixo impacto do polichinelo, ideal para aquecimento e condicionamento.'
                }
            ]
        }
    ],
    'Reabilitação pós-lesão': [
        {
            dayTitle: 'Dia 1 - Reabilitação de Joelho (Fase Inicial)',
            exercises: [
                {
                    id: 'rehab-quadriceps-isometry-1',
                    title: 'Isometria de Quadríceps',
                    videoUrl: 'https://www.youtube.com/embed/MLqXEXpMfS8',
                    duration: '8 min',
                    durationMinutes: 8,
                    intensity: 'Baixíssima',
                    type: 'Reabilitação',
                    equipment: 'Nenhum',
                    description: 'Exercícios isométricos para fortalecer o quadríceps sem movimento articular, essencial na recuperação de lesões no joelho.'
                },
                {
                    id: 'rehab-heel-raises-seated-1',
                    title: 'Elevação de Calcanhares Sentado',
                    videoUrl: 'https://www.youtube.com/embed/tPRDA3dDqOY',
                    duration: '7 min',
                    durationMinutes: 7,
                    intensity: 'Leve',
                    type: 'Reabilitação',
                    equipment: 'Cadeira',
                    description: 'Movimento suave para ativar os músculos da panturrilha e melhorar a circulação.'
                }
            ]
        }
    ],
    // Plano padrão
    'default': [
        {
            dayTitle: 'Plano Básico de Mobilidade',
            exercises: [
                {
                    id: 'default-spine-legs-stretch-1',
                    title: 'Alongamento para Coluna e Pernas',
                    videoUrl: 'https://www.youtube.com/embed/5O3EQHQA6Ag',
                    duration: '10 min',
                    durationMinutes: 10,
                    intensity: 'Leve',
                    type: 'Alongamento',
                    equipment: 'Nenhum',
                    description: 'Série fundamental para iniciar a melhora da mobilidade e reduzir a rigidez corporal.'
                },
                {
                    id: 'default-morning-spine-routine-1',
                    title: 'Rotina Matinal para coluna',
                    videoUrl: 'https://www.youtube.com/embed/CgloG8T1VmU',
                    duration: '20 min',
                    durationMinutes: 20,
                    intensity: 'Leve',
                    type: 'Mobilidade',
                    equipment: 'Nenhum',
                    description: 'Rotina suave para mobilidade da coluna pela manhã.'
                }
            ]
        }
    ]
};

// Estrutura de dados para os artigos (exportado)
export const articles = [
    {
        id: 'nutricao-basica',
        title: 'Dicas de Nutrição Básica para Todos',
        summary: 'Descubra como uma alimentação equilibrada pode transformar sua energia e bem-estar, com dicas simples para o dia a dia.',
        content: `
            <p>Uma alimentação saudável é a base para qualquer programa de fitness...</p>
        `,
        category: 'Nutrição'
    },
    {
        id: 'saude-mental',
        title: 'Cuidados com a Saúde Mental no Dia a Dia',
        summary: 'Entenda a importância da saúde mental e como pequenas ações podem fazer uma grande diferença no seu bem-estar emocional.',
        content: `
            <p>A saúde mental é tão importante quanto a saúde física...</p>
        `,
        category: 'Saúde Mental'
    },
    {
        id: 'manter-motivacao',
        title: 'Como Manter a Motivação nos Treinos e na Vida',
        summary: 'Descubra estratégias eficazes para manter a chama da motivação acesa, superando desafios e alcançando seus objetivos de forma consistente.',
        content: `
            <p>Manter a motivação, seja nos treinos ou em qualquer área da vida...</p>
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
