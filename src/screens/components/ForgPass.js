import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as utils from "../../utils/";

function ForgPass() {
  //" const [email, setEmail] = useState('');";
  //"const [password, setPasword] = useState('');";

  return (
    <View style={styles.containerImage}>
      <View>
        <Image style={styles.image} source={utils.Images.email} />
      </View>

      <Text style={styles.Text}> Entre your Email :</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor={utils.Color.font_color}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    backgroundColor: "#F3EFE0",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 250,
    width: 350,
    marginBottom: 20,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#f4f5f3",
    borderRadius: 25,
    height: 50,

    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  Text: {
    color: "#000",
    fontSize: 20,
    textAlign: "left",
    marginBottom: 30,
    fontWeight: "bold",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#3E5BAF",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 1,
  },
  loginText_1: {
    color: "#000",
  },
  loginText: {
    color: "white",
  },
});
export default ForgPass;
