import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { router, Stack } from "expo-router";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Twitter"
        onPress={() => router.push("/(drawer)/(tabs)")}
        icon={({ color, size }) => (
          <Ionicons name="logo-xing" size={size} color={color} />
        )}
      />
      <DrawerItem
        label="Home"
        onPress={() => router.push("/(drawer)/home")}
        icon={({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        )}
      />
      <DrawerItem
        label="Messages"
        onPress={() => router.push("/(drawer)/messages")}
        icon={({ color, size }) => (
          <Ionicons name="mail-outline" size={size} color={color} />
        )}
      />
      <DrawerItem
        label="Notifications"
        onPress={() => router.push("/(drawer)/notifications")}
        icon={({ color, size }) => (
          <Ionicons name="notifications-outline" size={size} color={color} />
        )}
      />
      <DrawerItem
        label="Bookmarks"
        onPress={() => router.push("/(drawer)/bookmarks")}
        icon={({ color, size }) => (
          <Ionicons name="bookmark-outline" size={size} color={color} />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Drawer />
    // </GestureHandlerRootView>
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} />
  );
}
