# Casos de teste — Jogo da Velha

| Nº | Situação | Entrada/ação | Resultado esperado |
|---|---|---|---|
| 1 | Nome vazio | Pressionar Enter no nome de um jogador | O programa usa o nome padrão daquele jogador |
| 2 | Jogada válida | Digitar um número de 1 a 9 que esteja livre | O símbolo aparece na posição escolhida e o turno passa ao outro jogador |
| 3 | Entrada não numérica | Digitar `abc` durante uma jogada | O programa informa que a entrada é inválida e mantém o turno |
| 4 | Número fora do intervalo | Digitar `0` ou `10` | O programa informa que a entrada é inválida e mantém o turno |
| 5 | Número decimal | Digitar `2.5` | O programa informa que a entrada é inválida e mantém o turno |
| 6 | Posição ocupada | Escolher uma posição que já contém X ou O | O programa avisa que a posição está ocupada e mantém o turno |
| 7 | Vitória em linha | X escolhe `1`, `2` e `3`, alternando com jogadas válidas de O | A rodada termina e X recebe uma vitória |
| 8 | Vitória em coluna | O completa uma coluna com três símbolos | A rodada termina e O recebe uma vitória |
| 9 | Vitória em diagonal | Um jogador completa uma das diagonais | A rodada termina e o jogador recebe uma vitória |
| 10 | Empate | Preencher as nove posições sem completar linha, coluna ou diagonal | A rodada termina empatada e ninguém recebe vitória |
| 11 | Fim antecipado | Um jogador alcança três vitórias antes da quinta rodada | A partida termina e esse jogador é declarado campeão |
| 12 | Fim após cinco rodadas | Nenhum jogador alcança três vitórias | Depois da quinta rodada, vence quem tiver mais vitórias; se houver igualdade, a partida empata |

## Registro de depuração

Ao testar uma jogada incorreta, conferir:

- Se a conversão da posição para linha e coluna está correta.
- Se uma entrada inválida mantém o mesmo jogador.
- Se uma posição ocupada não aumenta o número de jogadas.
- Se o placar só aumenta quando uma rodada tem vencedor.
- Se a partida encerra ao chegar a três vitórias ou à quinta rodada.
