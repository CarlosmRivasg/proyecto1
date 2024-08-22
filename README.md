
<h1>Endpoints</h1>
<h2>Usuarios (/users)</h2>
<p>GET /findAll - Obtener todos los usuarios.</p>
<p>GET /findOne/:id - Obtener un usuario por ID.</p>
<p>POST /createUser - Crear un nuevo usuario.</p>
<p>PUT / updateUser/:id - Actualizar un usuario.</p>
<p>DELETE /removeUser/:id - Eliminar un usuario.</p>

<h2>Grupos de Usuarios (/userGroups)</h2>
<p>GET /findAll - Obtener todos los grupos de usuarios.</p>
<p>GET /findOne/:id - Obtener un grupo de usuarios por ID.</p>
<p>POST /createUserGroup - Crear un nuevo grupo de usuarios.</p>
<p>DELETE /removeUserGroup/:id - Eliminar un grupo de usuarios.</p>

<h2>Perfiles (/profiles)</h2>
<p>GET /findAll - Obtener todos los perfiles.</p>
<p>GET /findOne/:id - Obtener un perfil por ID.</p>
<p>POST /createProfile - Crear un nuevo perfil.</p>
<p>PUT /updateProfile/:id - Actualizar un perfil.</p>
<p>DELETE /removeProfile/:id - Eliminar un perfil.</p>

<h2>Publicaciones (/posts)</h2>
<p>GET /findAll - Obtener todas las publicaciones.</p>
<p>GET /findOne/:id - Obtener una publicación por ID.</p>
<p>POST /createPost - Crear una nueva publicación.</p>
<p>PUT /updatePost/:id - Actualizar una publicación.</p>
<p>DELETE /removePost/:id - Eliminar una publicación.</p>

<h2>Comentarios (/comments)</h2>
<p>GET /findAll - Obtener todos los comentarios.</p>
<p>GET /findOne/:id - Obtener un comentario por ID.</p>
<p>POST /createComment - Crear un nuevo comentario.</p>
<p>PUT /updateComment/:id - Actualizar un comentario.</p>
<p>DELETE / removeComment/:id - Eliminar un comentario.</p>

<h2>Grupos (/groups)</h2>
<p>GET /findAll - Obtener todos los grupos.</p>
<p>GET /findOne/:id - Obtener un grupo por ID.</p>
<p>POST /createGroup - Crear un nuevo grupo.</p>
<p>PUT /updateGroup/:id - Actualizar un grupo.</p>
<p>DELETE /removeGroup/:id - Eliminar un grupo.</p>



![image](https://github.com/user-attachments/assets/7d326dcb-bea9-412d-bca6-43e22c9c2da8)

<p> El create_at y updated_at los trate todos como string en vez de date, error mio, recomendacion tratarlos igual para evitar errores, no me atrevi a modificarlo </p>


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
