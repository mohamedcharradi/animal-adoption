import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import Toast from "react-native-toast-message";
import { useAuthApi } from "../../hooks/mutateApi";
import * as utils from "../../utils/";

function Signup({ navigation }) {
  const { isLoading, data, error, mutate } = useAuthApi();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setConfirmPassword] = useState("");

  const sigup = () => {
    mutate("signup", {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      address,
    });
    //console.log("sign up");
  };
  //email, password, first_name, last_name, phone_number, address
  useEffect(() => {
    console.log("sign up", data);
    if (data?.message == "success") {
      Toast.show({
        type: "success",
        text1: "User ceated with success",
        visibilityTime: 6000,
      });
    }
    if (data?.error) {
      Toast.show({
        type: "error",
        text1: data.error,
        visibilityTime: 6000,
      });
    }
  }, [data]);
  //useEffect(()=>{},[error])

  return (
    <View style={styles.appContent}>
      <ImageBackground
        source={utils.Images.page}
        style={{
          width: Dimensions.get("screen").width,
          flex: 1,
        }}
      >
        <Text style={styles.text}>Créer votre Compte </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Nom"
            placeholderTextColor={utils.Color.font_color}
            onChangeText={(text) => setLast_name(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            //secureTextEntry
            style={styles.inputText}
            placeholder="Prénom"
            placeholderTextColor={utils.Color.font_color}
            onChangeText={(text) => setFirst_name(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            //secureTextEntry
            style={styles.inputText}
            placeholder="Numéro Téléphone"
            placeholderTextColor={utils.Color.font_color}
            onChangeText={(text) => setPhone_number(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            //secureTextEntry
            style={styles.inputText}
            placeholder="votre address"
            placeholderTextColor={utils.Color.font_color}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            //secureTextEntry
            style={styles.inputText}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={utils.Color.font_color}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Mot de pass"
            placeholderTextColor={utils.Color.font_color}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirmer mot de pass"
            placeholderTextColor={utils.Color.font_color}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            sigup();
          }}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>
            {isLoading ? "Loading ..." : "Créer votre compte"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.loginText_1}
            onPress={() => navigation.navigate("Login")}
          >
            J'ai un compte{" "}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  appContent: {
    flex: 1,
    alignContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: utils.Color.background_color,
    alignItems: "center",
  },

  text: {
    color: utils.Color.black,
    fontSize: 35,
    fontFamily: "Raleway-Bold",
    marginTop: 170,
    marginLeft: 30,
    marginBottom: 20,
  },

  text1: {
    color: utils.Color.black,
    fontSize: 50,
    fontFamily: "Raleway-Bold",
    marginBottom: 20,
  },
  container_image: {
    width: 50,
    height: 50,
  },
  inputView: {
    width: "80%",
    backgroundColor: utils.Color.inputeView_color,
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    padding: 20,
    marginLeft: 40,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: utils.Color.black,
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: utils.Color.botton_color_1,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
  },
  loginText_1: {
    color: utils.Color.black,
    marginLeft: 230,
    fontWeight: "bold",
  },
  loginText: {
    color: utils.Color.white,
    fontWeight: "bold",
  },
});
export default Signup;
