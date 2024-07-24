import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeSecondary = ({
  iHaveAnAccount,
  typeSecondaryPosition,
  typeSecondaryWidth,
  typeSecondaryMarginLeft,
  typeSecondaryTop,
  typeSecondaryLeft,
  typeSecondaryBackgroundColor,
  typeSecondaryBorderColor,
  typeSecondaryPaddingHorizontal,
  typeSecondaryElevation,
  typeSecondaryOpacity,
}) => {
  const typeSecondaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeSecondaryPosition),
      ...getStyleValue("width", typeSecondaryWidth),
      ...getStyleValue("marginLeft", typeSecondaryMarginLeft),
      ...getStyleValue("top", typeSecondaryTop),
      ...getStyleValue("left", typeSecondaryLeft),
      ...getStyleValue("backgroundColor", typeSecondaryBackgroundColor),
      ...getStyleValue("borderColor", typeSecondaryBorderColor),
      ...getStyleValue("paddingHorizontal", typeSecondaryPaddingHorizontal),
      ...getStyleValue("elevation", typeSecondaryElevation),
      ...getStyleValue("opacity", typeSecondaryOpacity),
    };
  }, [
    typeSecondaryPosition,
    typeSecondaryWidth,
    typeSecondaryMarginLeft,
    typeSecondaryTop,
    typeSecondaryLeft,
    typeSecondaryBackgroundColor,
    typeSecondaryBorderColor,
    typeSecondaryPaddingHorizontal,
    typeSecondaryElevation,
    typeSecondaryOpacity,
  ]);

  return (
    <View style={[styles.typesecondary, typeSecondaryStyle]}>
      <Text style={styles.iHaveAn}>{iHaveAnAccount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iHaveAn: {
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.white,
    textAlign: "left",
  },
  typesecondary: {
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 1,
    width: 324,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
  },
});

export default TypeSecondary;
