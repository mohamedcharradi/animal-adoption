import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Addannonce from '../screens/components/BottomTabScreen/Addannonce';
import Home from '../screens/components/BottomTabScreen/Home';
import Message from '../screens/components/BottomTabScreen/Message';
import Profil from '../screens/components/BottomTabScreen/Profil';
import AnimolPage from '../screens/components/BottomTabScreen/AnimolPage'
import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import * as utils from '../utils/';
import Favourite from '../screens/components/BottomTabScreen/Favourite';

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 20,
          marginHorizontal: 20,
          elevation: 5,
          backgroundColor: utils.Color.white,
          borderRadius: 10,
          height: 60,
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Homescree"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{height: 30, width: 30}}
                source={utils.Images.homebottomtab}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{height: 30, width: 30}}
                source={utils.Images.love}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Addannonce"
        component={Addannonce}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: utils.Color.rose,
                alignContent: 'center',
                justifyContent: 'center',
                flex: 1,
                paddingHorizontal: 15,
                borderRadius: 50,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={utils.Images.plus}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{height: 30, width: 30}}
                source={utils.Images.message}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{height: 30, width: 30}}
                source={utils.Images.user}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
