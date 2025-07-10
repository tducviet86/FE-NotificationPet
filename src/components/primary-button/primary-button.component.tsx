// primary.component.tsx
import React, { ReactNode } from "react";
import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import styles from "./primary-button.style";

type PrimaryButtonProps = {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
};

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {typeof children === "string" ? (
      <Text style={styles.text}>{children}</Text>
    ) : (
      children
    )}
  </TouchableOpacity>
);

export default PrimaryButton;