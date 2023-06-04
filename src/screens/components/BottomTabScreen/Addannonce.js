import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Toast from "react-native-toast-message";
import { launchImageLibrary } from "react-native-image-picker";
import { Picker } from "@react-native-picker/picker";
import { useGetApi } from "../../../hooks/mutateApi";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";
import { useProtectedPostApi } from "../../../hooks/mutateApi";

function Addannonce({ navigation }) {
  // Function to handle image selection
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cat_id, setCatId] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [images, setImages] = useState([
    "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRJ4FsPjFybFV7SI0Qz__3O4KLAvQVyu1Qgr0Ck_nbD3zKPI-95-AWp7vQR7pTu2nyg4BHwUNRtvWpC9FVkT4r2r_LcZk57SxRZRZdiqrxj",
  ]);
  const { isLoading, data, error, mutate } = useProtectedPostApi();
  const submit = () => {
    console.log("Submit");
    mutate("posts", { name, age, cat_id, description, gender, images });
  };
  const {
    data: catList,
    isLoading: catListLoading,
    error: catListError,
    get: getCatList,
  } = useGetApi();
  useEffect(() => {
    getCatList("categorie");
  }, []);

  useEffect(() => {
    if (data) {
      Toast.show({
        type: "success",
        text1: "Animeau ajouter",
        visibilityTime: 6000,
      });
    }
    navigation.navigate("Homescree");
  }, [data]);
  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        title: "Select Image",
        quality: 0.5,
      },
      (response) => {
        if (response.didCancel) {
          console.log("Image selection cancelled");
        } else if (response.error) {
          console.log("Image selection error:", response.error);
        } else {
          // Upload the selected image
          //uploadImageToCloudinary(response.uri);
        }
      }
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: utils.Color.white, flex: 1 }}>
      <ScrollView>
        <View style={styles.title_zone}>
          <Text style={styles.title_add_ann}> Dépose votre annonce</Text>
        </View>
        <TouchableOpacity onPress={selectImage}>
          <View style={styles.img_add_zone}>
            <View style={styles.img_zone_ann}>
              <View>
                <Image source={utils.Images.add_img} style={styles.add_img} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.zone_info_ann}>
          <View>
            <Text style={styles.title_info_ann}>Nom d'animal :</Text>
            <TextInput
              style={styles.input_add_ann}
              placeholder="Saisir le nom..."
              placeholderTextColor={utils.Color.black}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View>
            <Text style={styles.title_info_ann}>Type d'animal : </Text>
            <View style={styles.input_add_ann}>
              {catListLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <Picker
                  selectedValue={cat_id}
                  onValueChange={(itemValue) => {
                    console.log(itemValue);
                    setCatId(itemValue);
                  }}
                >
                  <Picker.Item label="Selectionner categeorie" value="" />
                  {catList?.map((item) => (
                    <Picker.Item
                      key={item.cat_id}
                      label={item.name}
                      value={item.cat_id}
                    />
                  ))}
                </Picker>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.title_info_ann}>Âge : </Text>
            <TextInput
              style={styles.input_add_ann}
              placeholder="saisir l'âge..."
              placeholderTextColor={utils.Color.black}
              value={age}
              onChangeText={(text) => setAge(text)}
            />
          </View>
          <View>
            <Text style={styles.title_info_ann}>Sexe : </Text>
            <TextInput
              style={styles.input_add_ann}
              placeholder="Male/Femelle"
              placeholderTextColor={utils.Color.black}
              value={gender}
              onChangeText={(text) => setGender(text)}
            />
          </View>
          <View>
            <Text style={styles.title_info_ann}>Discription : </Text>
            <TextInput
              style={styles.input_add_ann_description}
              placeholder="saisir des discriptions..."
              placeholderTextColor={utils.Color.black}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={{ height: 200 }}>
            <TouchableOpacity onPress={submit} style={styles.addPostBtn}>
              {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <Text>"Ajouter"</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
}
export default Addannonce;
