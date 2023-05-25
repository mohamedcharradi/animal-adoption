import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import * as utils from '../../../utils/';
import styles from '../../../styles/Styles';

function AnimolPage({navigation}) {
  return (
    <ImageBackground
      source={utils.Images.home_page_tab_nav}
      style={styles.home_page_tab_nav}>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View style={styles.header_animol_page}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={utils.Images.back}
                  style={styles.backpic}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.header_animol_page}>
              <TouchableOpacity>
                <Image
                  source={utils.Images.favourite_icon}
                  style={styles.favourite_icon}></Image>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.img_zone}>
            <Image source={utils.Images.dog_img} style={styles.dog_img}></Image>
            <View style={styles.icon_zone_img}>
              <TouchableOpacity>
                <Image
                  source={utils.Images.message_icon}
                  style={styles.message_icon}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={utils.Images.user}
                  style={styles.message_icon}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <SafeAreaView style={{alignItems: 'center'}}>
            <View style={styles.info_zone_ann_animol}>
              <Text style={styles.text_info_anim_name}> Animal Name </Text>
              <Text style={styles.text_info_anim_details}> Gendre : </Text>
              <Text style={styles.text_info_anim_details}> Age: </Text>
              <Text style={styles.text_info_anim_details}> discription: </Text>
              <TextInput
                style={styles.add_discription}
                placeholder="Add discription..."
                placeholderTextColor={utils.Color.grey}
              />
            </View>
          </SafeAreaView>
          <SafeAreaView style={{alignItems: 'center'}}>
            <View style={styles.info_zone_ann_owner}>
              <Text style={styles.text_info_anim_name}> Owner Name </Text>
              <Text style={styles.text_info_anim_details}> Phone : </Text>
              <Text style={styles.text_info_anim_details}> Location : </Text>
              <Text style={styles.text_info_anim_details}> Email : </Text>
            </View>
          </SafeAreaView>
          <SafeAreaView style={{alignItems: 'center'}}>
            <View style={styles.commente_zone}>
              <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View>
                    <TextInput
                      style={styles.add_commente}
                      placeholder="New comment ..."
                      placeholderTextColor={utils.Color.black}
                    />
                  </View>
                  <View style={styles.send_icon}>
                    <TouchableOpacity>
                      <Image
                        source={utils.Images.send}
                        style={styles.backpic}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.commente}>
                <Text style={styles.commente_user_name}>User_name</Text>
                <View>
                  <Text style={styles.commente_detail}>commente detail</Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
          <View style={{height: 50}}></View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
export default AnimolPage;
