# HeroesApp

Aplicación para probar todo lo aprendido de React hasta el momento.

## Query String

npm install query-string

## React-Router V6

npm install react-router-dom@6

## Animate.css

link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"

## Bootstrap CSS

link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"

## Gh-Pages

npm install --save-dev gh-pages

Añadimos en package.json la siguiente línea arriba de name al inicio del documento:
"homepage":"https://yourusername.github.io/repository-name",

Añadimos en package.json las siguientes líneas al inicio del apartado de scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

En terminal hacemos:
npm run build
npm run deploy
