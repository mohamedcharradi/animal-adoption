import { Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/userAction";
import * as SecureStore from "expo-secure-store";
import styles from "../../styles/Styles";

function LoadingScreen({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const authSwitcher = async () => {
      const user = JSON.parse(await SecureStore.getItemAsync("user"));
      if (user) {
        dispatch(setUser(user));
        navigation.navigate("BottomTab");
      } else {
        navigation.navigate("mainScreen");
      }
    };
    authSwitcher();
  }, []);
  return (
    <View>
      <Text>Loading ...</Text>
    </View>
  );
}

export default LoadingScreen;
