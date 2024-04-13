import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import tweets from "@/assets/data/tweets";
import { Link, useNavigation } from "expo-router";

const NewTweet = () => {
  const user = tweets[0].user;
  const [tweet, setTweet] = React.useState("");
  const navigation = useNavigation();
  const sendTweet = () => {
    // console.warn("Sending tweet");
    navigation.goBack();
    console.log(tweet);
    setTweet("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigationContainer}>
        <Link href="../" style={{ fontSize: 20 }}>
          Cancel
        </Link>
        <Pressable style={styles.titleContainer} onPress={sendTweet}>
          <Text style={styles.title}>Create new tweet</Text>
        </Pressable>
      </View>
      <View style={styles.infoConatiner}>
        <Image
          src={user.image}
          style={{ width: 50, aspectRatio: 1, borderRadius: 50 }}
        />
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="What's happening?"
            style={{ fontSize: 17 }}
            numberOfLines={5}
            multiline
            onChange={(e) => setTweet(e.nativeEvent.text)}
            value={tweet}
          />
        </View>
      </View>

      {/* <View style={styles.separator} /> */}
    </SafeAreaView>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  infoConatiner: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  titleContainer: {
    backgroundColor: "#1C9BF1",
    padding: 10,
    borderRadius: 25,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#d4d4d4",
  },
  textInputContainer: {
    flex: 1,
    marginLeft: 10,
  },
  navigationContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
