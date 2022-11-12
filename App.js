import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
  
    <TailwindProvider>

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen name="Bottom" component={Bottom} options={{ headerShown: false }}/>

    </Stack.Navigator>

    {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Resturant" component={ResturantScreen} />
    </Tab.Navigator> */}

    </TailwindProvider>

    </NavigationContainer>

    
  );
}