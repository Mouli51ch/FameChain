import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({
  signUpWithEMail,
  propMarginLeft,
  propTop,
  propWidth,
  propLeft,
  propBackgroundColor,
  propBorderColor,
  propPaddingHorizontal,
  propElevation,
  onButtonPress,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("top", propTop),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("borderColor", propBorderColor),
      ...getStyleValue("paddingHorizontal", propPaddingHorizontal),
      ...getStyleValue("elevation", propElevation),
    };
  }, [
    propMarginLeft,
    propTop,
    propWidth,
    propLeft,
    propBackgroundColor,
    propBorderColor,
    propPaddingHorizontal,
    propElevation,
  ]);

  const navigation = useNavigation();

  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onButtonPress}>
      <Text style={styles.signUpWith}>{signUpWithEMail}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  signUpWith: {
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.white,
    textAlign: "left",
  },
  button: {
    position: "absolute",
    marginLeft: -164,
    top: 533,
    left: "50%",
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 1,
    width: 327,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
  },
});

export default Button1;
