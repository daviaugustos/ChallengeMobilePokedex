export const getPokeImage = (name) => {
  switch (name) {
    case 'bulbasaur':
      return require('./assets/pokemons-images/bulbasaur.png');
    case 'ivysaur':
      return require('./assets/pokemons-images/ivysaur.png');
    case 'venusaur':
      return require('./assets/pokemons-images/venusaur.png');
    case 'charmander':
      return require('./assets/pokemons-images/charmander.png');
    case 'charmeleon':
      return require('./assets/pokemons-images/charmeleon.png');
    case 'charizard':
      return require('./assets/pokemons-images/charizard.png');
    case 'squirtle':
      return require('./assets/pokemons-images/squirtle.png');
    case 'wartortle':
      return require('./assets/pokemons-images/wartortle.png');
    case 'blastoise':
      return require('./assets/pokemons-images/blastoise.png');
    case 'caterpie':
      return require('./assets/pokemons-images/caterpie.png');
    case 'metapod':
      return require('./assets/pokemons-images/metapod.png');
    case 'butterfree':
      return require('./assets/pokemons-images/butterfree.png');
    case 'weedle':
      return require('./assets/pokemons-images/weedle.png');
    case 'kakuna':
      return require('./assets/pokemons-images/kakuna.png');
    case 'beedrill':
      return require('./assets/pokemons-images/beedrill.png');
    case 'pidgey':
      return require('./assets/pokemons-images/pidgey.png');
    case 'pidgeotto':
      return require('./assets/pokemons-images/pidgeotto.png');
    case 'pidgeot':
      return require('./assets/pokemons-images/pidgeot.png');
    case 'rattata':
      return require('./assets/pokemons-images/rattata.png');
    case 'raticate':
      return require('./assets/pokemons-images/raticate.png');
    default:
      return require('./assets/pokemons-images/default.png');
  }
};

export const getFirstCapitalizedLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);
