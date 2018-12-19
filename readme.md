# Instituto Maria da Penha

Site estático criado com [Metalsmith][], [Webpack][] e [Nunjucks][];

## Requisitos mínimos

1. [nodejs][] — `6.10.0`;
2. NPM `6.1.0` — `npm install -g npm@^6.1.0`;

## Clone o projeto e rode as tarefas:

    $ git clone git@bitbucket.org:fbiz/imp-institucional.git
    $ npm install && npm start

### NPM Config

Para sobrescrever as opções do **package.json** crie o arquivo **.npmrc** na raiz do projeto.

Exemplo:

    imp-institucional:root="http://localhost:3000"

[Metalsmith]: http://www.metalsmith.io/
[Webpack]: https://webpack.js.org/
[Nunjucks]: https://mozilla.github.io/nunjucks/
[nodejs]: https://nodejs.org/dist/v4.5.0
