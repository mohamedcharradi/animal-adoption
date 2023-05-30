import { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";

function ProfileOption({ navigation }) {
  const user = useSelector((state) => state);

  // Access user data properties
  const {
    auth_id,
    user_id,
    email,
    first_name,
    last_name,
    phone_number,
    address,
    role,
    token,
  } = user;
  const [_first_name, setFirst_name] = useState(first_name);
  const [_last_name, setLast_name] = useState(last_name);
  const [_email, setEmail] = useState(email);
  const [_phone_number, setPhone_number] = useState(phone_number);
  const [_address, setAddress] = useState(address);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.profile_optio_header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={utils.Images.back2}
              style={styles.back_pic_mess}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.header_conv}>
          <View>
            <Text style={styles.header_title_mess}>Profile</Text>
          </View>
        </View>
      </View>
      <SafeAreaView>
        <View style={styles.profile_zone}>
          <View>
            <TouchableOpacity>
              <Image
                style={styles.profiel_pic}
                source={utils.Images.profie_photo}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.modif_info_zone}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.text_modif}>Nom : </Text>
            <TextInput
              style={styles.inputText_modif}
              placeholder="first name"
              placeholderTextColor={utils.Color.black}
              value={_first_name}
            />
          </View>
          <View>
            <Text style={styles.text_modif}>Prenom : </Text>
            <TextInput
              style={styles.inputText_modif}
              placeholder="laste name"
              placeholderTextColor={utils.Color.black}
              value={_last_name}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text_modif}>Email : </Text>
          <TextInput
            style={styles.inputText_email_modif}
            placeholder="email@exemlpe.com"
            placeholderTextColor={utils.Color.black}
            value={_email}
          />
        </View>
        <View>
          <Text style={styles.text_modif}>Location : </Text>
          <TextInput
            style={styles.inputText_email_modif}
            placeholder="user location"
            placeholderTextColor={utils.Color.black}
            value={_address}
          />
        </View>
        <View>
          <Text style={styles.text_modif}>Numéro de téléphone : </Text>
          <TextInput
            style={styles.inputText_email_modif}
            placeholder="+111 22 333 444"
            placeholderTextColor={utils.Color.black}
            value={_phone_number}
          />
        </View>
        <SafeAreaView style={styles.botton_zone}>
          <View style={styles.botton_annuler}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.botton_text}>Annuler</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.botton_modif}>
            <TouchableOpacity>
              <Text style={styles.botton_text}>Modifier</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
export default ProfileOption;
