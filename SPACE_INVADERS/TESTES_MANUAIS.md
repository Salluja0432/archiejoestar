# Testes manuais — Space Invaders

Os testes abaixo são manuais e interativos. Não foi utilizado framework automatizado.

Este documento separa os testes históricos feitos na versão anterior (`space_invaders.ts`) dos testes recentes feitos na versão principal (`space_invaders_corrigido.ts`). Os resultados de uma versão não são transferidos automaticamente para a outra.

## 1. Testes históricos — versão anterior

**Arquivo:** `space_invaders.ts`  
**Comando utilizado:** `npx tsx .\space_invaders.ts`, a partir da pasta `SPACE_INVADERS`.

| ID | Etapa | Procedimento | Resultado observado | Situação |
|---|---|---|---|---|
| T01 | 0.1 — Nave | Criar a nave e consultar a posição inicial. | Exibiu `Posição inicial: 20`. | Confirmado |
| T02 | 0.1 — Movimento da nave | Chamar `moverDireita()` e depois `moverEsquerda()`. | Exibiu 21 e depois 20. | Confirmado |
| T03 | 0.2 — Desenho | Executar a função que desenha o tabuleiro. | Exibiu uma moldura de 40 colunas por 12 linhas e a nave `A`. | Confirmado |
| T04 | 0.3 — Teclado | Usar as setas durante a execução. | O usuário confirmou que conseguiu movimentar a nave em tempo real. | Confirmado |
| T05 | 0.4 — Disparo | Pressionar Espaço durante a execução. | O usuário confirmou que o disparo funcionou e subiu na tela. | Confirmado |
| T06 | 0.5 — Colisão e pontuação | Acertar os três inimigos com os disparos. | A tela mostrou pontuação 30 e zero inimigos restantes. | Confirmado |
| T07 | 0.6 — Vitória | Eliminar os três invasores na versão com movimento e condição de fim. | A tela mostrou pontuação 30, zero inimigos e `VITÓRIA! Todos os invasores foram destruídos!`. | Confirmado |

### Evidência histórica da vitória

Saída enviada após a execução da versão 0.6:

```text
+----------------------------------------+
|   |                                    |
|                                        |
|   |                                    |
|                                        |
|                                        |
|                                        |
|   |                                    |
|                                        |
|   |                                    |
|                                        |
|   A                                    |
|                                        |
+----------------------------------------+
Pontuação: 30
Inimigos restantes: 0
Setas: movimentar | ESPAÇO: atirar
Ctrl + C: sair
VITÓRIA! Todos os invasores foram destruídos!
```

Na tela registrada, alguns projéteis ainda estavam visíveis após a vitória. A partida e a pontuação terminaram corretamente; limpar os projéteis remanescentes é um ajuste visual que pode ser feito em uma versão futura.

## 2. Testes recentes — versão principal corrigida

**Arquivo:** `space_invaders_corrigido.ts`  
**Comandos utilizados:** `npm run check` e `npm start`, dentro da pasta `SPACE_INVADERS`, no PC do curso.

| ID | Procedimento | Resultado observado | Situação |
|---|---|---|---|
| C01 | Executar `npm run check`. | O comando `tsc --noEmit` terminou sem apresentar erros. | Confirmado |
| C02 | Iniciar o jogo com `npm start` e usar a seta esquerda. | A nave se movimentou para a esquerda. | Confirmado |
| C03 | Usar a seta direita. | A nave se movimentou para a direita. | Confirmado |
| C04 | Pressionar Espaço. | O disparo funcionou. | Confirmado |
| C05 | Observar o movimento dos invasores durante a partida. | Os inimigos se movimentaram. | Confirmado |
| C06 | Deixar os invasores alcançarem a linha da nave. | A tela exibiu `GAME OVER! Os invasores chegaram à sua nave!` e parou de atualizar. | Confirmado |
| C07 | Pressionar Ctrl + C depois do Game Over. | O terminal exibiu `Jogo encerrado!` e retornou ao prompt do PowerShell. | Confirmado |

### Evidência recente de Game Over

Resultado observado no PC do curso:

- Pontuação exibida: 20 pontos.
- Inimigos restantes: 1.
- Mensagem: `GAME OVER! Os invasores chegaram à sua nave!`.
- A tela parou de atualizar e a mensagem permaneceu visível.

Depois, ao pressionar Ctrl + C, o programa exibiu `Jogo encerrado!` e o terminal retornou ao PowerShell.

## 3. Testes ainda pendentes na versão principal corrigida

| ID | O que falta verificar |
|---|---|
| P01 | Eliminar os três inimigos e registrar a vitória especificamente em `space_invaders_corrigido.ts`. |
| P02 | Observar especificamente os invasores alcançando a borda, invertendo a direção e descendo. |
| P03 | Verificar o comportamento repetido nas duas extremidades da tela. |
| P04 | Verificar Ctrl+C durante uma partida ainda ativa, além do teste já feito depois do Game Over. |
| P05 | Testar disparos simultâneos em diferentes posições e possíveis colisões de projéteis. |

## Observações de confiabilidade

- Os resultados históricos T01–T07 foram observados na versão anterior, `space_invaders.ts`.
- Os resultados C01–C07 foram observados na versão principal corrigida, `space_invaders_corrigido.ts`.
- Os testes pendentes não são apresentados como aprovados.
- A pontuação histórica foi observada em uma partida com três inimigos: 3 × 10 = 30 pontos.
- Não há ainda teste automatizado nem garantia de ausência de defeitos.
