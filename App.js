import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  
    <TailwindProvider>

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
    </Stack.Navigator>

    {/* <SafeAreaView>
        <Text className="text-red-500">--HomeScreen--</Text>
    </SafeAreaView> */}

    </TailwindProvider>

    </NavigationContainer>
  );
}