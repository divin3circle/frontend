import { Image, StyleSheet, FlatList, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";

import Tweets from "@/components/Tweets";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import tweets from "@/assets/data/tweets";
const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      {/* <Tweets tweet={tweets[0]} /> */}
      <FlatList
        data={tweets}
        renderItem={(item) => <Tweets tweet={item.item} />}
      />
      <Link href="/new_tweet/" asChild>
        <Pressable style={styles.floatingButton}>
          <Entypo name="plus" size={24} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "#1C9BF1",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    right: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
