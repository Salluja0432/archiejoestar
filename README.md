# Jovem Tech — Módulo 3

Repositório de acompanhamento dos estudos, exercícios e projetos desenvolvidos durante o Módulo 3 do programa Jovem Tech.

## Ambiente de desenvolvimento

O projeto utiliza Node.js, npm e TypeScript. As dependências de desenvolvimento configuradas na raiz incluem:

- `typescript` — compilador e suporte à linguagem TypeScript;
- `tsx` — execução de arquivos TypeScript diretamente no ambiente Node.js;
- `@types/node` — definições de tipos para recursos do Node.js.

O ambiente foi iniciado com `npm init -y`, as dependências foram instaladas com npm e a configuração do TypeScript fica em `tsconfig.json`.

## Atividades e projetos

### Atividade de POO — Personagem

O arquivo [att2.ts](att2.ts) contém a atividade de classe `Personagem`, com Mario e Luigi como objetos. A implementação trabalha atributos, constructor, métodos e encapsulamento com getter e setter.

### Space Invaders — jogo no terminal

O projeto [SPACE_INVADERS](SPACE_INVADERS/) é um jogo de nave inspirado em Space Invaders, desenvolvido em TypeScript e executado inteiramente no terminal. A evolução foi feita em etapas: classe da nave, desenho do tabuleiro, controle em tempo real, projéteis, inimigos, colisões, pontuação e condições de vitória e Game Over.

- [Código atual do jogo](SPACE_INVADERS/space_invaders.ts)
- [README do projeto](SPACE_INVADERS/README.md)
- [Histórico das versões](SPACE_INVADERS/HISTORICO_VERSOES.md)
- [Testes manuais](SPACE_INVADERS/TESTES_MANUAIS.md)
- [Snapshots dos códigos anteriores](SPACE_INVADERS/versoes/)

Para executar a versão atual a partir da raiz do repositório:

```powershell
npx tsx .\SPACE_INVADERS\space_invaders.ts
```

O jogo usa recursos complementares do Node.js para entrada de teclado e atualização em tempo real. Esses recursos estão identificados separadamente da matéria central de POO e TypeScript.

## Organização dos estudos

Este repositório registra materiais, exemplos, atividades e projetos do Módulo 3 à medida que são trabalhados nas aulas. Os históricos de versão e os relatórios de teste distinguem resultados efetivamente observados de verificações ainda pendentes.
