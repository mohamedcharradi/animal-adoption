import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
import { launchImageLibrary } from "react-native-image-picker";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";
import { useProtectedPostApi } from "../../../hooks/mutateApi";

function Addannonce() {
  // Function to handle image selection
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cat_id, setCatId] = useState("7fd74e4f-f55e-47a0-9084-999d46b2b44b");
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
  useEffect(() => {
    if (data) {
      Toast.show({
        type: "success",
        text1: "Post added successfully",
        visibilityTime: 6000,
      });
      //console.log("error", error.data.message);
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error.data.message,
        visibilityTime: 6000,
      });
      //console.log("error", error.data.message);
    }
  }, [error]);
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
            <TextInput
              style={styles.input_add_ann}
              placeholder="saisir le type..."
              placeholderTextColor={utils.Color.black}
            />
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
              <Text>{isLoading ? "Loading..." : "Ajouter"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
}
export default Addannonce;
