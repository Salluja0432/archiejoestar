# Histórico de versões — Space Invaders

Este documento registra a evolução do jogo desde sua primeira implementação até a estrutura modularizada atual.

As versões anteriores foram preservadas na pasta `versoes/`. O projeto atual utiliza TypeScript e está organizado em módulos dentro da pasta `src/`.

## Estrutura atual

O ponto de entrada do jogo é `src/index.ts`.

A lógica principal está em `src/services/Jogo.ts`, enquanto as classes, interfaces e tipos estão organizados em `src/models/`. As constantes utilizadas pelo projeto estão em `src/utils/`.

Os arquivos `space_invaders.ts` e `space_invaders_corrigido.ts` foram preservados como registros de etapas anteriores do desenvolvimento.

## Resumo da evolução

| Versão        | Etapa                             | O que foi acrescentado                                                     |
| ------------- | --------------------------------- | -------------------------------------------------------------------------- |
| 0.1           | Nave básica                       | Classe `Nave`, posição inicial e métodos de movimento.                     |
| 0.2           | Tela estática                     | Tabuleiro textual e representação visual da nave.                          |
| 0.3           | Controle em tempo real            | Leitura das setas do teclado e atualização periódica da tela.              |
| 0.4           | Disparos                          | Classe `Projetil` e movimentação dos disparos.                             |
| 0.5           | Inimigos e colisões               | Classe `Inimigo`, detecção de colisões e pontuação.                        |
| 0.6           | Invasores móveis e fim de partida | Movimento dos inimigos, inversão de direção, descida, vitória e Game Over. |
| Modularização | Organização do projeto            | Separação em módulos, classes, interfaces, tipos e constantes.             |

## Versão 0.1 — Nave básica

**Objetivo:** iniciar o projeto praticando Programação Orientada a Objetos.

- Criação da classe `Nave`.
- Definição da posição inicial.
- Criação dos métodos `moverEsquerda()` e `moverDireita()`.
- Testes de movimentação por chamadas diretas.

Resultado observado:

```text
Posição inicial: 20
Após mover para direita: 21
Após mover para esquerda: 20
```

Snapshot: `versoes/v0.1-nave-basica.ts`.

## Versão 0.2 — Tela estática

**Objetivo:** representar a nave visualmente no terminal.

- Criação de um tabuleiro de 40 colunas por 12 linhas.
- Utilização de laços `for` para desenhar a tela.
- Representação da nave pelo caractere `A`.
- Criação das bordas do tabuleiro.

Resultado observado: exibição do tabuleiro com a nave na região inferior.

Snapshot: `versoes/v0.2-tela-estatica.ts`.

## Versão 0.3 — Controle em tempo real

**Objetivo:** permitir o controle da nave diretamente pelo teclado.

- Leitura de eventos do teclado.
- Movimentação pelas setas esquerda e direita.
- Atualização periódica da tela.
- Utilização dos recursos de entrada do Node.js.

Resultado observado: o usuário confirmou que conseguiu movimentar a nave em tempo real.

Snapshot: `versoes/v0.3-controle-tempo-real.ts`.

## Versão 0.4 — Disparos

**Objetivo:** permitir que a nave ataque os inimigos.

- Criação da classe `Projetil`.
- Armazenamento dos disparos em um vetor.
- Movimento vertical dos projéteis.
- Remoção dos projéteis que saem da tela.

Resultado observado: o usuário confirmou que os disparos funcionaram.

Snapshot: `versoes/v0.4-projeteis.ts`.

## Versão 0.5 — Inimigos e colisões

**Objetivo:** adicionar alvos e um sistema de pontuação.

- Criação da classe `Inimigo`.
- Inclusão de três inimigos.
- Detecção de colisões entre projéteis e inimigos.
- Remoção dos objetos atingidos.
- Adição de 10 pontos por inimigo eliminado.

Resultado observado: a execução registrou 30 pontos e zero inimigos restantes.

Snapshot: `versoes/v0.5-inimigos-e-colisoes.ts`.

## Versão 0.6 — Invasores móveis e encerramento

**Objetivo:** adicionar movimentação aos inimigos e condições de encerramento da partida.

Foram implementados:

- Movimento horizontal dos inimigos.
- Inversão da direção ao alcançar as extremidades.
- Descida dos inimigos após a inversão.
- Condição de vitória quando todos os inimigos são eliminados.
- Condição de Game Over quando os inimigos alcançam a região da nave.

Resultado observado na versão anterior: a execução registrou 30 pontos, zero inimigos restantes e a mensagem de vitória.

Snapshot: `versoes/v0.6-invasores-moveis-e-vitoria.ts`.

## Versão modularizada — Estrutura atual

**Objetivo:** organizar o projeto em módulos, separando responsabilidades e aplicando os conceitos estudados no Módulo 3.

A estrutura atual está organizada da seguinte maneira:

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
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
├── TESTES_MANUAIS.md
└── HISTORICO_VERSOES.md
```

### Organização dos módulos

- `models/`: reúne as classes, interfaces e tipos utilizados pelo jogo.
- `services/`: contém a lógica principal da partida.
- `utils/`: reúne constantes utilizadas em diferentes partes do projeto.
- `index.ts`: inicia a aplicação.
- `versoes/`: preserva snapshots das etapas anteriores.

### Conceitos aplicados

- Programação Orientada a Objetos.
- Classes e objetos.
- Herança e classes abstratas.
- Encapsulamento.
- Interfaces.
- Tipos personalizados e union types.
- Arrays e manipulação de objetos.
- Importação e exportação de módulos.
- Organização de responsabilidades em arquivos separados.
- Verificação de tipos com TypeScript.

### Execução e verificação

O projeto atual é iniciado com:

```bash
npm start
```

A verificação de compilação é realizada com:

```bash
npm run check
```

Na execução registrada no PC do curso, foram confirmados o início do jogo, os controles básicos, os disparos, a exibição das informações da partida e o encerramento com Ctrl+C.

Após uma correção no encerramento automático do temporizador, o comando `npm run check` foi executado novamente sem apresentar erros.

Os testes específicos de colisão, vitória, Game Over e encerramento automático do temporizador na estrutura modularizada devem ser consultados em `TESTES_MANUAIS.md`.

## Considerações finais

O desenvolvimento foi realizado de forma incremental. Cada etapa acrescentou uma mecânica ou uma melhoria de organização ao projeto.

A modularização representa a evolução da estrutura do código, permitindo separar as responsabilidades e facilitar a manutenção, a leitura e a expansão do jogo.

Os arquivos históricos foram preservados para documentar a evolução sem confundir os resultados de testes de versões anteriores com os da implementação atual.
