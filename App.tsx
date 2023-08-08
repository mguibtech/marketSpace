import { StyleSheet, View, StatusBar } from 'react-native';
import { NativeBaseProvider,Text } from 'native-base'

import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'
import { Loading } from '@components/Loading';
import { THEME } from './src/theme';


export default function App() {

  const [fonstsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      {!fonstsLoaded ? <View/> : <Loading />}
    </NativeBaseProvider>
  );
}
