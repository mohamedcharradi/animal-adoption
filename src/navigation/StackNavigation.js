import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgPass from "../screens/components/ForgPass";
import ResetPass from "../screens/components/ResetPass";
import { HomeScreen } from "../screens/components/HomeScreen";
import Login from "../screens/components/Login";
import Signup from "../screens/components/SignUp";
import { BottomTabNavigation } from "./BottomTabNavigation";
import AnimolPage from "../screens/components/BottomTabScreen/AnimolPage";
import MyAnimolPage from "../screens/components/BottomTabScreen/MyAnimolPage";
import Conversation from "../screens/components/BottomTabScreen/conversation";
import ProfileOption from "../screens/components/BottomTabScreen/ProfileOption";
import Notification from "../screens/components/BottomTabScreen/Notification";
import LoadingScreen from "../screens/components/LoadingScreen";
//const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const EntryPointtNavigation = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="mainScreen" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgPass" component={ForgPass} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="AnimolPage" component={AnimolPage} />
      <Stack.Screen name="MyAnimolPage" component={MyAnimolPage} />
      <Stack.Screen name="conversation" component={Conversation} />
      <Stack.Screen name="ProfileOption" component={ProfileOption} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    </Stack.Navigator>
  );
};
export { EntryPointtNavigation };
