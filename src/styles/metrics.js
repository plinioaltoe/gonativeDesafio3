import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  basePadding: 10,
  baseMargin: 20,
  littleMargin: 5,
  baseRadius: 5,
  baseRoundedImage: 48,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  headerMargin: Platform.OS === "ios" ? 20 : 0
};
