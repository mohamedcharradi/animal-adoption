import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as utils from "../../utils/";
import styles from "../../styles/Styles";
//import { connect, useDispatch } from "react-redux";
//import { login } from "../../redux/actions/userAction";
//import { useForm, Controller } from "react-hook-form";
/*import {
  LOGIN_USER_SUCCESS,
  TOGGLE_LOADER,
} from "../../redux/actions/actionTypes";
*/
function Login({ navigation, ...props }) {
  /*const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});*/
  //const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  /*useEffect(() => {
    console.log("accesstoken", props.accessToken);
  }, []);

  /*const loginRequest = (data) => {
    // dispatch({type: TOGGLE_LOADER, payload: true});
    console.log("data", data);
    props.loginRequest(
      data,
      (response) => {
        console.log("response api", response);
        //dispatch({type: TOGGLE_LOADER, payload: false});

        navigation.navigate("BottomTab");
      },
      (err) => {
        //dispatch({type: TOGGLE_LOADER, payload: false});

        console.log("error api", err);
      }
    );
  };*/

  return (
    <ImageBackground source={utils.Images.page} style={styles.backgroundImage}>
      <ScrollView>
        <Text style={styles.text}> Connexion </Text>
        <View style={styles.inputView}>
          {/* <Controller
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <TextInput
                  style={styles.inputText}
                  placeholder="Email..."
                  placeholderTextColor={utils.Color.font_color}
                  onChangeText={(text) => {
                    onChange(text);
                  }}
                  defaultValue={value}
                  value={value}
                />
              );
            }}
            name="email"
            rules={{
              required: { value: true, message: "obligatoire" },
            }}
            defaultValue=""
          />*/}
        </View>
        <View style={styles.inputView}>
          {/*<Controller
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <TextInput
                  secureTextEntry
                  style={styles.inputText}
                  placeholder="Mot de passe...."
                  placeholderTextColor={utils.Color.font_color}
                  onChangeText={(text) => {
                    onChange(text);
                  }}
                  defaultValue={value}
                  value={value}
                />
              );
            }}
            name="password"
            rules={{
              required: { value: true, message: "obligatoire" },
            }}
            defaultValue=""
          />*/}
        </View>
        <TouchableOpacity>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate("ForgPass")}
          >
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          //onPress={handleSubmit(loginRequest)}
        >
          <Text style={styles.loginText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.loginText_1}
            onPress={() => navigation.navigate("SignUp")}
          >
            S'inscrire
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}
/*function mapStateToProps(state) {
  return {
    accessToken: state.user.accessToken,
  };
}
const mapDispatchToProps = {
  loginRequest: login,
};
*/
export default Login; /*connect(mapStateToProps, mapDispatchToProps)(Login);*/
