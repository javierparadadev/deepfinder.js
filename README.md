# Deep finder

![GitHub](https://img.shields.io/github/license/parada3desu/deepfinder.js)
![npm](https://img.shields.io/npm/v/deepfinder)
![](https://github.com/parada3desu/deepfinder.js/workflows/tests/badge.svg)


Search attributes easily within structures of type dictionary, list and embedded substructures with simple format 'dict.users.0.name'.

## Getting Started

```Shell
  npm install deepfinder
```

### Example usages

#### Basic sample

```javascript
  const { deepFind } = require('deepfinder')
  const user = {
    name: 'ash',
    links: {
        pokehub: '@ash',
    },
  }
  console.log(deepFind(user, 'links.pokehub'))
  // output: '@ash'
```

#### List basic sample

```javascript
  const { deepFind } = require('deepfinder')
  const user = {
    name: 'ash',
    pokemons: [{
        name: 'pikachu',
    },{
        name: 'charmander',
    }],
  }
  console.log(deepFind(user, 'pokemons.0.name'))
  // output: 'pikachu'
```

#### List all result sample

```javascript
  const { deepFind } = require('deepfinder')
  const user = {
    name: 'ash',
    pokemons: [{
        name: 'pikachu',
    },{
        name: 'charmander',
    }],
  }
  console.log(deepFind(user, 'pokemons.*.name'))
  // output: '['pikachu', 'charmander]'
```

#### List and not null result sample

```javascript
  const { deepFind } = require('deepfinder')
  const user = {
    name: 'ash',
    pokemons: [{
        name: 'pikachu',
    },{
        name: 'charmander',
        ball: 'superball'
    }],
  }
  console.log(deepFind(user, 'pokemons.?.ball'))
  // output: '['superball']'
```