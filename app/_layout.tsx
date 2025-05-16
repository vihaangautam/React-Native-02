
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';


export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()
  const theme= colorScheme ==='dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
   
      <Stack screenOptions={{ headerStyle: { backgroundColor:theme.headerBackground}, headerTintColor:theme.text, headerShadowVisible: false}}>
        <Stack.Screen name="index" options={{ headerShown: false, title :'Home' }} />
        <Stack.Screen name="contact" options={{ headerShown: true, title :'Contact', headerTitle:'Contact us' }} />
        <Stack.Screen name="contact" options={{ headerShown: true, title :'Contact', headerTitle:'Contact us' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
   
  );
}
