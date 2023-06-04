import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";
import { useGetApi } from "../../../hooks/mutateApi";
//import * as utils from "../../../utils/";
import styles from "../../../styles/Styles";
function Message({ navigation }) {
  const {
    data: messageList,
    isLoading: messageListLoading,
    error: messageListError,
    get: getMessageList,
  } = useGetApi();

  useEffect(() => {
    getMessageList(`message/last-conversations`);
  }, []);
  useEffect(() => {
    console.log("messageList : ", messageList);
  }, [messageList]);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View style={styles.header_mess}>
          <Text style={styles.header_title_mess}> Message </Text>
        </View>
        <SafeAreaView>
          {messageListLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            messageList?.map((msg) => (
              <View style={styles.message_zone}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("conversation", {
                      to: msg.user_id,
                    })
                  }
                >
                  <View style={styles.message}>
                    <View>
                      <Text
                        style={styles.user_name_message}
                      >{`${msg.first_name} ${msg.last_name}`}</Text>
                      {/*<Text style={styles.der_message}>{msg.text}</Text>*/}
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          )}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Message;
