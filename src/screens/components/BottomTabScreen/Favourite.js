import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useGetApi, useProtectedDeleteApi } from "../../../hooks/mutateApi";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";

function Favourite({ navigation }) {
  const { data, isLoading, error, get } = useGetApi();
  const {
    data: deleteData,
    isLoading: deleteLoading,
    error: deleteError,
    mutate: mutateDelete,
  } = useProtectedDeleteApi();
  const getData = () => {
    get("posts/my-post");
  };
  useEffect(() => {
    getData();
  }, [deleteData]);

  return (
    <ImageBackground
      source={utils.Images.favourite_page}
      style={styles.home_page_tab_nav}
    >
      <View>
        <View style={styles.favourite_tab_view}>
          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={styles.my_favourite_text}> Mes Post </Text>
          </View>
        </View>
        <SafeAreaView style={styles.favourite_ann_zone}>
          <ScrollView style={{ paddingBottom: 100 }}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : data?.length > 0 ? (
              data?.map((post) => (
                <PostItem
                  post={post}
                  navigation={navigation}
                  getData={getData}
                  key={post.post_id}
                />
              ))
            ) : (
              <Text>No post</Text>
            )}
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
export default Favourite;

const PostItem = ({ navigation, post, getData }) => {
  const {
    data: deleteData,
    isLoading: deleteLoading,
    error: deleteError,
    mutate: mutateDelete,
  } = useProtectedDeleteApi();
  const deletePost = () => {
    mutateDelete(`posts/${post.post_id}`);
  };
  useEffect(() => {
    if (deleteData) {
      if (deleteData.affected == 1) {
        Toast.show({
          type: "success",
          text1: "Post deleted",
          visibilityTime: 6000,
        });
        getData();
      } else {
        Toast.show({
          type: "success",
          text1: "Post not deleted",
          visibilityTime: 6000,
        });
      }
    }
  }, [deleteData]);
  return (
    <View style={styles.favourite_ann}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MyAnimolPage", {
            item: post,
          })
        }
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={
                post.images[0]
                  ? {
                      uri: post.images[0]?.url,
                    }
                  : utils.Images.pic
              }
              style={styles.pic_ann}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              marginLeft: 5,
              width: 150,
            }}
          >
            <View>
              <Text style={{ fontSize: 20, color: utils.Color.black }}>
                {post.name}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: utils.Color.black }}>
                accepté : {post.isAddmitted ? "Oui" : "pas encore"}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              marginHorizontal: 10,
            }}
          >
            {deleteLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <TouchableOpacity onPress={deletePost}>
                <Image source={utils.Images.delete} style={styles.delet_pic} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <Toast />
    </View>
  );
};
