# Histórico de versões — Space Invaders

Este documento registra a evolução do jogo desde sua primeira implementação até as versões atuais de terminal e navegador.

As implementações anteriores em TypeScript foram preservadas na pasta versoes/. A implementação modularizada de terminal está organizada em src/, e a versão web está em web/space_invaders.html.

## Estrutura atual

O projeto possui duas implementações:

- **Terminal:** iniciada por src/index.ts, com lógica principal em src/services/Jogo.ts e classes, interfaces e tipos em src/models/.
- **Navegador:** página autocontida em web/space_invaders.html, com HTML, CSS e JavaScript no mesmo arquivo.

A pasta versoes/ preserva os snapshots das etapas anteriores em TypeScript.

## Resumo da evolução

| Etapa | O que foi acrescentado |
| --- | --- |
| 0.1 — Nave básica | Classe Nave, posição inicial e métodos de movimentação. |
| 0.2 — Tela estática | Tabuleiro textual e representação visual da nave. |
| 0.3 — Controle em tempo real | Leitura das setas do teclado e atualização periódica da tela. |
| 0.4 — Projéteis | Classe Projetil e movimentação dos disparos. |
| 0.5 — Inimigos e colisões | Inimigos, detecção de colisões e pontuação. |
| 0.6 — Invasores móveis e vitória | Movimento dos inimigos, inversão de direção, descida, vitória e Game Over. |
| Modularização TypeScript | Separação em models, services e utils, com inicialização por src/index.ts. |
| Versão web | Interface de navegador com HTML, CSS, JavaScript e Canvas 2D. |

## Versões 0.1 a 0.6 — Implementações iniciais

### Versão 0.1 — Nave básica

**Objetivo:** iniciar o projeto praticando Programação Orientada a Objetos.

- Criação da classe Nave.
- Definição da posição inicial.
- Criação dos métodos moverEsquerda() e moverDireita().
- Testes de movimentação por chamadas diretas.

Snapshot: versoes/v0.1-nave-basica.ts.

### Versão 0.2 — Tela estática

**Objetivo:** representar a nave visualmente no terminal.

- Criação de um tabuleiro de 40 colunas por 12 linhas.
- Utilização de laços for para desenhar a tela.
- Representação da nave pelo caractere A.
- Criação das bordas do tabuleiro.

Snapshot: versoes/v0.2-tela-estatica.ts.

### Versão 0.3 — Controle em tempo real

**Objetivo:** permitir o controle da nave diretamente pelo teclado.

- Leitura de eventos do teclado.
- Movimentação pelas setas esquerda e direita.
- Atualização periódica da tela.
- Utilização dos recursos de entrada do Node.js.

### Versão 0.4 — Disparos

**Objetivo:** permitir que a nave ataque os inimigos.

- Criação da classe Projetil.
- Armazenamento dos disparos em um vetor.
- Movimento vertical dos projéteis.
- Remoção dos projéteis que saem da tela.

### Versão 0.5 — Inimigos e colisões

**Objetivo:** adicionar alvos e um sistema de pontuação.

- Criação da classe Inimigo.
- Inclusão dos inimigos.
- Detecção de colisões entre projéteis e inimigos.
- Remoção dos objetos atingidos.
- Adição de pontos por inimigo eliminado.

### Versão 0.6 — Invasores móveis e encerramento

**Objetivo:** adicionar movimentação aos inimigos e condições de encerramento da partida.

- Movimento horizontal dos inimigos.
- Inversão da direção ao alcançar as extremidades.
- Descida dos inimigos após a inversão.
- Condição de vitória quando todos os inimigos são eliminados.
- Condição de Game Over quando os invasores alcançam a região da nave.

Snapshot: versoes/v0.6-invasores-moveis-e-vitoria.ts.

## Versão modularizada — Terminal TypeScript

**Objetivo:** organizar o projeto em módulos, separando responsabilidades e aplicando os conceitos estudados.

A estrutura está organizada em:

- src/models/: classes, interfaces e tipos.
- src/services/: lógica principal da partida.
- src/utils/: constantes.
- src/index.ts: ponto de entrada.

O comando npm start executa essa versão por meio de tsx. O comando npm run check verifica os tipos com o compilador TypeScript sem gerar arquivos de saída.

## Versão web — Navegador

**Objetivo:** disponibilizar uma segunda interface jogável, agora diretamente no navegador.

A versão web foi organizada em um único arquivo, web/space_invaders.html, que reúne:

- Estrutura HTML da página.
- Estilos CSS da interface.
- Classes JavaScript para nave, projéteis e inimigos.
- Tabuleiro gráfico desenhado com Canvas 2D.
- Leitura de teclado e atualização da tela.
- Exibição da pontuação e das vidas.
- Tela inicial, vitória, Game Over e botão para reiniciar.

### Características da versão web

- Trinta inimigos distribuídos em três linhas.
- Quatro aparências de inimigos.
- Movimento horizontal e descida nas bordas.
- Disparos e detecção de colisões.
- Dez pontos por inimigo eliminado.
- Três vidas.
- Perda de uma vida quando a formação alcança a linha da nave; os invasores retornam às alturas iniciais.
- Vitória quando todos os invasores são eliminados.

A versão web é independente da versão de terminal. Não precisa de Node.js ou npm para ser aberta: basta carregar o arquivo HTML em um navegador atualizado.

## Conceitos aplicados

Ao longo das versões, foram praticados:

- Programação Orientada a Objetos.
- Classes e objetos.
- Herança e classes abstratas.
- Encapsulamento.
- Interfaces e tipos personalizados.
- Getters e setters.
- Arrays e manipulação de objetos.
- Importação e exportação de módulos.
- Eventos de teclado.
- Manipulação do DOM.
- Desenho com Canvas 2D.
- Atualização de animações com requestAnimationFrame.
- Detecção de colisões e controle do estado da partida.

## Execução e verificação

Terminal:

~~~bash
npm install
npm start
npm run check
~~~

Navegador:

1. Abra web/space_invaders.html.
2. Inicie a partida pelo botão da tela ou pela tecla Enter.

Os resultados de testes devem ser consultados em TESTES_MANUAIS.md. Testes de uma implementação não devem ser considerados automaticamente aprovados na outra.

## Considerações finais

O projeto foi desenvolvido de forma incremental. Cada etapa acrescentou mecânicas ou melhorias de organização.

A modularização TypeScript separou responsabilidades em arquivos e pastas. A versão web ampliou as formas de interação, com interface gráfica e desenho no Canvas, mantendo o projeto simples de executar e sem dependências externas para o navegador.
