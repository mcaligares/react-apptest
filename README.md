# [React Test](http:munaylab.org/react-test) &middot; [![CircleCI Status](https://circleci.com/gh/mcaligares/react-apptest.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/mcaligares/react-apptest)

Aplicación de prueba realizada con [React](https://github.com/facebook/react) que consiste en un catalogo de productos que pueden ser canjeados.

## Mejoras

#### React con TypeScript

##### Problema

En la [guía para comenzar el reto](https://medium.com/aerolab-stories/a-quick-guide-to-even-quicker-deployments-4fea75662fb) hace referencia al comando.

``` bash
create-react-app name-of-your-app
```

El problema es que en la documentación de React todos los ejemplos estan en **TypeScript**.

##### Solución

Agregué **TypScript** al proyecto usando el parámetro `--typescript`.

``` bash
create-react-app name-of-your-app --typescript
```

#### Pruebas Unitarias

Agregué pruebas unitarias de los componentes. Utilicé [Jest](https://github.com/facebook/jest) y la librería [react-testing-library](https://github.com/testing-library/react-testing-library) para simplificar lógica.

Los test se pueden correr usando el comando `yarn test`

#### Icono bolsa de compras

##### Problema

El icono de `bolsa de compras` del componente **ProductCard** cambia cuando el mouse se encima. Si utilizamos 2 iconos, al inspeccionar el elemento podemos ver que se renderizan cada vez que pasamos el mouse.

##### Solución

Se utiliza un único icono y cambiamos el color mediante estilos.


#### Manejador de estados

##### Problema

Se utilizó el `state` de los componentes para pasarlo como parametro y así interactuar entre componentes. La accion, que realiza un usuario cuando canjea un producto y se descuentan sus puntos involucra la comuncación de varios componentes.

##### Solución

Se implementó un manejador de estados. Utilizamos [Unstated](https://github.com/jamiebuilds/unstated) en vez de [Redux](https://github.com/reduxjs/redux) por que es mucho más simple, liviano y práctico.

#### Estilos

Se implementó [node-sass](https://github.com/sass/node-sass) para evitar escribir CSS puro y utilizar un solo archivo de estilos (`/assets/styles/theme.scss`).

#### Versionado

Se utilizó una cuenta en github para crear y subir el proyecto.
La primera version de la aplicación se liberó el Lunes 24 utilizando el tag name `v1.0.0`.
Desde ese punto se hizo un branch llamado `develop` donde se desarrolló todas las features. Cada vez que se terminaba una feature se realizaba el merge con `master` y luego se publicaba un nuevo tag.

#### Changelog

Se utilizó un archivo `CHANGELOG.md` para documentar los cambios realizados. El formato del archivo está basado en el template de [Keep A Changelog](https://keepachangelog.com/en/1.0.0/).

#### Integración continua

Como **GitHub** no usa pipelines como **GitLab** o **Bitbuket**, utilicé [CircleCi](https://circleci.com) para poder correr los test y garantizar una integridad de la aplicación.
El historial de los builds se pueden ver en [mcaligares/react-test](https://circleci.com/gh/mcaligares/react-apptest).
