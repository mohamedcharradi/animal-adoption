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

function Addannonce() {
  return (
    <SafeAreaView style={{backgroundColor: utils.Color.white, flex: 1}}>
      <ScrollView>
        <View style={styles.title_zone}>
          <Text style={styles.title_add_ann}> Dépose votre annonce</Text>
        </View>
        <></>
        <View style={styles.img_add_zone}>
          <View style={styles.img_zone_ann}>
            <TouchableOpacity>
              <View>
                <Image
                  source={utils.Images.add_img}
                  style={styles.add_img}></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <></>
        <View style={styles.zone_info_ann}>
          <View>
            <Text style={styles.title_info_ann}>Nom d'animal :</Text>
            <TextInput
              style={styles.input_add_ann}
              placeholder="Saisir le nom..."
              placeholderTextColor={utils.Color.black}
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
            />
          </View>
          <View>
            <Text style={styles.title_info_ann}>Discription : </Text>
            <TextInput
              style={styles.input_add_ann_description}
              placeholder="saisir des discriptions..."
              placeholderTextColor={utils.Color.black}
            />
          </View>
          <View style={{height: 100}}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Addannonce;
