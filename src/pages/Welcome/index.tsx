import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const Welcome = () => {
  const navigation = useNavigation();

  function navigateToTimer() {
    navigation.navigate("Timer");
  }

  return (
    <LinearGradient colors={["#E7F3FE", "#9ABEE0"]} style={styles.container}>
      <Image style={styles.banner} source={require("../../assets/banner.png")} />

      <Text style={styles.title}>Mantenha-se produtivo e focado no trabalho!</Text>

      <TouchableOpacity style={styles.button} onPress={navigateToTimer}>
        <MaterialIcons name="chevron-right" size={32} color="#FFF" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Welcome;
