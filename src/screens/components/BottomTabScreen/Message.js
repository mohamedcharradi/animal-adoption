import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import * as utils from '../../../utils/';
import styles from '../../../styles/Styles';
function Message({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <></>
        <View style={styles.header_mess}>
          <Text style={styles.header_title_mess}> Message </Text>
        </View>
        <></>
        <View style={styles.search_zone}>
          <View>
            <TextInput
              style={styles.search_message}
              placeholder="Recherche..."
              placeholderTextColor={utils.Color.black}
            />
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.icon_search_mess}
                  source={utils.Images.search}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <></>
        <SafeAreaView>
          <></>
          <View style={styles.message_zone}>
            <TouchableOpacity
              onPress={() => navigation.navigate('conversation')}>
              <View style={styles.message}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={styles.profil_pic_message}
                      source={utils.Images.profie_photo}
                    />
                  </View>
                  <View>
                    <Text style={styles.user_name_message}>User Name </Text>
                    <Text style={styles.der_message}>le dernier message</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <></>
        </SafeAreaView>
        <></>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Message;
