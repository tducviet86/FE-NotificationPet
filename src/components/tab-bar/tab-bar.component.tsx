import { View } from "react-native";
import styles from "./tab-bar.style";
import TabItem from "./tab-item/tab-item.component";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TabEntity, TabBarOptionsWithIcon } from "../../entity/tab.entity";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        // ép kiểu duy nhất ở đây
        const options = descriptors[route.key].options as TabBarOptionsWithIcon;

        const label = options.tabBarLabel ?? options.title ?? route.name;
        const selected = state.index === index;

        const tab: TabEntity = {
          key: route.key,
          name: route.name,
          label: label,
          icon: options.icon, // ✅ không còn lỗi
          selected,
        };

        return (
          <TabItem
            key={tab.key}
            label={tab.label}
            icon={tab.icon}
            selected={tab.selected}
            onPress={() => {
              if (!selected) {
                navigation.navigate(route.name);
              }
            }}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
