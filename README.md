# Deep finder

![GitHub](https://img.shields.io/github/license/parada3desu/deepfinder.js)
![npm](https://img.shields.io/npm/v/deepfinder)
![](https://github.com/parada3desu/deepfinder.js/workflows/tests/badge.svg)


Search attributes easily within structures of type dictionary, list and embedded substructures with simple format 'dict.users.0.name'.

## Getting Started

```Shell
  npm install deepfinder
```

### Run tests

```Shell
  make test
```

### Example usage

#### Basic sample

```javascript
  const { deepFind } = require("deepfinder")
  const user = {
    links: {
        github: 'github-user-name',
        twitter: 'twitter-user-name'
    },
  }
  console.log(deepFind(user, 'links.github'))
  // output: 'github-user-name'
```


## License

This project is licensed under the MIT License - see the [LICENSE]([LICENSE.md](https://github.com/parada3desu/deepfinder.js/blob/master/LICENSE)) file for details.
