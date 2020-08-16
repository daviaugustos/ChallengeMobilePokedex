import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles, SearchItemBadgesView } from './style';
import { getPokeImage, getFirstCapitalizedLetter } from '../../utils';
import {
  HomeThirdOption,
  HomeSecondOption,
  HomeFirstOption,
  HomeSearchIcon,
} from '../../assets/svg';
import * as CommonComponents from '../common';

import pokemonsCharacteristics from '../../pokemon-characteristics';

const pokeballBackground = require('../../assets/home-background.png');
const homeItemPhotoBackground = require('../../assets/home-item-background-2.png');

const HomeScreen = () => {
  const [pokeList, setPokeList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const pokeResponse = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const pokeData = await pokeResponse.json();

      const normalizePokeData = ({ results }) =>
        results.map((pokemon, index) => ({
          ...pokemon,
          id: `${index + 1}`.padStart(3, '0'),
          title: getFirstCapitalizedLetter(pokemon.name),
          pokePhoto: pokemonsCharacteristics[pokemon.name].pokePhoto,
          badges: pokemonsCharacteristics[pokemon.name]
            ? pokemonsCharacteristics[pokemon.name].badges
            : null,
          color: pokemonsCharacteristics[pokemon.name]
            ? pokemonsCharacteristics[pokemon.name].color
            : null,
        }));

      setPokeList(normalizePokeData(pokeData));
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue !== '') {
      const filteredList = pokeList.filter((pokemonItem) =>
        pokemonItem.name.includes(searchValue.toLowerCase())
      );
      setSearchList(filteredList);
    } else {
      setSearchList(pokeList);
    }
  }, [searchValue]);

  const renderItem = ({ item }) => {
    const pokePhoto = getPokeImage(item.name);

    return (
      <SearchItemBadgesView
        onPress={() =>
          navigation.navigate('PokemonDetails', { seletectedPokemon: item })
        }
        color={item.color}
      >
        <View style={styles.searchItemDetailsView}>
          <CommonComponents.MainInfos item={item} />
        </View>
        <View style={styles.searchItemDetailsPhoto}>
          <ImageBackground
            source={homeItemPhotoBackground}
            style={styles.searchItemPhotoBackground}
          >
            <Image source={pokePhoto} style={styles.searchItemImage} />
          </ImageBackground>
        </View>
      </SearchItemBadgesView>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.main}>
      <View style={styles.headerPane}>
        <ImageBackground
          source={pokeballBackground}
          style={styles.backgroundHeader}
        >
          <View style={styles.headerOptionsView}>
            <View style={styles.headerOptionsItem}>
              <TouchableOpacity
                style={styles.touchableOption}
                onPress={() => false}
              >
                <HomeThirdOption />
              </TouchableOpacity>
            </View>
            <View style={styles.headerOptionsItem}>
              <TouchableOpacity
                style={styles.touchableOption}
                onPress={() => false}
              >
                <HomeSecondOption />
              </TouchableOpacity>
            </View>
            <View style={styles.headerOptionsItem}>
              <TouchableOpacity
                style={styles.touchableOption}
                onPress={() => false}
              >
                <HomeFirstOption />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>Pokédex</Text>
          </View>
          <View style={styles.subHeaderView}>
            <Text style={styles.subHeaderText}>
              Search for Pókemon by name or using the National Pokédex number.
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.searchPane}>
        <View style={styles.searchView}>
          <HomeSearchIcon />
          <TextInput
            style={styles.searchTextinput}
            onChangeText={(text) => setSearchValue(text)}
            value={searchValue}
            placeholder="What Pokémon are you looking for?"
          />
        </View>
      </View>
      <View style={styles.listPane}>
        <FlatList
          style={styles.searchFlatList}
          data={searchValue ? searchList : pokeList}
          contentContainerStyle={styles.container}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
