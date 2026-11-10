# Testes manuais — Space Invaders

Os testes abaixo foram executados durante o desenvolvimento no terminal do PC do curso, usando o comando `npx tsx .\space_invaders.ts` a partir da pasta `SPACE_INVADERS`.

**Tipo de teste:** manual, interativo. Não foi utilizado framework automatizado.

## Testes executados

| ID | Etapa | Procedimento | Resultado observado | Situação |
|---|---|---|---|---|
| T01 | 0.1 — Nave | Criar a nave e consultar a posição inicial. | Exibiu `Posição inicial: 20`. | Confirmado |
| T02 | 0.1 — Movimento da nave | Chamar `moverDireita()` e depois `moverEsquerda()`. | Exibiu 21 e depois 20. | Confirmado |
| T03 | 0.2 — Desenho | Executar a função que desenha o tabuleiro. | Exibiu uma moldura de 40 colunas por 12 linhas e a nave `A`. | Confirmado |
| T04 | 0.3 — Teclado | Usar as setas durante a execução. | O usuário confirmou que conseguiu movimentar a nave em tempo real. | Confirmado |
| T05 | 0.4 — Disparo | Pressionar Espaço durante a execução. | O usuário confirmou que o disparo funcionou e subiu na tela. | Confirmado |
| T06 | 0.5 — Colisão e pontuação | Acertar os três inimigos com os disparos. | A tela mostrou pontuação 30 e zero inimigos restantes. | Confirmado |
| T07 | 0.6 — Vitória | Eliminar os três invasores na versão com movimento e condição de fim. | A tela mostrou pontuação 30, zero inimigos e `VITÓRIA! Todos os invasores foram destruídos!`. | Confirmado |

## Testes ainda pendentes

| ID | O que falta verificar |
|---|---|
| P01 | Observar especificamente os invasores chegando à borda, invertendo a direção e descendo. |
| P02 | Deixar os invasores alcançarem a linha da nave e confirmar a mensagem de Game Over. |
| P03 | Verificar o comportamento repetido nas duas extremidades da tela. |
| P04 | Verificar encerramento com Ctrl+C tanto durante a partida quanto depois do fim. |
| P05 | Testar disparos simultâneos em diferentes posições e possíveis colisões de projéteis. |

## Evidência registrada da vitória

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

## Observações de confiabilidade

- Os resultados marcados como confirmados foram observados na execução relatada pelo usuário.
- Os testes pendentes não são apresentados como aprovados.
- A pontuação foi observada em uma partida com três inimigos: 3 × 10 = 30 pontos.
- Não há ainda teste automatizado nem garantia de ausência de defeitos.
