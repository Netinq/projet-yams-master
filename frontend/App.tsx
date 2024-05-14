import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";
import EndScreen from "./app/screens/EndScreen";
import OnlineScreen from "./app/screens/OnlineScreen";
import OfflineScreen from "./app/screens/OfflineScreen";
import HomeScreen from "./app/screens/HomeScreen copy";

LogBox.ignoreAllLogs(true)

export type RootStackParamList = {
  Home: undefined;
  Online: undefined;
  Offline: undefined;
  End: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptionStyle = {
  headerShown: false,
  ...TransitionPresets.FadeFromBottomAndroid,
};

export const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Online" component={OnlineScreen} />
        <Stack.Screen name="Offline" component={OfflineScreen} />
        <Stack.Screen name="End" component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;