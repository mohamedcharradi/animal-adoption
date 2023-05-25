import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgPass from "../screens/components/ForgPass";
import { HomeScreen } from "../screens/components/HomeScreen";
import Login from "../screens/components/Login";
import Signup from "../screens/components/SignUp";
import { BottomTabNavigation } from "./BottomTabNavigation";
import AnimolPage from "../screens/components/BottomTabScreen/AnimolPage";
import Conversation from "../screens/components/BottomTabScreen/conversation";
import ProfileOption from "../screens/components/BottomTabScreen/ProfileOption";
import Test from "../screens/components/Test";

//const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const EntryPointtNavigation = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="mainScreen" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgPass" component={ForgPass} />
      <Stack.Screen name="AnimolPage" component={AnimolPage} />
      <Stack.Screen name="conversation" component={Conversation} />
      <Stack.Screen name="ProfileOption" component={ProfileOption} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};
export { EntryPointtNavigation };
