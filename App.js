if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import 'react-native-gesture-handler';
import NavigationProvider from './src/navigation';

export default NavigationProvider;
