import React from "react";
import { Pressable, Text, GestureResponderEvent } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./tab-item.style";
import { TabEntity } from "../../../entity/tab.entity";

type TabItemProps = Pick<TabEntity, "selected" | "icon" | "label"> & {
  onPress?: (event: GestureResponderEvent) => void;
};

const TabItem = ({ selected, icon, label, onPress }: TabItemProps) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Ionicons name={icon} size={30} color={selected ? "#e74c3c" : "#495057"} />
    <Text
      style={selected ? [styles.label, styles.labelHighlight] : styles.label}
    >
      {label}
    </Text>
  </Pressable>
);

export default TabItem;