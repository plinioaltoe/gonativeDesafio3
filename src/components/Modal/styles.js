import { StyleSheet } from "react-native";

import { metrics, colors } from "~/styles";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    justifyContent: "center",
    alignItems: "center"
  },

  boxContainer: {
    padding: metrics.basePadding * 2,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    alignItems: "center",
    width: 280
  },

  boxTitle: {
    fontWeight: "bold",
    fontSize: 16
  },

  boxInput: {
    alignSelf: "stretch",
    marginTop: metrics.baseMargin,
    paddingVertical: 0,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 1,
    borderColor: colors.light,
    height: 40,
    borderRadius: metrics.baseRadius
  },

  buttonContainer: {
    marginTop: metrics.baseMargin,
    height: 40,
    flexDirection: "row"
  },

  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.darker
  },

  cancelButton: {
    backgroundColor: colors.danger,
    marginRight: metrics.littleMargin
  },

  submitButton: {
    backgroundColor: colors.success,
    marginLeft: metrics.littleMargin
  },

  buttonText: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 12
  }
});
