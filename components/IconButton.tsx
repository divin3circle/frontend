import { EvilIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import { IconProps } from "@/types";

const IconButton = ({ icon, text }: IconProps) => {
  return (
    <View style={styles.iconContainer}>
      <EvilIcons name={icon} size={22} color="gray" />
      <Text style={{ fontSize: 12, color: "gray" }}>
        {/* {tweet.numberOfComments} */} {text}
      </Text>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
