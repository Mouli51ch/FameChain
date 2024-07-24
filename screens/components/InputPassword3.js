import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputPassword3 = ({ propTop, propLeft }) => {
  const inputPassword1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.inputpassword, inputPassword1Style]}>
      <View style={styles.inputpassword1}>
        <Text style={[styles.eMailAddress, styles.passwordTypo]}>
          E-mail address
        </Text>
        <View style={[styles.input, styles.inputSpaceBlock]} />
      </View>
      <Text style={[styles.password, styles.inputSpaceBlock]}>Password</Text>
      <View style={[styles.input, styles.inputSpaceBlock]} />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    textAlign: "left",
    color: Color.greyscaleGrey50,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    textDecoration: "underline",
    fontSize: FontSize.h1_size,
  },
  inputSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  eMailAddress: {
    alignSelf: "stretch",
    color: Color.greyscaleGrey50,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    textDecoration: "underline",
    fontSize: FontSize.h1_size,
  },
  input: {
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.greyscaleGrey70,
    borderWidth: 1,
    height: 48,
  },
  inputpassword1: {
    width: 326,
  },
  password: {
    textAlign: "left",
    color: Color.greyscaleGrey50,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    textDecoration: "underline",
    fontSize: FontSize.h1_size,
  },
  inputpassword: {
    position: "absolute",
    top: 255,
    left: 27,
    width: 326,
  },
});

export default InputPassword3;
