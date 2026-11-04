# Jogo da Velha — Melhor de 5

Projeto final do Módulo 2 do Programa Jovem Tech.

## Objetivo

Um jogo de tabuleiro para dois jogadores, executado no terminal com JavaScript. Cada jogador escolhe uma posição de 1 a 9. O jogo alterna os turnos, impede jogadas em posições ocupadas, identifica vitórias e empates e mantém o placar de uma partida de até cinco rodadas.

O primeiro jogador que alcançar três vitórias é o campeão. Caso ninguém alcance três vitórias, vence quem tiver mais vitórias ao final da quinta rodada.

## Requisitos

- Node.js instalado.
- Dependência `prompt-sync` instalada na raiz do repositório.

Na pasta principal do repositório, execute:

```bash
npm install
node projeto_final_m2/jogo_da_velha.js
```

## Como jogar

1. Informe o nome dos dois jogadores. Se um nome ficar vazio, será usado um nome padrão.
2. O jogador X começa.
3. Escolha uma posição de 1 a 9, conforme o tabuleiro:

```text
 1 | 2 | 3
---+---+---
 4 | 5 | 6
---+---+---
 7 | 8 | 9
```

4. O jogo rejeita entradas inválidas e posições já ocupadas.
5. Uma rodada termina quando alguém completa uma linha, coluna ou diagonal, ou quando as nove posições são preenchidas.
6. A partida termina quando alguém alcança três vitórias ou quando as cinco rodadas acabam.

## Conteúdos do Módulo 2 utilizados

| Conteúdo | Onde aparece |
|---|---|
| Variáveis e constantes | Nomes, rodada, jogadas e tabuleiro |
| Tipos de dados | Textos, números e valores booleanos |
| Condicionais | Validação, alternância de jogadores e identificação do resultado |
| Laços de repetição | `for` percorre a matriz; `while` controla jogadas e partida |
| Vetores | Lista `jogadores` |
| Matrizes | Tabuleiro de três linhas e três colunas |
| Objetos | Cada jogador guarda nome, símbolo e vitórias |
| Funções | Desenho, validação de vitória, execução de rodada, placar e cores |
| Strings | Nomes, mensagens e `.trim()` para retirar espaços extras |
| Testes e depuração | Casos de teste descritos em `CASOS_DE_TESTE.md` |
| Git e GitHub | Histórico de commits e organização do projeto |

## Cores no terminal

O jogo usa códigos ANSI para destacar títulos, símbolos, mensagens de erro e resultados. Cada texto colorido termina com o código de reset `\x1b[0m`, para que a cor não continue afetando o restante do terminal.

## Organização do código

- `colorir`: aplica uma cor ANSI a um texto.
- `mostrarTabuleiro`: apresenta a matriz no terminal.
- `verificarVencedor`: confere linhas, colunas e diagonais.
- `jogarRodada`: controla os turnos e as jogadas de uma rodada.
- `mostrarPlacar`: apresenta as vitórias acumuladas.

## Apresentação

Durante a demonstração, explicar nesta ordem:

1. Objetivo e regras do jogo.
2. Como a matriz representa o tabuleiro.
3. Como a posição de 1 a 9 é convertida em linha e coluna.
4. Como a função `verificarVencedor` identifica uma vitória.
5. Como os objetos dos jogadores guardam o placar.
6. Como as validações impedem entradas inválidas e jogadas repetidas.
7. Como os laços encerram uma rodada e a partida.

## Integrantes

- Preencher com os nomes do squad.
