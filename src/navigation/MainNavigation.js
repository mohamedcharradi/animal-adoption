import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EntryPointtNavigation } from "./StackNavigation";
import { ActivityIndicator, View } from "react-native";
//import { useSelector } from "react-redux";
import Styles from "../styles/Styles";

/**
 * Define the navigation container
 * that hold all stack navigators and drawer navigator
 * @returns Navigation Container
 */
//const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  // const visibility = useSelector((state) => state.loader.loaderVisibility);
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <EntryPointtNavigation />
          {false && (
            <View style={Styles.loaderStyle}>
              <ActivityIndicator
                size="large"
                // color={Color.light_red}
              />
            </View>
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
