import styled , { css }from 'styled-components';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    background-color: ${props => props.color || "#F2F2F2"};
    flex: 1;
`;

export const HeaderPane = styled(Container)`
    justify-content: center;
    align-items: center;
    flex-direction: row
`;

export const StatsTitle = styled.Text`
    color: ${props => props.color || "#747476"};
    font-size: 16px;
    font-style: normal;
    line-height: 19px;
    font-weight: bold;
    ${Platform.select({
      ios: css`
       font-family: SFProDisplay-Regular;
      `,
      android: css`
       font-family: SF Pro Display Regular;
      `,
    })};
`;

export const styles = StyleSheet.create({
    backButton: {
      width: '100%',
      height: '100%',
    },
    touchableButton: {
      marginTop: 20,
      marginLeft: 20,
      width: 30,
      height: 30,
    },
    abilitieText: {
      color: '#747476',
      fontFamily: Platform.OS === 'ios' ? 'SFProDisplay-Bold' : 'SF Pro Display Bold',
      marginTop: 5,
      fontSize: 15
    },
    totalUnitText: {
      width: 50,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#747476'
    },
    maxUnitText: {
      width: 50,
      alignSelf: 'center',
      color: '#747476'
    },
    ghostBar: {
      width: 159,
    },
    statBar: {
      width: 159,
      height: 10,
      borderRadius: 20,
      alignSelf: 'center',
      marginRight: 10
    },
    unitText: {
      width: 70,
      alignSelf: 'center'
    },
    unitNumber: {
      width: 30,
      alignSelf: 'center',
      color: '#747476'
    },
    statView: {
      marginTop: 25,
      height: 25,
      flexDirection: 'row'
    },
    statsDataView: {
      marginBottom: 20,
    },
    statsView: {
      flex: 1
    },
    pokemonPhoto: {
      width: '100%',
      height: '100%',
    },
    pokemonPhotoBackground: {
      width: 150,
      height: 150,
      marginRight: 20,
    },
    mainInfoContainer: {
      alignItems: 'flex-start',
    },
    headerPaneBackgroundView: {
      width: '50%',
      height: '50%',
    },
    infosPane: {
      flex: 2,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 30,
    },
  });