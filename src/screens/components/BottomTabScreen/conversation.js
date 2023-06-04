import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import { useProtectedPostApi, useGetApi } from "../../../hooks/mutateApi";
import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";

function Conversation({ navigation, route }) {
  const { to } = route.params;
  const user = useSelector((state) => state);
  // Access user data properties
  const { user_id } = user;
  //Get Messages
  const [messages, setMessagesList] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const {
    data: messageList,
    isLoading: messageListLoading,
    error: messageListError,
    get: getMessageList,
  } = useGetApi();

  useEffect(() => {
    getMessageList(`message/conversations/${to}`);
  }, []);

  useEffect(() => {
    if (messageList) {
      setMessagesList(messageList);
    }
  }, [messageList]);
  // create message
  const {
    isLoading: createMessageLoading,
    data: createMessageData,
    error: createError,
    mutate: mutateMessage,
  } = useProtectedPostApi();

  const createMessage = () => {
    mutateMessage("message", {
      text: newMessage,
      to,
    });
  };

  useEffect(() => {
    if (createMessageData) {
      setNewMessage("");
      setMessagesList((prev) => [
        ...prev,
        { to: { user_id: to }, text: newMessage, message_id: prev.length },
      ]);
    }
  }, [createMessageData]);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View>
        <View style={styles.header_conv_page}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={utils.Images.back2} style={styles.back_pic_mess} />
            </TouchableOpacity>
          </View>
          <View style={styles.header_conv}>
            <View>
              <Text style={styles.header_title_mess}>Message</Text>
            </View>
          </View>
        </View>
        <View style={styles.message_body}>
          <ScrollView style={chat_style.container}>
            {messages?.map((c) => (
              <View
                key={c.message_id}
                style={[
                  chat_style.message,
                  user_id == c.to.user_id
                    ? chat_style.otherMessage
                    : chat_style.myMessage,
                ]}
              >
                <Text>{c.text}</Text>
              </View>
            ))}
            {!messageListLoading && messages?.length < 1 && (
              <Text>No message</Text>
            )}
            {messageListLoading && (
              <ActivityIndicator size="large" color="#0000ff" />
            )}
          </ScrollView>
        </View>
        <View style={styles.message_footer}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <TextInput
                style={styles.input_message}
                placeholder="Saisir votre message..."
                placeholderTextColor={utils.Color.black}
                value={newMessage}
                onChangeText={(text) => {
                  setNewMessage(text);
                }}
              />
            </View>
            <View style={styles.send_icon_message}>
              <TouchableOpacity onPress={createMessage}>
                {createMessageLoading ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  <Image source={utils.Images.send} style={styles.backpic} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Toast />
    </SafeAreaView>
  );
}
export default Conversation;

const chat_style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  message: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E2E2E2",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
});
