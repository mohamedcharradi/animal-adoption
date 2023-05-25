import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import * as utils from '../../../utils/';
import styles from '../../../styles/Styles';

function Favourite({navigation}) {
  return (
    <ImageBackground
      source={utils.Images.favourite_page}
      style={styles.home_page_tab_nav}>
      <View>
        <View style={styles.favourite_tab_view}>
          <View style={{marginHorizontal: 15, marginTop: 10}}>
            <Text style={styles.my_favourite_text}> Mes Préférés </Text>
          </View>
        </View>
        <SafeAreaView style={styles.favourite_ann_zone}>
          <ScrollView>
            <></>
            <View style={styles.favourite_ann}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AnimolPage')}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image
                      source={utils.Images.dog_img}
                      style={styles.pic_ann}></Image>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 5,
                      width: 150,
                    }}>
                    <View>
                      <Text style={{fontSize: 20, color: utils.Color.black}}>
                        Pets name
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 15}}>User name </Text>
                    </View>
                  </View>
                  <View
                    style={{justifyContent: 'center', marginHorizontal: 10}}>
                    <TouchableOpacity>
                      <Image
                        source={utils.Images.delete}
                        style={styles.delet_pic}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <></>
            <View style={styles.favourite_ann}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AnimolPage')}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image
                      source={utils.Images.dog_img}
                      style={styles.pic_ann}></Image>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 5,
                      width: 150,
                    }}>
                    <View>
                      <Text style={{fontSize: 20, color: utils.Color.black}}>
                        Pets name
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 15}}>User name </Text>
                    </View>
                  </View>
                  <View
                    style={{justifyContent: 'center', marginHorizontal: 10}}>
                    <TouchableOpacity>
                      <Image
                        source={utils.Images.delete}
                        style={styles.delet_pic}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.favourite_ann}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AnimolPage')}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image
                      source={utils.Images.dog_img}
                      style={styles.pic_ann}></Image>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 5,
                      width: 150,
                    }}>
                    <View>
                      <Text style={{fontSize: 20, color: utils.Color.black}}>
                        Pets name
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 15}}>User name </Text>
                    </View>
                  </View>
                  <View
                    style={{justifyContent: 'center', marginHorizontal: 10}}>
                    <TouchableOpacity>
                      <Image
                        source={utils.Images.delete}
                        style={styles.delet_pic}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.favourite_ann}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AnimolPage')}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image
                      source={utils.Images.dog_img}
                      style={styles.pic_ann}></Image>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 5,
                      width: 150,
                    }}>
                    <View>
                      <Text style={{fontSize: 20, color: utils.Color.black}}>
                        Pets name
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 15}}>User name </Text>
                    </View>
                  </View>
                  <View
                    style={{justifyContent: 'center', marginHorizontal: 10}}>
                    <TouchableOpacity>
                      <Image
                        source={utils.Images.delete}
                        style={styles.delet_pic}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
export default Favourite;
