import { StatusBar } from "expo-status-bar";
//import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainNavigator from "./src/navigation/MainNavigation";
import { store } from "./src/redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar style="auto" />
    </Provider>
    /*<View style={styles.container}>
      <Text>Open hellooo up App.js to start working on your app!</Text>
      
    </View>*/
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
