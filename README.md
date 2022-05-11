# Deep finder

[![GitHub](https://img.shields.io/github/license/jparadadev/deepfinder.js)](https://github.com/jparadadev/deepfinder.js/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/deepfinder)](https://www.npmjs.com/package/deepfinder)
[![npm](https://img.shields.io/npm/dt/deepfinder)](https://www.npmjs.com/package/deepfinder)
[![GA](https://github.com/jparadadev/deepfinder.js/workflows/tests/badge.svg)](https://github.com/jparadadev/deepfinder.js/actions/workflows/test-and-build.yml)


Search attributes easily within structures of type dictionary, list and embedded substructures with simple format 'dict.users.0.name'.

## Getting Started

### Installation

```Shell
  npm install deepfinder
```

### Usage

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

#### List sample

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
  // output: ['pikachu', 'charmander']
```

#### First not null path in list

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
  // output: 'superball'
```

### Use as js object native function

> **Disclaimer**: use this useful, optional and dangerous practice at your own risk.

```javascript
  const DeepFinder = require('deepfinder')
  DeepFinder.nativify()

  const pokemon = { name: 'mew' }
  console.log(pokemon.deepFind('name'))
 
  // output: 'mew'
```