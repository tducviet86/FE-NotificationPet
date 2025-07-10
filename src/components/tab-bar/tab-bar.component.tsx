import { View } from "react-native";
import styles from "./tab-bar.style";
import TabItem from "./tab-item/tab-item.component";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabEntity } from "../../entity/tab.entity";
import { Ionicons } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel ??
          options.title ??
          route.name;

        const selected = state.index === index;

        const onPress = () => {
          if (!selected) {
            navigation.navigate(route.name);
          }
        };

        // ✅ Kiểm tra icon có hợp lệ không
        const icon = (
          "icon" in options && typeof options.icon === "string"
            ? options.icon
            : "alert-circle-outline" // icon fallback
        ) as keyof typeof Ionicons.glyphMap;

        const tab: TabEntity = {
          key: route.key,
          name: route.name,
          label: label as string,
          icon,
          selected,
        };

        return (
          <TabItem
            key={tab.key}
            label={tab.label}
            icon={tab.icon}
            selected={tab.selected}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export default TabBar;