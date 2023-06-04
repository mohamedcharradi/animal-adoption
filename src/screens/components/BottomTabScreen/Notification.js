import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";
import { useGetApi } from "../../../hooks/mutateApi";
import styles from "../../../styles/Styles";

function Notification({ navigation }) {
  const { data, isLoading, error, get } = useGetApi();
  useEffect(() => {
    get("notification");
  }, []);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View style={styles.header_mess}>
          <Text style={styles.header_title_mess}> Notification </Text>
        </View>
        <SafeAreaView>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : data?.length > 0 ? (
            data?.map((n) => (
              <View key={n.notif_id} style={styles.message_zone}>
                <View style={styles.message}>
                  <Text style={styles.user_name_message}>{n.text}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text>No Notification</Text>
          )}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Notification;
