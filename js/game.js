// Game Data - All questions in one quiz
const gameData = {
    historia: {
        title: "Quiz História 1º Ano - Renascimento e Reforma",
        questions: [
            // Renascimento Cultural
            {
                question: "O Renascimento Cultural ocorreu entre os séculos XIV e XVII. Qual das alternativas expressa um de seus principais valores?",
                options: [
                    "Teocentrismo, com foco absoluto na fé",
                    "Coletivismo social acima do indivíduo",
                    "Antropocentrismo, com valorização do ser humano",
                    "Isolamento cultural e religioso",
                    "Tradição oral como principal meio de transmissão de conhecimento"
                ],
                correct: 2,
                
            },
            {
                question: "Qual fator contribuiu significativamente para a difusão das ideias renascentistas?",
                options: [
                    "Aumento da produção agrícola",
                    "Desenvolvimento da imprensa",
                    "Guerras religiosas",
                    "Fim do comércio com o Oriente",
                    "Expansão dos feudos"
                ],
                correct: 1,
                
            },
            {
                question: "O que caracterizava o Classicismo no Renascimento?",
                options: [
                    "Rejeição dos valores greco-romanos",
                    "Adoção do gótico como estilo artístico",
                    "Valorização do passado greco-romano",
                    "Predomínio do estilo barroco",
                    "Isolamento cultural das cidades italianas"
                ],
                correct: 2,
                
            },
            {
                question: "Qual cidade italiana é considerada o berço do Renascimento?",
                options: [
                    "Roma",
                    "Milão",
                    "Veneza",
                    "Florença",
                    "Nápoles"
                ],
                correct: 3,
                
            },
            {
                question: "O que foi o mecenato durante o Renascimento?",
                options: [
                    "Imposto cobrado da população",
                    "Movimento filosófico renascentista",
                    "Apoio financeiro de ricos a artistas e intelectuais",
                    "Grupo militar das cidades-estados italianas",
                    "Tipo de governo republicano"
                ],
                correct: 2,
                
            },
            {
                question: "Qual dessas obras é de William Shakespeare, escritor do Renascimento?",
                options: [
                    "A República",
                    "Dom Quixote",
                    "Romeu e Julieta",
                    "Os Lusíadas",
                    "Macunaíma"
                ],
                correct: 2,
                
            },
            {
                question: "Qual avanço científico é associado ao Renascimento?",
                options: [
                    "Geocentrismo",
                    "Método científico",
                    "Teoria da geração espontânea",
                    "Medicina tradicional chinesa",
                    "Alquimia medieval"
                ],
                correct: 1,
                
            },
            {
                question: "Qual foi a importância da astronomia no Renascimento?",
                options: [
                    "Confirmar o modelo geocêntrico",
                    "Desenvolver a astrologia medieval",
                    "Propor o heliocentrismo, com o Sol no centro do sistema",
                    "Eliminar o estudo das estrelas",
                    "Divulgar o calendário lunar"
                ],
                correct: 2,
                
            },
            {
                question: "Qual pensador renascentista escreveu 'O Príncipe', obra política de grande influência?",
                options: [
                    "Maquiavel",
                    "Montesquieu",
                    "Platão",
                    "Descartes",
                    "Dante Alighieri"
                ],
                correct: 0,
                
            },
            {
                question: "Como o Renascimento contribuiu para a Reforma Religiosa?",
                options: [
                    "Com o retorno ao teocentrismo",
                    "Fortalecendo o poder papal",
                    "Com a valorização do racionalismo e da crítica à autoridade",
                    "Reforçando os dogmas católicos",
                    "Tornando o latim obrigatório nos cultos"
                ],
                correct: 2,
                
            },

            // Reforma Protestante
            {
                question: "Quem foi o principal iniciador da Reforma Protestante em 1517?",
                options: ["João Calvino", "Henrique VIII", "Martinho Lutero", "Tomás de Aquino", "Papa Leão X"],
                correct: 2,
                
            },
            {
                question: "Qual prática da Igreja Católica foi duramente criticada por Lutero?",
                options: ["Celebração da missa", "Confissão", "Venda de indulgências", "Batismo de crianças", "Uso de latim nas pregações"],
                correct: 2,
                
            },
            {
                question: "Qual documento marca o início oficial da Reforma Protestante?",
                options: ["Os Lusíadas", "A Bíblia em alemão", "95 Teses", "Contrato de Worms", "Concílio de Trento"],
                correct: 2,
                
            },
            {
                question: "Qual líder reformista defendeu a doutrina da predestinação?",
                options: ["Lutero", "Calvino", "Henrique VIII", "Erasmo de Roterdã", "Giordano Bruno"],
                correct: 1,
                
            },
            {
                question: "Qual igreja nacional foi criada por Henrique VIII na Inglaterra?",
                options: ["Igreja Ortodoxa", "Igreja Anglicana", "Igreja Batista", "Igreja Presbiteriana", "Igreja Reformada"],
                correct: 1,
                
            },
            {
                question: "O que foi a Contrarreforma?",
                options: ["A separação entre Igreja e Estado", "Movimento protestante da Inglaterra", "Reforma da Igreja Católica em resposta à Reforma Protestante", "Reforma filosófica da Renascença", "Expansão do luteranismo na França"],
                correct: 2,
                
            },
            {
                question: "Qual foi o principal objetivo do Concílio de Trento?",
                options: ["Reconhecer a fé protestante", "Reformar abusos e reafirmar dogmas católicos", "Separar o Estado da Igreja", "Excomungar os reis hereges", "Criar novas ordens religiosas"],
                correct: 1,
                
            },
            {
                question: "Quais os principais pilares do luteranismo?",
                options: ["Obediência ao papa e venda de indulgências", "Salvação pelas obras e culto aos santos", "Salvação pela fé, fim do celibato, fim das indulgências", "Uso do latim e construção de catedrais", "Criação de novas dioceses"],
                correct: 2,
                
            },
            {
                question: "O que foi o Tribunal da Inquisição, reativado na Contrarreforma?",
                options: ["Órgão militar para caçar protestantes", "Tribunal da Igreja para punir heresias", "Sistema de impostos sobre livros", "Corte criada por Lutero", "Reunião política de reis absolutistas"],
                correct: 1,
                
            },
            {
                question: "Quais foram as principais causas da Reforma Protestante?",
                options: ["Expansão da fé islâmica", "Corrupção da Igreja Católica e influência do Renascimento", "Fim do Império Romano e peste negra", "Criação da imprensa e invasão muçulmana", "Divisão da Igreja Ortodoxa"],
                correct: 1,
                
            },

            // Grandes Navegações, Centralização do Poder e Ascensão da Burguesia
            {
                question: "Qual foi o principal fator que impulsionou as Grandes Navegações nos séculos XV e XVI?",
                options: [
                    "A busca por novas rotas terrestres para o Oriente",
                    "A necessidade de fugir das guerras religiosas na Europa",
                    "A busca por metais preciosos e novas rotas comerciais para o Oriente",
                    "O desejo de difundir o cristianismo nas Américas",
                    "A superpopulação na Europa que exigia novas terras"
                ],
                correct: 2,
                },
            {
                question: "Como a ascensão da burguesia se relacionou com a centralização do poder na Europa Moderna?",
                options: [
                    "A burguesia apoiava os senhores feudais contra os reis",
                    "Os burgueses financiaram os reis em troca de privilégios comerciais",
                    "A burguesia liderou revoltas contra todas as formas de governo centralizado",
                    "Os burgueses eram contra o comércio ultramarino",
                    "A burguesia defendia o retorno ao sistema feudal"
                ],
                correct: 1,
                },

            // Humanismo e Renascimento
            {
                question: "Qual das seguintes cidades italianas NÃO foi um dos principais centros do Renascimento no século XV?",
                options: [
                    "Florença",
                    "Veneza",
                    "Nápoles",
                    "Milão",
                    "Palermo"
                ],
                correct: 4,
                 },
            {
                question: "Qual das seguintes características NÃO é uma marca da produção artística renascentista?",
                options: [
                    "Uso da perspectiva linear",
                    "Representação realista da figura humana",
                    "Temas predominantemente religiosos",
                    "Uso de ouro e cores planas na pintura",
                    "Estudo da anatomia humana"
                ],
                correct: 3,
                 },
            {
                question: "Qual desses escritores é considerado um dos principais representantes da literatura renascentista?",
                options: [
                    "Dante Alighieri",
                    "William Shakespeare",
                    "Santo Agostinho",
                    "Geoffrey Chaucer",
                    "São Tomás de Aquino"
                ],
                correct: 1,
                  },
            {
                question: "Qual foi uma das principais contribuições do Renascimento Científico?",
                options: [
                    "A manutenção do geocentrismo como teoria dominante",
                    "A rejeição de qualquer conhecimento da Antiguidade",
                    "A valorização da observação e da experimentação",
                    "A submissão da ciência à autoridade religiosa",
                    "A proibição das dissecações humanas"
                ],
                correct: 2,
                    },
            {
                question: "Qual das seguintes obras é considerada um marco do pensamento humanista do Renascimento?",
                options: [
                    "A Divina Comédia, de Dante",
                    "O Príncipe, de Maquiavel",
                    "A Cidade de Deus, de Santo Agostinho",
                    "A Suma Teológica, de Tomás de Aquino",
                    "A Canção de Rolando"
                ],
                correct: 1,
                  },
            {
                question: "Qual inovação técnica foi fundamental para a difusão das ideias renascentistas?",
                options: [
                    "A bússola",
                    "A pólvora",
                    "A imprensa de tipos móveis",
                    "O astrolábio",
                    "O relógio mecânico"
                ],
                correct: 2,
                  },
            {
                question: "Qual desses elementos caracteriza a arquitetura renascentista?",
                options: [
                    "Arcos ogivais e vitrais coloridos",
                    "Formas geométricas puras e proporções harmônicas",
                    "Torres altas e esguias",
                    "Decoração excessiva e assimétrica",
                    "Paredes grossas com poucas aberturas"
                ],
                correct: 1,
                  },
            {
                question: "Qual foi o papel dos mecenas no Renascimento?",
                options: [
                    "Eram artistas que ensinavam técnicas de pintura",
                    "Eram filósofos que criticavam a Igreja",
                    "Eram governantes e ricos comerciantes que financiavam artistas e intelectuais",
                    "Eram líderes religiosos que encomendavam obras de arte",
                    "Eram cientistas que desenvolviam novas teorias"
                ],
                correct: 2,
                  },

            // Apoio a Lutero e Base do Luteranismo
            {
                question: "Qual príncipe alemão protegeu Lutero após sua excomunhão em 1521, escondendo-o no Castelo de Wartburg?",
                options: [
                    "Frederico, o Sábio da Saxônia",
                    "Carlos V do Sacro Império",
                    "Henrique VIII da Inglaterra",
                    "Francisco I da França",
                    "Maximiliano I da Baviera"
                ],
                correct: 0,
                  },
            {
                question: "Qual das alternativas NÃO é um princípio fundamental do Luteranismo?",
                options: [
                    "Salvação somente pela fé (Sola Fide)",
                    "Sacerdócio universal de todos os crentes",
                    "A Bíblia como única fonte de autoridade religiosa (Sola Scriptura)",
                    "A veneração de relíquias sagradas",
                    "A negação da autoridade papal"
                ],
                correct: 3,
                 },

            // Anabatismo
            {
                question: "Qual característica NÃO era típica dos anabatistas do século XVI?",
                options: [
                    "Batismo apenas de adultos conscientes",
                    "Separação entre Igreja e Estado",
                    "Pacifismo e recusa ao serviço militar",
                    "Participação ativa nos governos das cidades",
                    "Comunhão de bens em algumas comunidades"
                ],
                correct: 3,
                },
            {
                question: "Qual líder anabatista liderou a revolta de Münster (1534-1535), estabelecendo uma teocracia radical na cidade?",
                options: [
                    "Menno Simons",
                    "Thomas Müntzer",
                    "Jan Matthys",
                    "Ulrich Zwingli",
                    "João Calvino"
                ],
                correct: 2,
                   },

            // Calvinismo
            {
                question: "Qual é o conceito central da doutrina calvinista que afirma que Deus já determinou quem será salvo?",
                options: [
                    "Livre-arbítrio",
                    "Predestinação",
                    "Transubstanciação",
                    "Indulgências",
                    "Purgatório"
                ],
                correct: 1,
                 },
            {
                question: "Qual das seguintes práticas foi característica das comunidades calvinistas?",
                options: [
                    "Uso de imagens religiosas nos cultos",
                    "Celebração elaborada de festas religiosas",
                    "Simplicidade na arquitetura das igrejas e nos cultos",
                    "Hierarquia eclesiástica complexa",
                    "Veneração de santos"
                ],
                correct: 2,
                 },

            // Anglicanismo
            {
                question: "Qual foi o principal motivo que levou Henrique VIII a romper com a Igreja Católica em 1534?",
                options: [
                    "Sua discordância com os dogmas católicos",
                    "O desejo de se casar com Ana Bolena",
                    "A influência das ideias de Lutero",
                    "A cobrança de impostos pela Igreja",
                    "A corrupção do clero inglês"
                ],
                correct: 1,
                 },
            {
                question: "Em qual importante cidade mercantil da Europa do século XV a família Arnolfini, retratada no famoso quadro de Jan van Eyck, prosperou como mercadores de tecidos?",
                options: [
                    "Bruges, na Flandres (atual Bélgica)",
                    "Florença, na Itália",
                    "Lisboa, em Portugal",
                    "Antuérpia, nos Países Baixos",
                    "Lyon, na França"
                ],
                correct: 0,
               },

            // Contrarreforma
            {
                question: "Qual foi o principal objetivo do Concílio de Trento (1545-1563)?",
                options: [
                    "Negociar a paz com os protestantes",
                    "Reafirmar os dogmas católicos e combater os abusos do clero",
                    "Criar uma nova Bíblia católica",
                    "Estabelecer a Inquisição",
                    "Promover a venda de indulgências"
                ],
                correct: 1,
                   },
            {
                question: "Qual ordem religiosa foi fundada por Inácio de Loyola em 1540 e se tornou uma das principais forças da Contrarreforma?",
                options: [
                    "Os Franciscanos",
                    "Os Dominicanos",
                    "A Companhia de Jesus (Jesuítas)",
                    "Os Beneditinos",
                    "Os Carmelitas"
                ],
                correct: 2,
                
                }
        ]
    }
};
// Estado do jogo
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

