FitAdapt - Fitness Inclusivo e Personalizado
Bem-vindo ao repositório do FitAdapt! Esta plataforma web é um Centro de Experiência (CE) digital dedicado a oferecer planos de treino personalizados e adaptados para pessoas com diferentes necessidades físicas, idades e objetivos, promovendo a inclusão e o bem-estar para todos.

🌟 Visão Geral do Projeto
O FitAdapt tem como missão simplificar o acesso a um estilo de vida mais saudável e ativo. Acreditamos que todos merecem um plano de exercícios que respeite suas individualidades. Através de um questionário detalhado, a plataforma gera rotinas de treino seguras e eficazes, acompanhadas de vídeos guiados e acompanhamento de progresso.

✨ Funcionalidades Principais
Autenticação Robusta: Suporte para registro e login via E-mail e Senha ou Google Sign-In, garantindo acesso seguro e fácil.

Páginas Separadas de Login e Registro: Fluxo de usuário intuitivo com páginas dedicadas para "Entrar" (login) e "Criar Conta" (registro).

Questionário de Adaptação Inteligente: Um formulário detalhado que coleta informações sobre objetivos, limitações físicas e necessidades específicas do usuário.

Geração de Plano de Treino Personalizado: Com base nas respostas do questionário, o sistema exibe um plano de exercícios adaptado, com vídeos do YouTube incorporados.

Acompanhamento de Progresso Dinâmico: Um recurso visual de barra de progresso que atualiza em tempo real à medida que o usuário marca os exercícios como "concluídos", persistindo o progresso no banco de dados.

Gestão de Dados do Usuário: Armazenamento seguro de informações de questionário e progresso utilizando o Firestore do Firebase.

Responsividade Básica: Design adaptado para diferentes tamanhos de tela.

🚀 Tecnologias Utilizadas
Frontend:

HTML5: Estrutura das páginas web.

CSS3: Estilização e design da interface.

JavaScript (ES Modules): Lógica interativa e comunicação com o backend.

Backend como Serviço (BaaS):

Google Firebase:

Firebase Authentication: Para gerenciamento de usuários (registro, login, logout, Google Sign-In).

Cloud Firestore: Banco de dados NoSQL para armazenar dados do questionário e progresso do usuário.

Firebase Hosting: Hospedagem da aplicação web.

Recursos Externos:

Google Fonts: Para a tipografia (Poppins e Open Sans).

YouTube Embed API: Para incorporação de vídeos de exercícios.

Font Awesome/Icons8 (ícones): Para ícones (no caso do ícone do Google, vem do Icons8).

📁 Estrutura do Projeto
O projeto é organizado em arquivos HTML separados para cada seção principal da aplicação, um arquivo JavaScript para inicialização do Firebase e um arquivo CSS para estilização.

.
├── index.html          # Página inicial/marketing do FitAdapt
├── login.html          # Página dedicada para login de usuários existentes
├── registro.html       # Página dedicada para criar novas contas
├── questionario.html   # Formulário de adaptação do usuário
├── arealogad.html      # Área do usuário logado com o plano de treino
├── style.css           # Folha de estilos CSS global
└── firebase-init.js    # Arquivo para inicialização e exportação das instâncias do Firebase


💡 Como Usar o FitAdapt (Para Usuários)
Acesse a página inicial (index.html).

Clique em "Entrar" (para usuários existentes) ou "Comece Agora" / "Assinar agora" (para criar uma nova conta).

Se estiver criando uma conta: Use seu e-mail e senha, ou faça login com sua conta Google.

Se já tem conta: Entre com seu e-mail e senha, ou sua conta Google.

Após o login bem-sucedido, se for seu primeiro acesso, você será direcionado ao Questionário de Adaptação. Preencha-o para nos ajudar a criar seu plano.

Depois de preencher o questionário, você será redirecionado para a Área Logada, onde seu plano de treino personalizado será exibido.

Clique nos botões "Marcar como concluído" abaixo de cada exercício para acompanhar seu progresso. A barra de progresso no topo da página será atualizada!

