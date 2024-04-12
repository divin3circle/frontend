import tweets from "@/assets/data/tweets";
import Tweets from "@/components/Tweets";

const TweetScreen: React.FC = () => {
  return <Tweets tweet={tweets[0]} />;
};

export default TweetScreen;
