import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";
import UpdatesScreen from "./screens/UpdatesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActionScreen from "./screens/ActionScreen";
import { SafeAreaView } from "react-native";
import Footer from "./components/Footer";
import UserProfileScreen from './screens/UserProfileScreen';
import SettingsScreen from "./screens/SettingsScreen";
import DeliveryAddressScreen from "./screens/DeliveryAddressScreen";
import WalletScreen from "./screens/WalletScreen";
import ConfigureSettingsScreen from "./screens/ConfigureSettingsScreen";
import FillDeviceInfoScreen from "./screens/FillDeviceInfoScreen";
import CartScreen from "./screens/CartScreen";


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Updates" component={UpdatesScreen} />
          <Stack.Screen name="Resturant" component={ResturantScreen} />
          <Stack.Screen name="Action" component={ActionScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen
            name="DeliveryAddress"
            component={DeliveryAddressScreen}
          />
          <Stack.Screen name="Wallet" component={WalletScreen} />
          <Stack.Screen
            name="ConfigureSettings"
            component={ConfigureSettingsScreen}
          />
          <Stack.Screen
            name="FillDeviceInfo"
            component={FillDeviceInfoScreen}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>

        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Updates" component={UpdatesScreen} />
        </Tab.Navigator> */}
        <Footer />
      </TailwindProvider>
    </NavigationContainer>
  );
}
