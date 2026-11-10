# Histórico de versões — Space Invaders

Este documento registra a evolução incremental do jogo. As versões anteriores estão preservadas em [versoes/](versoes/) e a versão atual está em [space_invaders.ts](space_invaders.ts).

As snapshots são registros das etapas de código trabalhadas durante a conversa e não representam commits Git independentes feitos em cada etapa.

## Resumo da evolução

| Versão | Etapa | O que foi acrescentado |
|---|---|---|
| 0.1 | Nave básica | Classe `Nave`, posição inicial e métodos de movimento testados por chamadas diretas. |
| 0.2 | Tela estática | Tabuleiro textual de 40 × 12 posições e desenho da nave. |
| 0.3 | Controle em tempo real | Leitura das setas do teclado e atualização periódica da tela. |
| 0.4 | Disparos | Classe `Projetil`, vetor de tiros e movimento vertical dos disparos. |
| 0.5 | Inimigos e colisões | Classe `Inimigo`, três objetos, colisão tiro/inimigo e pontuação de 10 por acerto. |
| 0.6 | Invasores móveis e fim de partida | Movimento horizontal em grupo, inversão nas bordas, descida, vitória e Game Over. |

## Versão 0.1 — nave básica

**Objetivo:** começar com o conteúdo de POO: definir uma classe, criar um objeto e chamar seus métodos.

- Classe: `Nave`.
- Atributo: `x`.
- Constructor: posição inicial 20.
- Métodos: `moverEsquerda()` e `moverDireita()`.
- Teste: posição inicial, movimento para a direita e movimento para a esquerda.

Resultado observado no terminal:

```text
Posição inicial: 20
Após mover para direita: 21
Após mover para esquerda: 20
```

Snapshot: [v0.1-nave-basica.ts](versoes/v0.1-nave-basica.ts).

## Versão 0.2 — tela estática

**Objetivo:** representar a posição da nave visualmente no terminal.

- Constantes `ALTURA = 12` e `LARGURA = 40`.
- Laços `for` para percorrer linhas e colunas.
- Condicional para desenhar `A` na posição da nave.
- Bordas feitas com caracteres.

Resultado observado: tabuleiro de 40 colunas por 12 linhas, com a nave na linha inferior, aproximadamente no centro.

Snapshot: [v0.2-tela-estatica.ts](versoes/v0.2-tela-estatica.ts).

## Versão 0.3 — movimentação em tempo real

**Objetivo:** deixar de depender de chamadas manuais aos métodos e permitir controle direto pelo teclado.

Foi acrescentada a entrada de teclado do Node.js e uma atualização periódica da tela. As setas esquerda e direita passaram a chamar os métodos da classe `Nave`.

**Extensões técnicas:** módulo `readline`, entrada padrão do processo, evento `keypress`, modo raw e `setInterval()`.

Resultado observado: o usuário confirmou que conseguiu mover a nave em tempo real.

Snapshot: [v0.3-controle-tempo-real.ts](versoes/v0.3-controle-tempo-real.ts).

## Versão 0.4 — disparos

**Objetivo:** permitir que a nave ataque.

Foi criada a classe `Projetil`, com coordenadas `x` e `y` e método `mover()`. Os tiros são armazenados no vetor `projeteis`, surgem na posição da nave e sobem uma linha por atualização. Projéteis que saem da tela são removidos.

Resultado observado: o usuário confirmou que os disparos funcionaram.

Snapshot: [v0.4-projeteis.ts](versoes/v0.4-projeteis.ts).

## Versão 0.5 — inimigos parados, colisões e pontos

**Objetivo:** criar alvos e transformar os disparos em uma mecânica de jogo.

Foi criada a classe `Inimigo` e três instâncias. A cada atualização, o código compara as coordenadas dos projéteis com as coordenadas dos inimigos. Quando coincidem, os dois objetos são removidos dos respectivos vetores e a pontuação aumenta em 10.

Resultado observado: a partida terminou com 30 pontos e zero inimigos restantes.

Snapshot: [v0.5-inimigos-e-colisoes.ts](versoes/v0.5-inimigos-e-colisoes.ts).

## Versão 0.6 — invasores móveis e encerramento da partida

**Objetivo:** aproximar o comportamento do jogo do estilo Space Invaders.

Foram adicionados à classe `Inimigo` os métodos:

- `mover(direcao)`: altera a coordenada horizontal.
- `descer()`: aumenta a coordenada vertical.

O controle principal verifica se algum inimigo alcançaria uma extremidade no próximo movimento. Quando isso acontece, o grupo inverte a direção e desce. A partida termina em vitória quando não restam inimigos ou em Game Over quando os invasores alcançam a linha da nave.

Resultado observado: a execução final exibiu 30 pontos, zero inimigos restantes e a mensagem de vitória.

Código atual: [space_invaders.ts](space_invaders.ts). Snapshot da etapa: [v0.6-invasores-moveis-e-vitoria.ts](versoes/v0.6-invasores-moveis-e-vitoria.ts).

## Diferenças principais entre as etapas

1. **De conceito para visualização:** a versão 0.1 comprovava o funcionamento dos métodos; a 0.2 passou a representar a nave no tabuleiro.
2. **De visualização para interação:** a versão 0.3 adicionou leitura de teclas e atualização contínua.
3. **De interação para combate:** a versão 0.4 introduziu projéteis como objetos independentes.
4. **De combate para jogo com objetivo:** a versão 0.5 introduziu inimigos, colisões e pontuação.
5. **De alvos fixos para invasores:** a versão 0.6 adicionou deslocamento, mudança de direção, descida e condições de encerramento.

## Por que a implementação foi dividida assim?

A divisão incremental permitiu testar uma responsabilidade de cada vez: primeiro a posição da nave, depois a tela, o teclado, os disparos, os alvos, as colisões e, por fim, o movimento dos invasores. Isso tornou os erros mais fáceis de localizar e manteve a prática principal ligada a classes, objetos, atributos, constructors, métodos, vetores e tipagem TypeScript.
