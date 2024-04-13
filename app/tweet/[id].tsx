import tweets from "@/assets/data/tweets";
import Tweets from "@/components/Tweets";
import { useGlobalSearchParams } from "expo-router";
const TweetScreen: React.FC = () => {
  const { id } = useGlobalSearchParams();
  // console.warn(id);
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (!tweet) return null;

  return <Tweets tweet={tweet} />;
};

export default TweetScreen;
