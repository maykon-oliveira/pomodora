import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#1C354F",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: 300,
    marginBottom: 80,
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: "#2E5B9A",
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 15,
  },
  buttonsContainner: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 35,
  },
  buttonsWrapper: {
    alignItems: "center",
  },
  progress: {
    color: "#1C354F",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
});
