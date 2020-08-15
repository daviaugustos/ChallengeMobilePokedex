import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

// Custom imports
import * as CommonComponents from '../common';
import { 
  HeaderPane, 
  Container,
  StatsTitle,
  styles,
 } from './style';
import { getPokeImage, getFirstCapitalizedLetter } from '../../utils';

// Assets imports
const pokemonPhotoBackground = require('../../assets/pokemon-detail-photo-circle.png');
const backButtonImage = require('../../assets/detail-back-button.png');

function PokemonDetailScreen() {
    const [ selectedPokemon, setSelectedPokemon ] = useState({});
    const [ pokemonPhoto, setPokemonPhoto ] = useState({});
    const [ pokemonStats, setPokemonStats ] = useState([]);
    const [ pokemonAbilities, setPokemonAbilities ] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
      const { seletectedPokemon } = route.params;
      const pokePhoto = getPokeImage(seletectedPokemon.name);

      const fetchData = async () => {
        const pokeResponse = await fetch(seletectedPokemon.url);
        const pokeData = await pokeResponse.json();
  
        const normalizePokeData = ({ stats, abilities }) => {
          
          const onlyRequiredStats = stats.filter(item => 
            !(item.stat.name === 'special-attack'
            || item.stat.name === 'special-defense')
          );

          const normalizedStats = onlyRequiredStats.map(item => ({
            name: getFirstCapitalizedLetter(item.stat.name),
            value: item.base_stat,
            min: Math.floor(Math.random() * 40) + 60,
            max: Math.floor(Math.random() * 110) + 130,
          }));

          const normalizedAbilities = abilities.map((item, index) => ({
            id: index + 1,
            name: getFirstCapitalizedLetter(item.ability.name),
          }))

          setPokemonStats(normalizedStats);
          setPokemonAbilities(normalizedAbilities);
        }
        
        normalizePokeData(pokeData);
      };
  
      fetchData();
      setSelectedPokemon(seletectedPokemon);
      setPokemonPhoto(pokePhoto);
    }, []);

    return (
      <Container color={selectedPokemon.color}>
        <TouchableOpacity style={styles.touchableButton} onPress={() => navigation.goBack()}>
          <Image source={backButtonImage} style={styles.backButton} />
        </TouchableOpacity>
        <HeaderPane color={selectedPokemon.color}>
          <ImageBackground source={pokemonPhotoBackground} style={styles.pokemonPhotoBackground}>
            <Image source={pokemonPhoto} style={styles.pokemonPhoto} />
          </ImageBackground>
          <View style={styles.mainInfoContainer}>
            <CommonComponents.MainInfos item={selectedPokemon}/>
          </View>
        </HeaderPane>
        <View style={styles.infosPane}>
          <View style={styles.statsView}>
            <StatsTitle color={selectedPokemon.color}>Base Stats</StatsTitle>
            <View style={styles.statsDataView}>
            {pokemonStats.map((stat, index) => (
              <View key={index} style={styles.statView}>
                <Text style={styles.unitText}>{stat.name}</Text>
                <Text style={styles.unitNumber}>{stat.value}</Text>
                <Progress.Bar 
                  progress={(stat.value / stat.max)} 
                  height={10}
                  borderWidth={0}
                  style={styles.statBar}
                  color={selectedPokemon.color}
                  />
                <Text style={styles.maxUnitText}>{stat.min}</Text>
                <Text style={styles.maxUnitText}>{stat.max}</Text>
              </View>
            ))}
            <View style={styles.statView}>
                <Text style={styles.unitText}>Total</Text>
                <Text style={styles.totalUnitText}>{pokemonStats.reduce((accumulator, stat) => accumulator + stat.value, 0)}</Text>
                <View style={styles.ghostBar}/>
                <Text style={styles.maxUnitText}>Min</Text>
                <Text style={styles.maxUnitText}>Max</Text>
              </View>
            </View>
            <StatsTitle color={selectedPokemon.color}>Pokédex Abilities</StatsTitle>
            <View>
              {pokemonAbilities.map(abilitie => (
                <Text key={abilitie.name} style={styles.abilitieText}>
                  {abilitie.id}. {abilitie.name}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Container>
    );
}
export default PokemonDetailScreen;