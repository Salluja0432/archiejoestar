# Space Invaders

## Sobre o jogo

Space Invaders é um jogo desenvolvido em TypeScript e executado diretamente no terminal. O jogador controla uma nave, movimenta-se para os lados e dispara contra os invasores.

Na versão modularizada, o jogo apresenta:

- Quatro inimigos com aparências diferentes.
- Inimigos que se movimentam horizontalmente e descem ao alcançar as bordas.
- Disparos e detecção de colisões.
- 10 pontos por inimigo eliminado.
- Três vidas para o jogador.
- Condições de vitória e Game Over.

A partida termina em vitória quando todos os inimigos são eliminados. O jogador perde uma vida quando os invasores alcançam a linha da nave; a partida termina quando as vidas chegam a zero.

## Como acessar e executar

É necessário ter o [Node.js](https://nodejs.org/) instalado.

### 1. Baixar o projeto

Caso ainda não tenha o repositório no computador, abra o terminal e execute:

```bash
git clone -b module3 --single-branch https://github.com/Salluja0432/archiejoestar.git
cd archiejoestar/SPACE_INVADERS
```

Se o repositório já estiver clonado, basta abrir a pasta `SPACE_INVADERS` no Visual Studio Code e abrir um terminal nela.

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o jogo

```bash
npm start
```

O comando inicia a versão modularizada pelo arquivo `src/index.ts`, utilizando o `tsx` para executar TypeScript diretamente.

### 4. Verificar a compilação

```bash
npm run check
```

Esse comando executa o TypeScript Compiler sem gerar arquivos de saída. Se não houver erros, o terminal volta ao prompt sem apresentar mensagens de erro.

## Controles

| Tecla | Ação |
| --- | --- |
| Seta para a esquerda (←) | Movimentar a nave para a esquerda |
| Seta para a direita (→) | Movimentar a nave para a direita |
| Espaço | Atirar |
| Ctrl + C | Encerrar o jogo |

## Estrutura do projeto

```text
SPACE_INVADERS/
├── src/
│   ├── models/
│   │   ├── interfaces.ts
│   │   ├── tipos.ts
│   │   ├── Personagem.ts
│   │   ├── Nave.ts
│   │   ├── Projetil.ts
│   │   ├── PoderDisparo.ts
│   │   └── Inimigo.ts
│   ├── services/
│   │   └── Jogo.ts
│   ├── utils/
│   │   └── constantes.ts
│   └── index.ts
├── versoes/
├── SPACE_INVADERS.ts
├── HISTORICO_VERSOES.md
├── TESTES_MANUAIS.md
├── README.md
├── package.json
├── package-lock.json
└── tsconfig.json
```

### O que cada parte faz

- **models/**: reúne as classes, interfaces e tipos usados no jogo.
- **services/Jogo.ts**: controla a partida, os movimentos, os disparos, as colisões, a pontuação e o encerramento.
- **utils/constantes.ts**: guarda as dimensões do tabuleiro.
- **index.ts**: cria o jogo e inicia a execução.
- **versoes/**: preserva snapshots de etapas anteriores do desenvolvimento.
- **HISTORICO_VERSOES.md**: registra a evolução do projeto.
- **TESTES_MANUAIS.md**: documenta os testes e seus resultados.

O arquivo `SPACE_INVADERS.ts` é uma implementação em arquivo único mantida na pasta do projeto. O comando `npm start` executa a versão modularizada, iniciada por `src/index.ts`.

## Tecnologias utilizadas

- **TypeScript**: linguagem utilizada no desenvolvimento, com tipagem estática.
- **Node.js**: ambiente de execução do projeto.
- **tsx**: ferramenta que permite executar os arquivos TypeScript.
- **npm**: instalação e gerenciamento das dependências e dos comandos do projeto.
- **readline**: módulo nativo do Node.js utilizado para receber os comandos do teclado.

## O que aprendemos

Durante o desenvolvimento, aplicamos e praticamos:

- Programação Orientada a Objetos.
- Criação de classes e objetos.
- Herança e classes abstratas.
- Encapsulamento com atributos `private` e `protected`.
- Interfaces e implementação de contratos.
- Getters e setters, incluindo validação de valores.
- Tipos personalizados e *union types*.
- Arrays e manipulação de objetos.
- Laços de repetição e estruturas condicionais.
- Importação e exportação de módulos.
- Organização do código em arquivos e pastas.
- Entrada de dados pelo teclado no terminal.
- Atualização periódica do jogo com temporizadores.
- Detecção de colisões e controle do estado da partida.
- Verificação de tipos e compilação com TypeScript.
- Testes manuais e depuração.

## Testes e histórico

Os testes manuais estão descritos em `TESTES_MANUAIS.md`. O histórico da evolução do jogo está em `HISTORICO_VERSOES.md`, e as implementações anteriores foram preservadas em `versoes/`.

Para conferir a compilação no seu computador, execute `npm run check`. Para iniciar a partida, execute `npm start`.
