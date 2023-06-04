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
import { useGetApi, useProtectedPostApi } from "../../../hooks/mutateApi";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";

function AnimolPage({ navigation, route }) {
  const [newComment, setNewComment] = useState("");
  const { name, age, description, gender, images, post_id, user } =
    route.params.item;

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
    isLoading: createCommentLoading,
    data: createCommentData,
    error: createError,
    mutate: mutateComment,
  } = useProtectedPostApi();

  const createComment = () => {
    mutateComment("comments", {
      text: newComment,
      post_id,
    });
  };

  useEffect(() => {
    if (createCommentData) {
      Toast.show({
        type: "success",
        text1: "Comentair ajouter",
        visibilityTime: 6000,
      });
      setNewComment("");
      getCommentList(`comments/post/${post_id}`);
    }
  }, [createCommentData]);
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
            ></Image>
            <View style={styles.icon_zone_img}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("conversation", {
                    to: user.user_id,
                  })
                }
              >
                <Image
                  source={utils.Images.message_icon}
                  style={styles.message_icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <SafeAreaView style={{ alignItems: "center" }}>
            <View style={styles.info_zone_ann_animol}>
              <Text style={styles.text_info_anim_name}>
                Animal Name :{name}
              </Text>
              <Text style={styles.text_info_anim_details}>
                Gendre : {gender}
              </Text>
              <Text style={styles.text_info_anim_details}> Age: {age}</Text>
              <Text style={styles.text_info_anim_details}>
                description: {description}
              </Text>
              {/*<TextInput
                style={styles.add_discription}
                placeholder="Add discription..."
                placeholderTextColor={utils.Color.grey}
              />*/}
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ alignItems: "center" }}>
            <View style={styles.info_zone_ann_owner}>
              <Text style={styles.text_info_anim_name}> Owner Name </Text>
              <Text style={styles.text_info_anim_details}>
                Phone : {user.phone_number}
              </Text>
              <Text style={styles.text_info_anim_details}>
                Location : {user.address}
              </Text>
              {/*<Text style={styles.text_info_anim_details}>
                Email : {user.email}
              </Text>*/}
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ alignItems: "center", marginBottom: 50 }}>
            <View style={styles.commente_zone}>
              <View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View>
                    <TextInput
                      style={styles.add_commente}
                      placeholder="New comment ..."
                      placeholderTextColor={utils.Color.black}
                      value={newComment}
                      onChangeText={(text) => {
                        setNewComment(text);
                      }}
                    />
                  </View>
                  <View style={styles.send_icon}>
                    {createCommentLoading ? (
                      <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                      <TouchableOpacity onPress={createComment}>
                        <Image
                          source={utils.Images.send}
                          style={styles.backpic}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
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
export default AnimolPage;
