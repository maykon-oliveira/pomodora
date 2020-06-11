import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import Routes from "./src/routes";

import { Ubuntu_700Bold, Ubuntu_500Medium, useFonts } from "@expo-google-fonts/ubuntu";

export default function App() {
  const [fonts] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
  });

  if (!fonts) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
