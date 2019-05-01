import { StyleSheet } from "react-native";

import { metrics, colors } from "~/styles";

export const styles = StyleSheet.create({
  avatarMap: {
    borderRadius: metrics.baseRoundedImage / 2,
    width: metrics.baseRoundedImage,
    height: metrics.baseRoundedImage,
    borderWidth: 2,
    borderColor: colors.black
  }
});
