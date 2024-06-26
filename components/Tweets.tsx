import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { TweetProps, IconProps } from "@/types";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";

const Tweets = ({ tweet }: TweetProps) => {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
        <View style={styles.userContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Link href={`/user/${tweet.user.id}`} asChild>
              <Pressable style={{ flexDirection: "row", gap: 2 }}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={{ fontWeight: "400", color: "gray" }}>
                  @{tweet.user.username}
                </Text>
                <Text style={{ fontWeight: "400", color: "gray" }}>
                  {"\u2022"}2h
                </Text>
              </Pressable>
            </Link>
            <View>
              <Entypo name="dots-three-horizontal" size={16} color="gray" />
            </View>
          </View>
          <Text style={styles.content}>{tweet.content}</Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.contentImage} />
          )}
          <View style={styles.footer}>
            <IconButton icon="comment" text={tweet.numberOfComments} />
            <IconButton icon="retweet" text={tweet.numberOfRetweets} />
            <IconButton icon="heart" text={tweet.numberOfLikes} />
            <IconButton icon="chart" text={tweet.impressions || 0} />
            <IconButton icon="share-apple" />
          </View>
        </View>
      </Pressable>
    </Link>
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
  contentImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 15,
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
