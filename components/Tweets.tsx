import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TweetProps } from "@/types";

const Tweets = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.userContainer}>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={{ fontWeight: "400", color: "lightgray" }}>
            @{tweet.user.username}
          </Text>
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

export default Tweets;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userContainer: {
    flexDirection: "column",
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    lineHeight: 20,
  },
});
