import { StyleSheet, ViewStyle, TextStyle } from "react-native";

type Styles = {
  container: ViewStyle;
  label: TextStyle;
  labelHighlight: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#495057",
  },
  labelHighlight: {
    color: "#e74c3c",
    fontWeight: "600",
  },
});

export default styles;