// Elementos do DOM
const questionModal = document.getElementById('quizContainer');
const resultModal = document.getElementById('resultContainer');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const explanationContainer = document.getElementById('explanationContainer');
const nextButton = document.getElementById('nextQuestionBtn');
const explanationText = document.getElementById('explanationText');
const funFactText = document.getElementById('funFactText');
const scoreElement = document.getElementById('score');
const resultMessage = document.getElementById('resultMessage');
const questionNumber = document.getElementById('questionNumber');
const totalQuestions = document.getElementById('totalQuestions');
const restartButton = document.getElementById('restartButton');

// Inicia o quiz
function startQuiz(quizType = 'historia') {
    // Esconde todos os elementos primeiro
    const startScreen = document.getElementById('startScreen');
    const gameIntro = document.querySelector('.game-intro');
    const gameBoard = document.querySelector('.game-board');
    const stars = document.querySelector('.stars');
    
    // Oculta os elementos da tela inicial com transição suave
    if (startScreen) {
        startScreen.style.opacity = '0';
        setTimeout(() => {
            startScreen.style.display = 'none';
        }, 200);
    }
    
    if (gameIntro) {
        gameIntro.style.opacity = '0';
        setTimeout(() => {
            gameIntro.style.display = 'none';
        }, 200);
    }
    
    if (gameBoard) {
        gameBoard.style.opacity = '0';
        setTimeout(() => {
            gameBoard.style.display = 'none';
        }, 200);
    }
    
    // Garante que o fundo de estrelas fique atrás do quiz
    if (stars) {
        stars.style.zIndex = '-1';
    }
    
    // Previne rolagem da página de fundo
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Reseta o estado do jogo
    currentPath = quizType;
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    
    // Limpa qualquer conteúdo anterior
    if (optionsContainer) optionsContainer.innerHTML = '';
    if (explanationContainer) explanationContainer.style.display = 'none';
    if (nextButton) nextButton.style.display = 'none';
    
    // Mostra o container do quiz
    if (questionModal) {
        questionModal.style.display = 'block';
        // Rola para o topo do quiz
        questionModal.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Atualiza o título do quiz
    const quizTitle = document.getElementById('quizTitle');
    if (quizTitle) quizTitle.textContent = gameData[currentPath]?.title || 'Quiz';
    
    // Atualiza o contador de perguntas
    updateQuestionCounter();
    
    // Mostra a primeira pergunta
    showQuestion();
}

// Função para fechar todos os modais e voltar para a tela inicial
function closeAllModals() {
    // Esconde os containers de quiz e resultados
    questionModal.style.display = 'none';
    resultModal.style.display = 'none';
    
    // Mostra a tela inicial e o game board
    document.getElementById('startScreen').style.display = 'block';
    document.querySelector('.game-intro').style.display = 'block';
    document.querySelector('.game-board').style.display = 'block';
    
    // Limpa qualquer estado do quiz
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
}

// Elementos de navegação
const closeQuizBtn = document.getElementById('closeQuizBtn');
const restartQuizBtn = document.getElementById('restartQuizBtn');
const homeButton = document.getElementById('homeButton');
const chooseQuizButton = document.getElementById('chooseQuizButton');

// Função para fechar todos os modais e restaurar o estado inicial
function closeAllModals() {
    // Recarrega a página para garantir que tudo volte ao estado inicial
    // Usamos um pequeno atraso para permitir que a animação de clique seja concluída
    setTimeout(() => {
        window.location.href = window.location.pathname;
    }, 150);
}

// Função para voltar para a tela inicial
function goToHome() {
    closeAllModals();
    // Rola para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para atualizar o contador de perguntas
function updateQuestionCounter() {
    if (questionNumber && totalQuestions && gameData[currentPath]?.questions) {
        questionNumber.textContent = currentQuestionIndex + 1;
        totalQuestions.textContent = gameData[currentPath].questions.length;
    }
}

// Função para reiniciar o quiz atual
function restartCurrentQuiz() {
    // Esconde o modal de resultados se estiver visível
    if (resultModal) {
        resultModal.style.display = 'none';
    }
    
    // Reseta o estado do quiz
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    
    // Limpa os estilos das opções de resposta
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
        button.style.pointerEvents = 'auto';
    });
    
    // Limpa a explicação
    if (explanationContainer) {
        explanationContainer.style.display = 'none';
    }
    
    // Configura o botão de próxima pergunta
    if (nextButton) {
        nextButton.style.display = 'none';
        nextButton.textContent = 'Próxima Pergunta';
        nextButton.innerHTML = 'Próxima Pergunta <i class="fas fa-arrow-right"></i>';
        nextButton.onclick = nextQuestion;
        // Garante que o evento de toque funcione corretamente
        nextButton.addEventListener('touchend', nextQuestion, { passive: true });
    }
    
    // Mostra a primeira pergunta
    showQuestion();
    
    // Rola para o topo do quiz
    if (questionModal) {
        questionModal.scrollTo(0, 0);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicia o quiz quando um botão de iniciar é clicado
    document.querySelectorAll('.start-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const quizType = e.target.dataset.path;
            startQuiz(quizType);
        });
    });

    // Botão de próxima pergunta
    nextButton.addEventListener('click', nextQuestion);

    // Botão de reiniciar quiz
    restartButton.addEventListener('click', () => {
        closeAllModals();
        startQuiz();
    });

    // Fecha os modais ao clicar no botão de fechar
    document.querySelectorAll('.close-modal-btn').forEach(button => {
        button.addEventListener('click', closeAllModals);
    });

    // Fecha os modais ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
        if (e.target === questionModal || e.target === resultModal) {
            closeAllModals();
        }
    });
    
    // Fecha o modal ao pressionar a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Event listeners para os botões de navegação
    if (closeQuizBtn) {
        closeQuizBtn.addEventListener('click', closeAllModals);
    }
    
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', restartCurrentQuiz);
    }
    
    if (homeButton) {
        homeButton.addEventListener('click', goToHome);
    }
    
    if (chooseQuizButton) {
        chooseQuizButton.addEventListener('click', () => {
            closeAllModals();
            document.getElementById('startScreen').style.display = 'block';
            document.querySelector('.game-intro').style.display = 'block';
            document.querySelector('.game-board').style.display = 'block';
        });
    }
});

