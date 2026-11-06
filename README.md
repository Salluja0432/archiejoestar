# Jovem Tech — Módulo 3

Repositório de acompanhamento dos estudos, exercícios e projetos desenvolvidos durante o Módulo 3 do programa Jovem Tech.

## Estado atual

O módulo começou com a preparação local do ambiente de desenvolvimento. Até a última atualização deste README, a professora ainda não havia disponibilizado os PDFs ou as atividades de conteúdo; a orientação inicial foi configurar o projeto no computador.

Por isso, esta branch começa sem os exercícios dos módulos anteriores. Os materiais e atividades do Módulo 3 serão adicionados conforme forem apresentados durante as aulas.

## Ambiente configurado localmente

O projeto foi inicializado com **Node.js** e **npm**, com as ferramentas de TypeScript instaladas como dependências de desenvolvimento:

- `typescript` — compilador e suporte à linguagem TypeScript;
- `tsx` — execução de arquivos TypeScript diretamente no ambiente Node.js;
- `@types/node` — definições de tipos para recursos do Node.js.

Também foi criado o arquivo de configuração `tsconfig.json`.

### Comandos executados

Inicialização do projeto:

```bash
npm init -y
```

Instalação das ferramentas:

```bash
npm i -D typescript tsx @types/node
```

Criação da configuração do TypeScript:

```bash
npx tsc --init
```

Teste inicial de execução:

```bash
npx tsx index.ts
```

O teste local exibiu:

```text
Hello, world!
```

## Próximas atualizações

Este README será atualizado à medida que novos conteúdos forem liberados. A organização prevista é registrar:

- materiais e assuntos estudados;
- atividades propostas e suas soluções;
- exemplos e práticas desenvolvidos em aula;
- projetos e entregas do módulo.

**Observação:** a configuração descrita acima foi feita localmente na pasta `Documents/GitHub/module3`. Até esta atualização, os arquivos de configuração e o `index.ts` ainda não foram enviados para esta branch; somente este README está versionado aqui.
