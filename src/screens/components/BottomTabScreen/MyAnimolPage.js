import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import {
  useGetApi,
  useProtectedPatchApi /*useProtectedPostApi*/,
} from "../../../hooks/mutateApi";
import * as utils from "../../../utils";
import styles from "../../../styles/Styles";

function MyAnimolPage({ navigation, route }) {
  const { name, age, description, gender, images, post_id } = route.params.item;
  const [_name, setName] = useState(name);
  const [_gender, setGender] = useState(gender);
  const [_age, setAge] = useState(age);
  const [_description, setDescription] = useState(description);
  const {
    data: commentList,
    isLoading: commentListLoading,
    error: commentListError,
    get: getCommentList,
  } = useGetApi();
  useEffect(() => {
    getCommentList(`comments/post/${post_id}`);
  }, []);

  const {
    isLoading: editLoading,
    data: editData,
    error: editError,
    mutate: mutateEdit,
  } = useProtectedPatchApi();

  const edit = () => {
    mutateEdit(`posts/${post_id}`, {
      name: _name,
      age: _age,
      description: _description,
      gender: _gender,
    });
  };

  useEffect(() => {
    if (editData) {
      Toast.show({
        type: "success",
        text1: "Post modifier",
        visibilityTime: 6000,
      });
    }
  }, [editData]);

  return (
    <ImageBackground
      source={utils.Images.home_page_tab_nav}
      style={styles.home_page_tab_nav}
    >
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View style={styles.header_animol_page}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={utils.Images.back} style={styles.backpic} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.img_zone}>
            <Image
              source={
                images[0]
                  ? {
                      uri: images[0]?.url,
                    }
                  : utils.Images.pic
              }
              style={styles.dog_img}
            />
          </View>
          <SafeAreaView style={{ alignItems: "center" }}>
            <View style={styles.info_zone_ann_animol}>
              <Text style={styles.text_info_anim_name}>Animal Name :</Text>
              <TextInput
                style={styles.inputText_modif}
                placeholder="Nom d'Animal"
                placeholderTextColor={utils.Color.black}
                value={_name}
                onChangeText={(text) => {
                  setName(text);
                }}
              />
              <Text style={styles.text_info_anim_details}>Gendre :</Text>
              <TextInput
                style={styles.inputText_modif}
                placeholder="Nom d'Animal"
                placeholderTextColor={utils.Color.black}
                value={_gender}
                onChangeText={(text) => {
                  setGender(text);
                }}
              />
              <Text style={styles.text_info_anim_details}> Age:</Text>
              <TextInput
                style={styles.inputText_modif}
                placeholder="Age"
                placeholderTextColor={utils.Color.black}
                value={_age}
                onChangeText={(text) => {
                  setAge(text);
                }}
              />
              <Text style={styles.text_info_anim_details}>description:</Text>
              <TextInput
                style={styles.inputText_modif}
                placeholder="Nom d'Animal"
                placeholderTextColor={utils.Color.black}
                value={_description}
                onChangeText={(text) => {
                  setDescription(text);
                }}
              />
              <View style={styles.botton_modif}>
                <TouchableOpacity onPress={edit}>
                  {editLoading ? (
                    <ActivityIndicator size="small" color="#0000ff" />
                  ) : (
                    <Text style={styles.botton_text}>Modifier</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ alignItems: "center", marginBottom: 50 }}>
            <View style={styles.commente_zone}>
              <View style={styles.commente}>
                {commentListLoading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : commentList?.length > 0 ? (
                  commentList?.map((commente) => (
                    <View key={commente.comment_id}>
                      <Text style={styles.commente_user_name}>
                        {commente.user.first_name} {commente.user.last_name}
                      </Text>
                      <Text style={styles.commente_detail}>
                        {commente.text}
                      </Text>
                    </View>
                  ))
                ) : (
                  <Text>no comment</Text>
                )}
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
      <Toast />
    </ImageBackground>
  );
}
export default MyAnimolPage;
