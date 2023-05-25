import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as utils from "../../utils/";

export function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={utils.Images.mainscreen}
      style={{ width: "100%", height: "100%" }}
    >
      <Text style={styles.forgot}> Bienvenue </Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.SignUpBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.loginText}>S'inscrire</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  forgot: {
    color: "#212121",
    fontSize: 50,
    fontFamily: "Raleway-Bold",
    marginTop: 270,
    marginLeft: 55,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#3E5BAF",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 5,
    marginLeft: 45,
  },
  SignUpBtn: {
    width: "80%",
    backgroundColor: "#398AFF",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 45,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});
