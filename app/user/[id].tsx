import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import tweets from "@/assets/data/tweets";

const UserScreen = () => {
  const { id } = useGlobalSearchParams();
  const user = tweets.find((tweet) => tweet.user.id === id);

  if (!user) return null;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={{ uri: user?.user.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginVertical: 20,
        }}
      />
      <Text>@{user?.user.username}</Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
