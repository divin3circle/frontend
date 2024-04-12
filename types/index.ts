import React from "react";
import { EvilIcons } from "@expo/vector-icons";

type User = {
  id: string;
  username: string;
  name: string;
  image: string | undefined;
};

type Tweet = {
  id: string;
  user: User;
  createdAt: string;
  content: string;
  image?: string | undefined;
  numberOfComments?: number | undefined;
  numberOfRetweets?: number | undefined;
  numberOfLikes?: number | undefined;
  impressions?: number | undefined;
};
type TweetProps = {
  tweet: Tweet;
};

type IconProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: number | string;
};
export type { Tweet, TweetProps, IconProps };
