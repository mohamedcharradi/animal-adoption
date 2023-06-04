import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";
import { useGetApi } from "../../../hooks/mutateApi";

function Home({ navigation }) {
  const {
    data: postList,
    isLoading: postListLoading,
    error: postListError,
    get: getPostList,
  } = useGetApi();
  const {
    data: catList,
    isLoading: catListLoading,
    error: catListError,
    get: getCatList,
  } = useGetApi();
  useEffect(() => {
    getCatList("categorie");
    getPostList("posts");
  }, []);
  const Card = ({ item }) => {
    return (
      <View style={styles.home_ann_box}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AnimolPage", { item })}
        >
          <View style={{ flexDirection: "column" }}>
            <View style={styles.image_ann_home}>
              <Image
                source={
                  item.images[0]
                    ? {
                        uri: item.images[0]?.url,
                      }
                    : utils.Images.pic
                }
                style={styles.pic}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                marginHorizontal: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: utils.Color.black,
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 15 }}
                >{`${item.user.first_name} ${item.user.last_name}`}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ImageBackground
      source={utils.Images.home_page_tab_nav}
      style={styles.home_page_tab_nav}
    >
      <View style={{ width: 1080, height: 720 }}>
        <View style={styles.home_tab_view}>
          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={styles.user_name_home}> Bonjour, User_name </Text>
            <Text style={styles.text_header_home}>
              Avez-vous quelque chose à recherché ?
            </Text>
            <View>
              <TextInput
                style={styles.inputText_tab_nav}
                placeholder="Recherche..."
                placeholderTextColor={utils.Color.white}
              />
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.icon_search_home}
                  source={utils.Images.search}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          {catListLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <ScrollView>
              <FlatList
                data={catList}
                horizontal
                keyExtractor={(cat) => cat.cat_id}
                renderItem={(cat) => {
                  return (
                    <View
                      style={{
                        height: 40,
                        width: 100,
                        backgroundColor: "white",
                        margin: 10,
                        borderRadius: 50,
                        elevation: 5,
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>
                        {cat.item.name}
                      </Text>
                    </View>
                  );
                }}
              />
            </ScrollView>
          )}
        </View>
        <SafeAreaView>
          <ScrollView>
            <View
              style={{
                flexDirection: "column",
                marginTop: 5,
                marginHorizontal: 10,
              }}
            >
              {postListLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    flexWrap: "wrap",
                  }}
                >
                  <FlatList
                    data={postList}
                    renderItem={Card}
                    keyExtractor={(post) => post.post_id}
                    numColumns={2}
                    style={{ marginBottom: 200 }}
                  />
                </View>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

export default Home;
