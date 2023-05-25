import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import * as utils from '../../../utils/';
import styles from '../../../styles/Styles';

function Home({navigation}) {
  return (
    <ImageBackground
      source={utils.Images.home_page_tab_nav}
      style={styles.home_page_tab_nav}>
      <View style={{width: 1080, height: 720}}>
        <View style={styles.home_tab_view}>
          <View style={{marginHorizontal: 15, marginTop: 10}}>
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
          <ScrollView>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              horizontal
              renderItem={_ => (
                <View
                  style={{
                    height: 40,
                    width: 100,
                    backgroundColor: 'white',
                    margin: 10,
                    borderRadius: 50,
                    elevation: 5,
                  }}
                />
              )}
            />
          </ScrollView>
        </View>
        <SafeAreaView>
          <ScrollView>
            <View
              style={{
                flexDirection: 'column',
                marginTop: 5,
                marginHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <></>
                <View style={styles.home_ann_box}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AnimolPage')}>
                    <View style={{flexDirection: 'column'}}>
                      <View style={styles.image_ann_home}>
                        <Image
                          source={utils.Images.dog_img}
                          style={styles.pic}></Image>
                      </View>
                      <View
                        style={{flexDirection: 'column', marginHorizontal: 10}}>
                        <View>
                          <Text
                            style={{fontSize: 20, color: utils.Color.black}}>
                            Pets name
                          </Text>
                        </View>
                        <View>
                          <Text style={{fontSize: 15}}>User name </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <></>
                <View style={styles.home_ann_box}>
                  <TouchableOpacity>
                    <View style={{flexDirection: 'column'}}>
                      <View style={styles.image_ann_home}>
                        <Image
                          source={utils.Images.dog_img}
                          style={styles.pic}></Image>
                      </View>
                      <View
                        style={{flexDirection: 'column', marginHorizontal: 10}}>
                        <View>
                          <Text
                            style={{fontSize: 20, color: utils.Color.black}}>
                            Pets name
                          </Text>
                        </View>
                        <View>
                          <Text style={{fontSize: 15}}>User name </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <></>
                <View style={styles.home_ann_box}>
                  <TouchableOpacity>
                    <View style={{flexDirection: 'column'}}>
                      <View style={styles.image_ann_home}>
                        <Image
                          source={utils.Images.dog_img}
                          style={styles.pic}></Image>
                      </View>
                      <View
                        style={{flexDirection: 'column', marginHorizontal: 10}}>
                        <View>
                          <Text
                            style={{fontSize: 20, color: utils.Color.black}}>
                            Pets name
                          </Text>
                        </View>
                        <View>
                          <Text style={{fontSize: 15}}>User name </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <></>
                <View style={styles.home_ann_box}>
                  <TouchableOpacity>
                    <View style={{flexDirection: 'column'}}>
                      <View style={styles.image_ann_home}>
                        <Image
                          source={utils.Images.dog_img}
                          style={styles.pic}></Image>
                      </View>
                      <View
                        style={{flexDirection: 'column', marginHorizontal: 10}}>
                        <View>
                          <Text
                            style={{fontSize: 20, color: utils.Color.black}}>
                            Pets name
                          </Text>
                        </View>
                        <View>
                          <Text style={{fontSize: 15}}>User name </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

export default Home;
