import { Image, StyleSheet, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";
import tweets from "../../assets/data/tweets";
import Tweets from "@/components/Tweets";
const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      {/* <Tweets tweet={tweets[0]} /> */}
      <FlatList
        data={tweets}
        renderItem={(item) => <Tweets tweet={item.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
