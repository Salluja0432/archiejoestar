# Testes Manuais — Space Invaders

Este documento registra os testes realizados e os que ainda precisam ser executados. Os resultados são separados por implementação para evitar que um teste aprovado em uma versão seja considerado automaticamente aprovado na outra.

## 1. Ambiente de testes

### Versão de terminal

- Linguagem: TypeScript
- Ambiente de execução: Node.js
- Execução: tsx
- Editor utilizado: Visual Studio Code
- Entrada: teclado pelo terminal
- Iniciar: npm start
- Verificar compilação: npm run check

### Versão de navegador

- Tecnologias: HTML, CSS e JavaScript
- Desenho: Canvas 2D
- Ambiente: navegador atualizado (Chrome, Edge ou Firefox)
- Execução: abrir web/space_invaders.html diretamente no navegador
- Dependências externas: nenhuma

## 2. Testes da versão modularizada (terminal)

A versão modularizada utiliza models, services e utils, com inicialização pelo arquivo src/index.ts.

### 2.1. Testes confirmados

| ID | Teste | Resultado esperado | Resultado obtido |
| --- | --- | --- | --- |
| M01 | Iniciar o jogo | Exibir o tabuleiro e as informações da partida. | Aprovado |
| M02 | Movimentar a nave | A nave deve responder às setas do teclado. | Aprovado |
| M03 | Atirar | A nave deve disparar projéteis. | Aprovado |
| M04 | Movimento dos inimigos | Os inimigos devem se movimentar horizontalmente. | Aprovado |
| M05 | Exibir informações | Mostrar pontuação, inimigos restantes, vidas e controles. | Aprovado |
| M06 | Encerrar com Ctrl+C | Finalizar o jogo e retornar ao terminal. | Aprovado |
| M07 | Verificar compilação | Executar npm run check sem apresentar erros. | Aprovado |

### 2.2. Testes ainda não confirmados na versão modularizada

| ID | Teste | Resultado esperado | Situação |
| --- | --- | --- | --- |
| M08 | Colisão entre projétil e inimigo | O inimigo atingido deve desaparecer. | Pendente |
| M09 | Pontuação após eliminar inimigo | A pontuação deve aumentar em 10 pontos. | Pendente |
| M10 | Inversão da direção | Os inimigos devem mudar de direção ao alcançar a borda. | Pendente |
| M11 | Descida dos inimigos | Os inimigos devem descer após inverter a direção. | Pendente |
| M12 | Vitória | O jogo deve encerrar quando todos forem eliminados. | Pendente |
| M13 | Game Over | A partida deve terminar quando as vidas chegarem a zero. | Pendente |
| M14 | Encerramento automático | O intervalo de atualização deve ser encerrado ao terminar a partida. | Pendente |

## 3. Testes da versão web (navegador)

A versão web está em web/space_invaders.html. Ela reúne HTML, CSS e JavaScript em um único arquivo e desenha a partida com Canvas 2D.

Os testes abaixo estão pendentes de execução em um navegador. A análise estática do código não substitui a verificação visual e funcional no navegador.

| ID | Teste | Resultado esperado | Situação |
| --- | --- | --- | --- |
| W01 | Abrir o arquivo HTML | Exibir a página, o tabuleiro e a tela inicial. | Pendente |
| W02 | Iniciar pelo botão | Remover a tela inicial e começar a partida. | Pendente |
| W03 | Iniciar pelo Enter | Começar a partida pelo teclado. | Pendente |
| W04 | Movimentar com ← e → | Mover a nave para os lados sem sair do tabuleiro. | Pendente |
| W05 | Movimentar com A e D | Mover a nave para os lados. | Pendente |
| W06 | Atirar com Espaço | Criar e movimentar projéteis. | Pendente |
| W07 | Colidir projétil e inimigo | Remover o inimigo atingido e o projétil. | Pendente |
| W08 | Pontuação | Somar 10 pontos por inimigo eliminado. | Pendente |
| W09 | Movimento dos invasores | Mover os invasores e fazê-los descer ao inverter a direção nas bordas. | Pendente |
| W10 | Perda de vida | Reduzir uma vida quando a formação alcançar a linha da nave. | Pendente |
| W11 | Game Over | Encerrar a partida após a perda das três vidas. | Pendente |
| W12 | Vitória | Exibir a mensagem de vitória após eliminar os 30 inimigos. | Pendente |
| W13 | Reiniciar | Restaurar pontuação, vidas, nave, projéteis e inimigos. | Pendente |
| W14 | Jogar novamente após o fim | Começar uma nova partida após vitória ou Game Over. | Pendente |

## 4. Testes das versões anteriores

Durante o desenvolvimento, foram realizados testes nas implementações anteriores do jogo. Esses registros fazem parte do histórico, mas não substituem os testes específicos das versões atuais.

### 4.1. Implementações iniciais

Foram testados comportamentos relacionados a:

- Criação e movimentação da nave.
- Representação do tabuleiro.
- Controle pelo teclado.
- Atualização da tela.
- Funcionamento básico da execução.

### 4.2. Implementação anterior à modularização

Foram testados comportamentos relacionados a:

- Movimentação da nave.
- Disparos.
- Movimentação dos inimigos.
- Colisão entre projéteis e inimigos.
- Atualização da pontuação.
- Perda de vidas.
- Inversão e descida dos inimigos.
- Condições de vitória e Game Over.

Os resultados desses testes pertencem às implementações anteriores à estrutura modularizada.

## 5. Verificação de compilação TypeScript

A compilação da versão de terminal é verificada pelo comando:

~~~bash
npm run check
~~~

O comando executa o TypeScript Compiler sem gerar arquivos de saída. O resultado registrado na versão modularizada foi:

~~~text
> check
> tsc --noEmit
~~~

O comando foi executado três vezes após a atualização do arquivo Jogo.ts, sem apresentar mensagens de erro.

**Importante:** esse comando verifica os arquivos TypeScript incluídos no tsconfig.json. Ele não valida o HTML, o CSS nem o JavaScript da versão web.

## 6. Como executar os testes

Terminal:

~~~bash
npm start
npm run check
~~~

Navegador:

1. Abra web/space_invaders.html em um navegador.
2. Clique em Iniciar jogo.
3. Teste as setas, A, D e Espaço.
4. Confira pontuação, vidas, vitória, Game Over e reinício.

Os testes devem ser marcados como aprovados somente depois de serem executados na implementação correspondente.

## 7. Considerações finais

A versão modularizada de terminal já teve sua inicialização, movimentação, disparos, exibição das informações e encerramento pelo teclado confirmados. A compilação TypeScript também foi verificada sem erros.

A versão web foi incluída como uma implementação independente para navegador. Seus testes funcionais estão listados separadamente e devem ser executados em um navegador antes de serem marcados como aprovados.
