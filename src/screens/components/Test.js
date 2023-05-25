import { Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as utils from "../../utils";
import styles from "../../styles/Styles";
//import {connect} from 'react-redux';

function Test({ ...props }) {
  console.log("user", props.user.user);
  return (
    <View>
      <Text>phoneNumber:{props.email}</Text>
      <Text>pinCode: {props.passowrd}</Text>
      <Text>token: {props.accessToken}</Text>
    </View>
  );
}
/*const mapStateToProps = state => ({
  user: state.user,
  accessToken: state.user.user.access_token,
  email: state.user.user.phoneNumber,
  passowrd: state.user.user.pinCode,
});*/

export default Test; //connect(mapStateToProps)(Test);
