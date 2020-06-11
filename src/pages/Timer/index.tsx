import React, { useState, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { styles } from "./styles";

function formatSeconds(seconds: number) {
  if (seconds < 60) {
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

const Timer = () => {
  const goal = 10 * 60;
  const timerRef = useRef<number>();

  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);

  function toggleTimer() {
    if (timerEnabled) {
      clearInterval(timerRef.current);

      setTimerEnabled(false);
    } else {
      timerRef.current = setInterval(() => {
        setSecondsEllapsed((state) => state + 1);
      }, 1000);

      setTimerEnabled(true);
    }
  }

  return (
    <LinearGradient colors={["#E7F3FE", "#9ABEE0"]} style={styles.container}>
      <Text style={styles.title}>Pomodora</Text>

      <AnimatedCircularProgress
        size={300}
        width={12}
        tintColor="#75A1DE"
        rotation={0}
        backgroundColor="#fff"
        fill={secondsEllapsed}
      >
        {() => (
          <Text style={styles.progress}>{formatSeconds(secondsEllapsed)}</Text>
        )}
      </AnimatedCircularProgress>

      <View style={styles.buttonsContainner}>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity style={styles.button} onPress={toggleTimer}>
            <MaterialIcons
              name={timerEnabled ? "pause" : "play-arrow"}
              size={32}
              color="#FFF"
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>
            {timerEnabled ? "Pausar" : "Iniciar"}
          </Text>
        </View>
        {timerEnabled && (
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="stop" size={32} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Reiniciar</Text>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default Timer;