// Função para criar efeito de confete
function createConfetti() {
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
    const container = document.getElementById('quizContainer');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.zIndex = '1000';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        container.appendChild(confetti);
        
        // Remove o confete após a animação
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    // Adiciona a animação de queda
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(calc(100vh + 20px)) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função para mostrar a tela de resultados
function showResults() {
    const totalQuestions = gameData[currentPath].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Atualiza a pontuação
    document.getElementById('score').textContent = `${score}/${totalQuestions}`;
    
    // Define a mensagem com base na pontuação
    let message = '';
    let emoji = '';
    
    if (percentage >= 80) {
        message = 'Excelente! Você é um verdadeiro especialista!';
        emoji = '🏆';
        createConfetti();
    } else if (percentage >= 60) {
        message = 'Muito bom! Continue assim!';
        emoji = '🌟';
    } else if (percentage >= 40) {
        message = 'Bom trabalho! Você está no caminho certo!';
        emoji = '✨';
    } else {
        message = 'Continue praticando! Você pode melhorar!';
        emoji = '💪';
    }
    
    document.getElementById('resultMessage').innerHTML = `${emoji} ${message} ${emoji}`;
    
    // Esconde o quiz e mostra os resultados
    questionModal.style.display = 'none';
    resultModal.style.display = 'block';
    
    // Adiciona animação ao container de resultados
    resultModal.style.animation = 'bounceIn 0.8s';
    
    // Adiciona estilos de animação
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes bounceIn {
            0% { transform: scale(0.5); opacity: 0; }
            60% { transform: scale(1.1); opacity: 1; }
            80% { transform: scale(0.9); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Mostra a pergunta atual
function showQuestion() {
    const questionData = gameData[currentPath].questions[currentQuestionIndex];
    
    // Rola para o topo quando uma nova pergunta é carregada
    if (questionModal) {
        questionModal.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Atualiza o contador de perguntas no cabeçalho
    updateQuestionCounter();
    
    // Atualiza o contador de perguntas no modal
    if (questionNumber) questionNumber.textContent = currentQuestionIndex + 1;
    if (totalQuestions) totalQuestions.textContent = gameData[currentPath].questions.length;
    
    // Atualiza o título do quiz
    const quizTitle = document.getElementById('quizTitle');
    if (quizTitle) quizTitle.textContent = gameData[currentPath]?.title || 'Quiz';
    
    // Atualiza o texto da pergunta
    if (questionText) questionText.textContent = questionData.question;
    
    // Limpa as opções anteriores
    if (optionsContainer) optionsContainer.innerHTML = '';
    
    // Configura o botão de próxima pergunta (inicialmente escondido)
    if (nextButton) {
        nextButton.style.display = 'none';
        nextButton.innerHTML = 'Próxima Pergunta <i class="fas fa-arrow-right"></i>';
    }
    
    // Esconde a explicação e remove o botão de próxima pergunta se existir
    if (explanationContainer) {
        explanationContainer.style.display = 'none';
        const nextBtn = document.getElementById('nextQuestionBtn');
        if (nextBtn) nextBtn.remove();
    }
    
    // Garante que os botões de navegação estejam visíveis
    const quizHeader = document.querySelector('.quiz-header');
    if (quizHeader) {
        const navButtons = `
            <div class="quiz-header-top">
                <button id="closeQuizBtn" class="quiz-nav-btn" title="Fechar Quiz">
                    <i class="fas fa-times"></i>
                </button>
                <div class="question-counter">
                    <span id="questionNumber">${currentQuestionIndex + 1}</span> / <span id="totalQuestions">${gameData[currentPath].questions.length}</span>
                </div>
                <button id="restartQuizBtn" class="quiz-nav-btn" title="Recomeçar Quiz">
                    <i class="fas fa-redo"></i>
                </button>
            </div>
        `;
        quizHeader.innerHTML = navButtons;
        
        // Reconfigura os event listeners dos botões
        const closeBtn = document.getElementById('closeQuizBtn');
        const restartBtn = document.getElementById('restartQuizBtn');
        
        if (closeBtn) closeBtn.addEventListener('click', closeAllModals);
        if (restartBtn) restartBtn.addEventListener('click', restartCurrentQuiz);
    }
    
    // Garante que a resposta correta esteja entre as 4 primeiras opções
    let optionsToShow = [...questionData.options];
    let correctIndex = questionData.correct;
    
    // Se a resposta correta estiver além da 4ª posição, troca com a última posição mostrada
    if (correctIndex >= 4) {
        // Salva a opção que será movida
        const temp = optionsToShow[3];
        // Move a resposta correta para a posição 3 (4ª opção)
        optionsToShow[3] = optionsToShow[correctIndex];
        // Move a opção que estava na posição 3 para a posição original da resposta correta
        optionsToShow[correctIndex] = temp;
        // Atualiza o índice da resposta correta
        correctIndex = 3;
    }
    
    // Mostra apenas as 4 primeiras opções
    optionsToShow.slice(0, 4).forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}.</span>
            <span class="option-text">${option}</span>
        `;
        button.onclick = () => selectOption(button, index);
        optionsContainer.appendChild(button);
    });
    
    // Atualiza o índice da resposta correta para o novo contexto de 4 opções
    gameData[currentPath].questions[currentQuestionIndex].correct = correctIndex;
    
    // Rola para o topo do modal
    questionModal.scrollTo(0, 0);
}

// Seleciona uma opção
function selectOption(selectedButton, selectedIndex) {
    // Desabilita todos os botões
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.pointerEvents = 'none';
    });
    
    // Rola para o topo do modal após um pequeno delay
    setTimeout(() => {
        if (questionModal) {
            // Usa scrollIntoView para melhor compatibilidade com dispositivos móveis
            const header = document.querySelector('.quiz-header');
            if (header) {
                header.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            } else {
                questionModal.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    }, 100);

    const questionData = gameData[currentPath].questions[currentQuestionIndex];
    // Usa o índice atualizado da resposta correta
    const isCorrect = selectedIndex === questionData.correct;

    // Adiciona classe de resposta correta/incorreta
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
        // Avança automaticamente para a próxima pergunta após um breve atraso
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    } else {
        selectedButton.classList.add('incorrect');
        // Destaca a resposta correta em verde
        const correctButton = document.querySelectorAll('.option-btn')[questionData.correct];
        if (correctButton) {
            correctButton.classList.add('correct');
        }
        
        // Mostra a explicação e o botão de próxima pergunta
        const explanationContainer = document.getElementById('explanationContainer');
        const explanationText = document.getElementById('explanationText');
        
        if (explanationContainer && explanationText) {
            // Atualiza o texto da explicação se existir
            if (questionData.explanation) {
                explanationText.textContent = questionData.explanation;
            } else {
                explanationText.textContent = 'Nenhuma explicação disponível.';
            }
            
            // Mostra o container de explicação
            explanationContainer.style.display = 'block';
            
            // Remove o botão antigo se existir
            const oldNextBtn = document.getElementById('nextQuestionBtn');
            if (oldNextBtn) {
                oldNextBtn.remove();
            }
            
            // Cria e adiciona o novo botão
            const newNextBtn = document.createElement('button');
            newNextBtn.id = 'nextQuestionBtn';
            newNextBtn.className = 'next-question-btn';
            newNextBtn.innerHTML = 'Próxima Pergunta <i class="fas fa-arrow-right"></i>';
            newNextBtn.addEventListener('click', nextQuestion);
            
            // Adiciona o botão após a explicação
            explanationContainer.querySelector('.explanation-box').appendChild(newNextBtn);
            
            // Rola até a explicação
            setTimeout(() => {
                explanationContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        } else {
            // Se não houver container de explicação, avança automaticamente
            setTimeout(() => {
                nextQuestion();
            }, 1500);
        }
    }
}

// Vai para a próxima pergunta ou mostra o resultado
function nextQuestion() {
    // Verifica se existe uma próxima pergunta
    if (currentQuestionIndex + 1 < gameData[currentPath].questions.length) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        // Se for a última pergunta, mostra os resultados
        showResults();
    }
}

// Mostra o resultado do quiz
function showResults() {
    const totalQuestions = gameData[currentPath].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Define a mensagem com base na pontuação
    let resultMessage;
    
    if (percentage >= 90) {
        resultMessage = '🏆 Excelente! Você é um verdadeiro especialista!';
    } else if (percentage >= 70) {
        resultMessage = '🎉 Muito bom! Continue assim!';
    } else if (percentage >= 50) {
        resultMessage = '👍 Bom trabalho! Com um pouco mais de estudo você vai longe!';
    } else {
        resultMessage = '🤔 Não desanime! Reveja o conteúdo e tente novamente!';
    }
    
    // Atualiza os elementos da tela de resultados
    const resultContainer = document.getElementById('resultContainer');
    const scoreElement = document.getElementById('score');
    const resultMessageElement = document.getElementById('resultMessage');
    
    // Atualiza a pontuação
    scoreElement.textContent = `${percentage}%`;
    scoreElement.setAttribute('data-score', percentage);
    
    // Atualiza a mensagem
    resultMessageElement.textContent = resultMessage;
    
    // Mostra o container de resultados e esconde o quiz
    document.getElementById('quizContainer').style.display = 'none';
    resultContainer.style.display = 'block';
    
    // Adiciona classes para animação do círculo de pontuação
    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
        scoreCircle.style.setProperty('--percentage', `${percentage}%`);
    }
    
    // Rola para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close modal
function closeModal() {
    questionModal.style.display = 'none';
}

// Add tooltip functionality
function addTooltip(element, text) {
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = 'ⓘ<span class="tooltiptext">' + text + '</span>';
    element.appendChild(tooltip);
}

// Add tooltips to elements with data-tooltip attribute
document.querySelectorAll('[data-tooltip]').forEach(element => {
    addTooltip(element, element.dataset.tooltip);
});