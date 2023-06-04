import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Toast from "react-native-toast-message";
import { useSelector, useDispatch } from "react-redux";
import { useProtectedPatchApi } from "../../../hooks/mutateApi";
import { setUser } from "../../../redux/actions/userAction";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";

function ProfileOption({ navigation }) {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  // Access user data properties
  const {
    user_id,
    email,
    first_name,
    last_name,
    phone_number,
    address,
    token,
  } = user;
  const [_first_name, setFirst_name] = useState(first_name);
  const [_last_name, setLast_name] = useState(last_name);
  //const [_email, setEmail] = useState(email);
  const [_phone_number, setPhone_number] = useState(phone_number);
  const [_address, setAddress] = useState(address);
  const {
    isLoading: editLoading,
    data: editData,
    error: editError,
    mutate: mutateEdit,
  } = useProtectedPatchApi();

  const edit = () => {
    mutateEdit(`user/${user_id}`, {
      first_name: _first_name,
      last_name: _last_name,
      phone_numbe: _phone_number,
      address: _address,
    });
  };

  useEffect(() => {
    if (editData) {
      Toast.show({
        type: "success",
        text1: "Profil modifier",
        visibilityTime: 6000,
      });
      dispatch(setUser({ ...editData, token }));
    }
  }, [editData]);

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
              onChangeText={(text) => {
                setFirst_name(text);
              }}
            />
          </View>
          <View>
            <Text style={styles.text_modif}>Prenom : </Text>
            <TextInput
              style={styles.inputText_modif}
              placeholder="laste name"
              placeholderTextColor={utils.Color.black}
              value={_last_name}
              onChangeText={(text) => {
                setLast_name(text);
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text_modif}>Email : {email}</Text>
        </View>
        <View>
          <Text style={styles.text_modif}>Location : </Text>
          <TextInput
            style={styles.inputText_email_modif}
            placeholder="user location"
            placeholderTextColor={utils.Color.black}
            value={_address}
            onChangeText={(text) => {
              setAddress(text);
            }}
          />
        </View>
        <View>
          <Text style={styles.text_modif}>Numéro de téléphone : </Text>
          <TextInput
            style={styles.inputText_email_modif}
            placeholder="+111 22 333 444"
            placeholderTextColor={utils.Color.black}
            value={_phone_number}
            onChangeText={(text) => {
              setPhone_number(text);
            }}
          />
        </View>
        <SafeAreaView style={styles.botton_zone}>
          <View style={styles.botton_annuler}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.botton_text}>Annuler</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.botton_modif}>
            <TouchableOpacity onPress={edit}>
              {editLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <Text style={styles.botton_text}>Modifier</Text>
              )}
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaView>
      <Toast />
    </SafeAreaView>
  );
}
export default ProfileOption;
