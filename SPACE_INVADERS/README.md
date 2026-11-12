# Space Invaders

## Sobre o jogo

Space Invaders é um jogo desenvolvido em TypeScript, executado diretamente no terminal. O jogador controla uma nave e precisa atirar nos inimigos que aparecem na tela, tentando eliminá-los e preservar suas vidas.

O jogo apresenta:

- Nave controlada pelo jogador.
- Inimigos que se movimentam pela tela.
- Disparos e detecção de colisões.
- Sistema de pontuação.
- Sistema de vidas.
- Contagem de inimigos restantes.

## Como executar

É necessário ter o Node.js instalado.

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Execute o jogo:

```bash
npm start
```

4. Para verificar se o TypeScript compila sem erros:

```bash
npm run check
```

## Controles

| Tecla                    | Ação                              |
| ------------------------ | --------------------------------- |
| Seta para a esquerda (←) | Movimentar a nave para a esquerda |
| Seta para a direita (→)  | Movimentar a nave para a direita  |
| Espaço                   | Atirar                            |
| Ctrl + C                 | Encerrar o jogo                   |

## Estrutura de pastas

```text
SPACE_INVADERS/
├── src/
│   ├── models/
│   │   ├── interfaces.ts
│   │   ├── tipos.ts
│   │   ├── Personagem.ts
│   │   ├── Nave.ts
│   │   ├── Projetil.ts
│   │   ├── PoderDisparo.ts
│   │   └── Inimigo.ts
│   │
│   ├── services/
│   │   └── Jogo.ts
│   │
│   ├── utils/
│   │   └── constantes.ts
│   │
│   └── index.ts
│
├── versoes/
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── TESTES_MANUAIS.md
```

### Organização dos arquivos

- **models:** contém as classes, interfaces e tipos utilizados no jogo.
- **services:** contém a lógica principal e o funcionamento da partida.
- **utils:** reúne constantes utilizadas em diferentes partes do projeto.
- **index.ts:** inicia a aplicação.
- **versoes:** mantém versões anteriores do desenvolvimento.

## Tecnologias utilizadas

- **TypeScript:** linguagem utilizada para desenvolver o jogo, com tipagem estática.
- **Node.js:** ambiente utilizado para executar o projeto.
- **tsx:** ferramenta utilizada para executar os arquivos TypeScript.
- **npm:** gerenciamento de dependências e scripts do projeto.

## O que aprendemos

Durante o desenvolvimento, trabalhamos com:

- Programação Orientada a Objetos (POO).
- Classes, objetos e herança.
- Interfaces e tipagem no TypeScript.
- Tipos personalizados e union types.
- Arrays e manipulação de objetos.
- Métodos e atributos.
- Importação e exportação de módulos.
- Organização de arquivos e pastas.
- Compilação e verificação de erros.
- Testes manuais e depuração.
- Encapsulamento com atributos privados.
- Getters e setters com validação.
- Herança, abstração e polimorfismo.
- Implementação de interfaces.

## Verificação

O projeto foi executado com `npm start` e verificado com `npm run check`, sem erros de compilação na última execução registrada.

Os testes manuais estão documentados no arquivo `TESTES_MANUAIS.md`.
