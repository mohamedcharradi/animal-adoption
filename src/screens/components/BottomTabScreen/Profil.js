import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/actions/userAction";
function Profil({ navigation }) {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  // Access user data properties
  const {
    auth_id,
    user_id,
    email,
    email_verified,
    createdAt,
    first_name,
    last_name,
    phone_number,
    address,
    token,
  } = user;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header_profil}>
        <Text style={styles.header_title_mess}>
          {`${first_name} ${last_name}`}
        </Text>
      </View>
      <SafeAreaView>
        <View style={styles.profile_zone}>
          <View>
            <Image
              style={styles.profiel_pic}
              source={utils.Images.profie_photo}
            />
          </View>
        </View>
        <View style={styles.user_name_profil_zone}>
          <Text style={styles.user_name_profil}>
            {`${first_name} ${last_name}`}
          </Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.option_zone}>
        <View style={styles.profil_option}>
          <View style={styles.option_title_zone}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileOption")}
            >
              <Text style={styles.option_title}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileOption")}
            >
              <Image style={styles.go_pic_profile} source={utils.Images.go} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profil_option}>
          <View style={styles.option_title_zone}>
            <TouchableOpacity>
              <Text style={styles.option_title}>Réservation</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image style={styles.go_pic_profile} source={utils.Images.go} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profil_option}>
          <View style={styles.option_title_zone}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("mainScreen");
                dispatch(logoutUser());
              }}
            >
              <Text style={styles.option_title_dec}>Déconnexion</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                style={styles.go_pic_profile_dec}
                source={utils.Images.go}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
export default Profil;
