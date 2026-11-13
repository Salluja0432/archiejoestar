# Space Invaders — Jovem Tech

Projeto desenvolvido durante o Módulo 3 do Jovem Tech. O repositório contém duas implementações jogáveis do Space Invaders: uma executada no terminal com TypeScript e outra executada no navegador com HTML, CSS e JavaScript.

## Versões do jogo

### Versão de terminal (TypeScript)

O jogador controla uma nave pelo teclado, movimenta-se para os lados e dispara contra quatro invasores. Os invasores se movimentam horizontalmente e descem ao alcançar as bordas. Cada inimigo eliminado vale 10 pontos. O jogador começa com três vidas.

A partida termina quando todos os invasores são eliminados ou quando as vidas acabam.

### Versão de navegador (HTML)

A versão web apresenta uma interface gráfica com uma tela inicial, um tabuleiro desenhado em Canvas, pontuação, vidas e botões para iniciar ou reiniciar a partida. O jogador enfrenta 30 invasores distribuídos em três linhas, com quatro aparências diferentes.

Os invasores avançam horizontalmente, mudam de direção e descem ao alcançar as laterais. Cada inimigo eliminado vale 10 pontos. Quando a formação alcança a linha da nave, o jogador perde uma vida e os invasores retornam às suas alturas iniciais. A partida termina quando todos são eliminados ou quando as três vidas acabam.

As versões compartilham o tema e conceitos de programação, mas têm implementações e quantidades de inimigos diferentes.

## Como executar

### Requisitos da versão de terminal

É necessário ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:

   ~~~bash
   git clone -b module3 --single-branch https://github.com/Salluja0432/archiejoestar.git
   ~~~

2. Entre na pasta do projeto:

   ~~~bash
   cd archiejoestar/SPACE_INVADERS
   ~~~

3. Instale as dependências:

   ~~~bash
   npm install
   ~~~

4. Inicie o jogo:

   ~~~bash
   npm start
   ~~~

O comando inicia a versão TypeScript pelo arquivo src/index.ts, usando tsx para executar TypeScript diretamente no Node.js.

Para verificar os tipos e a compilação TypeScript:

~~~bash
npm run check
~~~

### Como executar a versão de navegador

A versão web não precisa de Node.js, npm, instalação de dependências ou servidor.

1. Abra a pasta SPACE_INVADERS/web.
2. Abra o arquivo space_invaders.html com um navegador atualizado, como Chrome, Edge ou Firefox.
3. Clique em **Iniciar jogo**.

Também é possível abrir o arquivo diretamente pelo explorador de arquivos. O HTML, CSS e JavaScript estão reunidos no próprio arquivo.

## Controles

| Tecla | Ação |
| --- | --- |
| Seta para a esquerda (←) ou A | Mover a nave para a esquerda |
| Seta para a direita (→) ou D | Mover a nave para a direita |
| Espaço | Atirar |
| Enter | Iniciar ou jogar novamente na versão web |
| Ctrl + C | Encerrar a versão de terminal |

Na versão web, o botão **Reiniciar** retorna à tela inicial e restaura a pontuação, as vidas e os inimigos.

## Estrutura do projeto

~~~text
SPACE_INVADERS/
├── src/                         # Implementação de terminal em TypeScript
│   ├── models/                  # Classes, interfaces e tipos
│   ├── services/                # Lógica da partida
│   ├── utils/                   # Constantes
│   ├── testes/                  # Teste de validação
│   └── index.ts                 # Ponto de entrada do terminal
├── web/
│   └── space_invaders.html      # Implementação para navegador
├── versoes/                     # Etapas anteriores da implementação
├── SPACE_INVADERS.ts            # Implementação anterior em arquivo único
├── HISTORICO_VERSOES.md         # Evolução do projeto
├── TESTES_MANUAIS.md            # Registro de testes
├── README.md                    # Este documento
├── package.json                 # Comandos e dependências Node.js
├── package-lock.json            # Versões exatas das dependências
└── tsconfig.json                # Configuração do TypeScript
~~~

### Responsabilidade das pastas e arquivos

- **src/models/**: contém as classes, interfaces e tipos usados na versão TypeScript.
- **src/services/Jogo.ts**: controla a partida de terminal, os movimentos, disparos, colisões, pontuação e encerramento.
- **src/utils/constantes.ts**: reúne as dimensões do tabuleiro da versão de terminal.
- **src/index.ts**: inicia a versão de terminal.
- **src/testes/**: contém o teste de validação do projeto.
- **web/space_invaders.html**: reúne a estrutura HTML, os estilos CSS e a lógica JavaScript da versão para navegador.
- **versoes/**: preserva implementações anteriores do desenvolvimento.
- **SPACE_INVADERS.ts**: mantém a implementação em arquivo único, separada da versão modularizada executada por npm start.

## Tecnologias utilizadas

### Versão de terminal

- **TypeScript**: linguagem de programação com tipagem estática.
- **Node.js**: ambiente de execução.
- **tsx**: execução dos arquivos TypeScript.
- **npm**: instalação e gerenciamento das dependências e dos comandos.
- **readline**: leitura dos comandos do teclado no terminal.

### Versão de navegador

- **HTML5**: estrutura da página e elementos da interface.
- **CSS3**: cores, posicionamento, responsividade e aparência dos componentes.
- **JavaScript**: classes, regras, controles e atualização do jogo.
- **Canvas 2D**: desenho da nave, inimigos, projéteis e cenário.
- **DOM e eventos de teclado**: atualização da pontuação e das vidas, além da leitura dos comandos.
- **requestAnimationFrame**: atualização contínua da animação no navegador.

A versão web é autocontida: não utiliza bibliotecas externas nem arquivos adicionais de CSS ou JavaScript.

## O que aprendemos

Durante o desenvolvimento, praticamos:

- Programação Orientada a Objetos.
- Criação de classes e objetos.
- Herança, classes abstratas e polimorfismo.
- Encapsulamento com atributos privados e protegidos na versão TypeScript.
- Interfaces, tipos personalizados e validação de valores.
- Getters e setters.
- Arrays, laços de repetição e estruturas condicionais.
- Importação e exportação de módulos.
- Organização do código em pastas e arquivos.
- Entrada de dados pelo teclado.
- Eventos do teclado no navegador.
- Manipulação de elementos HTML pelo DOM.
- Desenho e animação com Canvas 2D.
- Temporizadores e requestAnimationFrame.
- Detecção de colisões, pontuação, vidas e condições de vitória e derrota.
- Verificação de tipos, compilação, testes manuais e depuração.

## Testes e histórico

O arquivo TESTES_MANUAIS.md registra os testes confirmados e os que ainda precisam de execução manual, separando a versão de terminal da versão web.

O arquivo HISTORICO_VERSOES.md registra a evolução do jogo desde as primeiras implementações até a organização modular e a inclusão da versão de navegador. As etapas anteriores foram preservadas na pasta versoes/.

Para iniciar a versão de terminal, use npm start. Para abrir a versão de navegador, abra web/space_invaders.html. Para verificar a compilação TypeScript, use npm run check.
