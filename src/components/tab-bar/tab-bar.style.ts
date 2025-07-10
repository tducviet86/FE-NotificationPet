import { StyleSheet, ViewStyle } from "react-native";

type Styles = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    height: 83,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
  },
});

export default styles;
