# Testes Manuais — Space Invaders

Este documento registra os testes realizados durante o desenvolvimento do Space Invaders.

Os resultados são separados por versão para evitar que testes realizados em implementações anteriores sejam considerados automaticamente como aprovados na versão modularizada.

## 1. Ambiente de testes

- Linguagem: TypeScript
- Ambiente de execução: Node.js
- Execução: tsx
- Editor utilizado: Visual Studio Code
- Sistema de entrada: teclado pelo terminal
- Comando de execução: `npm start`
- Comando de verificação: `npm run check`

## 2. Testes da versão modularizada

A versão modularizada utiliza a estrutura de pastas `models`, `services` e `utils`, com inicialização pelo arquivo `src/index.ts`.

### 2.1. Testes confirmados

| ID  | Teste                                       | Resultado esperado                                        | Resultado obtido |
| --- | ------------------------------------------- | --------------------------------------------------------- | ---------------- |
| M01 | Iniciar o jogo                              | Exibir o tabuleiro e as informações da partida.           | Aprovado         |
| M02 | Movimentar a nave para a esquerda e direita | A nave deve responder às setas do teclado.                | Aprovado         |
| M03 | Atirar                                      | A nave deve disparar projéteis.                           | Aprovado         |
| M04 | Movimento dos inimigos                      | Os inimigos devem se movimentar horizontalmente.          | Aprovado         |
| M05 | Exibir informações da partida               | Mostrar pontuação, inimigos restantes, vidas e controles. | Aprovado         |
| M06 | Encerrar com Ctrl+C                         | Finalizar o jogo e retornar ao terminal.                  | Aprovado         |
| M07 | Verificar compilação                        | Executar `npm run check` sem apresentar erros.            | Aprovado         |

### 2.2. Testes ainda não confirmados na versão modularizada

Os comportamentos abaixo fazem parte da implementação, mas ainda precisam de execução manual específica para serem considerados aprovados nesta versão.

| ID  | Teste                                   | Resultado esperado                                                   | Situação |
| --- | --------------------------------------- | -------------------------------------------------------------------- | -------- |
| M08 | Colisão entre projétil e inimigo        | O inimigo atingido deve desaparecer.                                 | Pendente |
| M09 | Pontuação após eliminar inimigo         | A pontuação deve aumentar em 10 pontos.                              | Pendente |
| M10 | Inversão da direção dos inimigos        | Os inimigos devem mudar de direção ao alcançar a borda.              | Pendente |
| M11 | Descida dos inimigos                    | Os inimigos devem descer após inverter a direção.                    | Pendente |
| M12 | Vitória                                 | O jogo deve encerrar quando todos os inimigos forem eliminados.      | Pendente |
| M13 | Game Over                               | A partida deve terminar quando as vidas chegarem a zero.             | Pendente |
| M14 | Encerramento automático do temporizador | O intervalo de atualização deve ser encerrado ao terminar a partida. | Pendente |

## 3. Testes das versões anteriores

Durante o desenvolvimento, foram realizados testes nas implementações anteriores do jogo.

Esses registros fazem parte do histórico do projeto, mas seus resultados não substituem os testes específicos da versão modularizada.

### 3.1. Versão inicial — `space_invaders.ts`

Foram realizados testes relacionados à implementação inicial, incluindo:

- Criação e movimentação da nave.
- Representação do tabuleiro.
- Controle pelo teclado.
- Atualização da tela.
- Funcionamento básico da execução.

Os registros dessas etapas foram preservados nos arquivos históricos.

### 3.2. Versão corrigida — `space_invaders_corrigido.ts`

A versão corrigida recebeu melhorias nas mecânicas do jogo.

Foram testados comportamentos relacionados a:

- Movimentação da nave.
- Disparos.
- Movimentação dos inimigos.
- Colisão entre projéteis e inimigos.
- Atualização da pontuação.
- Perda de vidas.
- Inversão e descida dos inimigos.
- Condições de vitória e Game Over.

Os resultados desses testes pertencem à versão corrigida anterior à modularização.

## 4. Verificação de compilação

A compilação é verificada pelo comando:

```bash
npm run check
```

O comando executa o TypeScript Compiler sem gerar arquivos de saída, verificando possíveis erros de tipagem e compilação.

**Resultado registrado na versão modularizada:**

```text
> check
> tsc --noEmit
```

O comando foi executado três vezes após a atualização do arquivo `Jogo.ts`, sem apresentar mensagens de erro.

<badge color="success">Compilação aprovada</badge>

## 5. Como executar os testes

Para iniciar o jogo:

```bash
npm start
```

Para verificar a compilação:

```bash
npm run check
```

Durante a partida, utilize:

| Tecla  | Ação                         |
| ------ | ---------------------------- |
| ←      | Mover a nave para a esquerda |
| →      | Mover a nave para a direita  |
| Espaço | Disparar                     |
| Ctrl+C | Encerrar o jogo              |

## 6. Considerações finais

Os testes foram registrados de acordo com os resultados observados em cada etapa do desenvolvimento.

A versão modularizada já teve sua inicialização, movimentação, disparos, exibição das informações e encerramento pelo teclado confirmados.

A compilação TypeScript também foi verificada sem erros.

Os testes pendentes devem ser realizados diretamente na versão modularizada antes de serem marcados como aprovados.

Este documento poderá ser atualizado conforme novos testes forem executados.
