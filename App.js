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
        </Stack.Navigator>

        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Updates" component={UpdatesScreen} />
        </Tab.Navigator> */}
        <SafeAreaView>
          <Footer
            id={123}
            imgUrl="https://www.worldfutureenergysummit.com/content/dam/sitebuilder/rxae/worldfutureenergysummit/2021/waste/EcoWASTE-Learn-1.jpg/_jcr_content/renditions/original.image_file.592.355.file/922963040/EcoWASTE-Learn-1.jpg"
            title="UAE conference discussion"
            rating="12 / 23 / 2022"
            genre="Meeting"
            address="Abu Dhabi, UAE"
            short_description="This is short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Open the app on your device, reveal the developer menu then tap on Debug JS Remotely.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            dishes={[]}
            long={20}
            lat={0}
          />
        </SafeAreaView>
      </TailwindProvider>
    </NavigationContainer>
  );
}
