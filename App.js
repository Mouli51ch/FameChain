const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Opening from "./screens/Opening";
import FypCreator from "./screens/FypCreator";
import FypFans from "./screens/FypFans";
import Wallet from "./screens/Wallet";
import Stats from "./screens/Stats";
import Posts from "./screens/Posts";
import Activity from "./screens/Activity";
import TRANSFER from "./screens/TRANSFER";
import Confirmed from "./screens/Confirmed";
import AddToken from "./screens/AddToken";
import TypeSecondary from "./components/TypeSecondary";
import SignUp from "./screens/SignUp";
import SignUp1 from "./screens/SignUp1";
import Wallet1 from "./screens/Wallet";
import Intro from "./screens/Intro";
import Intro1 from "./screens/Intro1";
import Intro2 from "./screens/Intro2";
import LoginOrSignUp from "./screens/LoginOrSignUp";
import SignUp2 from "./screens/SignUp2";
import EnterAddress from "./screens/EnterAddress";
import EnterAddress1 from "./screens/EnterAddress1";
import Login1 from "./screens/Login1";
import Login from "./screens/Login";
import Load from "./screens/Load";
import Home from "./screens/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-LightItalic": require("./assets/fonts/Nunito-LightItalic.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Opening"
              component={Opening}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FypCreator"
              component={FypCreator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FypFans"
              component={FypFans}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet"
              component={Wallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Stats"
              component={Stats}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Posts"
              component={Posts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Activity"
              component={Activity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TRANSFER"
              component={TRANSFER}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmed"
              component={Confirmed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToken"
              component={AddToken}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet1"
              component={Wallet1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intro1"
              component={Intro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intro2"
              component={Intro2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginOrSignUp"
              component={LoginOrSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp2"
              component={SignUp2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterAddress"
              component={EnterAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterAddress1"
              component={EnterAddress1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Load"
              component={Load}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
