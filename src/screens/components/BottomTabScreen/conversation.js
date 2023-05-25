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
function Conversation({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <></>
      <View>
        <View style={styles.header_conv_page}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={utils.Images.back2} style={styles.back_pic_mess}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.header_conv}>
            <View>
              <Text style={styles.header_title_mess}>Message</Text>
            </View>
          </View>
        </View>
        <View style={styles.message_body}>
          <ScrollView>


            
          </ScrollView>
        </View>
        <></>
        <View style={styles.message_footer}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <TextInput
                style={styles.input_message}
                placeholder="Saisir votre message..."
                placeholderTextColor={utils.Color.black}
              />
            </View>
            <View style={styles.send_icon_message}>
            <TouchableOpacity>
              <Image source={utils.Images.send} style={styles.backpic}></Image>
            </TouchableOpacity>
          </View>
          </View>
         
        </View>
        <></>
      </View>
      <></>
    </SafeAreaView>
  );
}
export default Conversation;
