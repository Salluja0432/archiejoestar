# Space Invaders — Terminal (TypeScript)

Projeto prático desenvolvido durante o Módulo 3 do Jovem Tech. É um jogo de nave inspirado em Space Invaders, executado exclusivamente no terminal, com movimentação em tempo real, disparos, inimigos, colisões e pontuação.

> Este projeto foi desenvolvido passo a passo como exercício de aprendizagem. O código foi escrito durante a atividade, testado manualmente e documentado por etapas. Não é uma cópia do Flappy Bird de outro aluno.

## Como executar

O projeto utiliza as ferramentas TypeScript já instaladas na raiz do repositório do Módulo 3: `typescript`, `tsx` e `@types/node`. Não é necessário criar outro projeto npm dentro desta pasta.

Na raiz do repositório:

```powershell
npx tsx .\SPACE_INVADERS\space_invaders.ts
```

Ou, entrando nesta pasta:

```powershell
cd .\SPACE_INVADERS
npx tsx .\space_invaders.ts
```

O jogo precisa ser executado em um terminal interativo (TTY), porque recebe as teclas diretamente.

## Controles

| Tecla | Ação |
|---|---|
| Seta esquerda | Move a nave para a esquerda |
| Seta direita | Move a nave para a direita |
| Espaço | Dispara um projétil |
| Ctrl + C | Encerra o jogo |

## O que o jogo faz na versão atual

- Desenha uma área de jogo de 40 colunas por 12 linhas no terminal.
- Cria uma nave na parte inferior.
- Restringe a nave aos limites horizontais da tela.
- Permite disparar projéteis para cima.
- Cria três inimigos.
- Move os inimigos horizontalmente em grupo.
- Quando o grupo alcança uma extremidade, inverte a direção e desce uma linha.
- Detecta colisão quando um projétil e um inimigo ocupam a mesma coordenada.
- Remove o projétil e o inimigo atingidos.
- Adiciona 10 pontos por inimigo destruído.
- Exibe vitória quando todos os inimigos são eliminados.
- Exibe Game Over quando os inimigos alcançam a linha da nave.

## Organização das classes

### `Nave`

Representa a nave controlada pelo jogador. Possui o atributo `x`, inicializado em 20 pelo constructor, e os métodos `moverEsquerda()` e `moverDireita()`.

### `Projetil`

Representa cada tiro disparado. Possui as coordenadas `x` e `y`, recebe essas posições no constructor e utiliza o método `mover()` para subir uma linha por atualização.

### `Inimigo`

Representa cada invasor. Possui as coordenadas `x` e `y`, o método `mover(direcao)` para deslocamento horizontal e `descer()` para avançar em direção à nave.

### Controle principal

O restante do arquivo coordena o jogo: cria os objetos, guarda projéteis e inimigos em vetores, atualiza a partida, desenha a tela, verifica colisões, controla a pontuação e encerra a rodada.

## Conceitos do curso utilizados

- Classes e objetos.
- Atributos e métodos.
- Constructor e inicialização de objetos com `new`.
- Tipagem explícita em TypeScript.
- Vetores tipados, como `Projetil[]` e `Inimigo[]`.
- Condicionais `if/else`.
- Laços de repetição `for`.
- Atualização do estado dos objetos por meio de métodos.

## Recursos complementares do Node.js

Alguns recursos foram necessários para que o jogo funcionasse em tempo real no terminal. Eles são extensões técnicas usadas no projeto, não devem ser confundidos com os conceitos centrais de POO estudados no Módulo 3.

- `readline.emitKeypressEvents()`: habilita a interpretação de teclas pressionadas.
- `process.stdin.setRawMode(true)`: recebe teclas sem exigir Enter.
- Evento `keypress`: identifica as teclas usadas pelo jogador.
- `setInterval()`: atualiza a partida em intervalos regulares.
- `clearInterval()`: interrompe as atualizações ao terminar.
- `console.clear()`: limpa o terminal antes de desenhar a próxima tela.
- `process.exit()`: encerra o processo ao usar Ctrl+C.

## Histórico e testes

- [Histórico das versões](HISTORICO_VERSOES.md) — explica a evolução da primeira classe até a versão jogável.
- [Testes manuais](TESTES_MANUAIS.md) — registra o que foi executado, o resultado observado e o que ainda não foi testado.
- [Snapshots das versões anteriores](versoes/) — preserva os códigos das etapas intermediárias.

## Estado atual e limitações conhecidas

A versão atual tem uma única formação com três inimigos. Ainda não possui vidas do jogador, disparos inimigos, múltiplas ondas, tela de reinício ou fases progressivas. Esses recursos podem ser adicionados em etapas futuras.

Na execução registrada da vitória, alguns projéteis que ainda estavam na tela permaneceram visíveis após a partida terminar. Isso é um detalhe visual pendente; não alterou a pontuação nem o resultado da partida.

## Critério de registro

Os testes registrados são testes manuais feitos durante o desenvolvimento. Um comportamento só é marcado como confirmado quando houve execução ou observação relatada. Funcionalidades sem confirmação específica aparecem como pendentes, mesmo que exista código para elas.
