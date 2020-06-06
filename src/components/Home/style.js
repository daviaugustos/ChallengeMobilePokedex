import styled from 'styled-components';
import { StyleSheet,} from 'react-native';

export const SearchItemBadgesView = styled.TouchableOpacity`
    background-color: ${props => props.color || "#F2F2F2"};
    flex-direction: row;
    height: 130px;
    border-radius: 10px;
    margin-vertical: 20px;
    elevation: 10;
`;

export const styles = StyleSheet.create({
    searchItemImage: {
      width: '85%',
      height: '100%',
      position: 'absolute',
      marginTop: -15
    },
    searchItemPhotoBackground: {
      width: '100%',
      height: '100%',
      marginLeft: 20,
    },
    searchItemDetailsPhoto: {
      flex: 2
    },
    searchItemDetailsView: {
      flex: 2,
      padding: 20
    },
    searchItemView: {
      backgroundColor: 'red',
      flexDirection: 'row',
      height: 130,
      borderRadius: 10,
      marginVertical: 20,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
    },
    searchFlatList: {
      marginTop: 20
    },
    searchView: {
      backgroundColor: '#F2F2F2',
      borderRadius: 10,
      width: '80%',
      height: 65,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchTextinput: { 
      marginHorizontal: 10
    },
    subHeaderText: {
      fontFamily: 'SF Pro Display Regular',
      fontSize: 15,
      color: '#747476'
    },
    headerTitleText: {
      fontFamily: 'SF Pro Display Bold',
      fontSize: 30
    },
    touchableImageOption: {
      width: '100%',
      height: '100%'
    },
    touchableOption: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0)',
      width: '50%',
      height: '50%'
    },
    headerOptionsItem: {
      width: 45,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerOptionsView:{
      flex: 2,
      flexDirection: 'row-reverse',
      paddingHorizontal: 25,
      marginTop: 30
    },
    headerTitle:{
      flex: 1,
      paddingHorizontal: 40,
      
      marginTop: 30
    },
    subHeaderView:{
      flex: 2,
      paddingHorizontal: 40,
      marginVertical: 40
    },
    main: {
      flex: 1,
      backgroundColor: 'white',
    },
    headerPane: {
      flex: 3,
    },
    listPane: {
      flex: 7,
      justifyContent: 'center'
    },
    searchPane: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    backgroundHeader: {
      marginTop: 0,
      width: '100%',
      height: '100%'
    },
    list: {
      marginTop: 20
    },
    container: {
      paddingHorizontal: 20,
    },
  });