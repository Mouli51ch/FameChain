import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputPassword2 = ({ propTop, propLeft }) => {
  const inputPasswordStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.inputpassword, inputPasswordStyle]}>
      <View style={styles.inputpassword1}>
        <Text style={[styles.eMailAddress, styles.passwordTypo]}>
          E-mail address
        </Text>
        <View style={[styles.input, styles.inputSpaceBlock]}>
          <Text style={[styles.usernodenerdcom, styles.textTypo]}>
            user@nodenerd.com
          </Text>
        </View>
      </View>
      <Text style={[styles.password, styles.inputSpaceBlock]}>Password</Text>
      <View style={[styles.input, styles.inputSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo]}>*****************</Text>
      </View>
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
  textTypo: {
    opacity: 0.8,
    left: "50%",
    marginLeft: -148,
    textAlign: "left",
    color: Color.greyscaleGrey50,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    textDecoration: "underline",
    fontSize: FontSize.h1_size,
    width: 326,
    position: "absolute",
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
  usernodenerdcom: {
    top: 16,
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
  text: {
    top: 19,
  },
  inputpassword: {
    top: 255,
    left: 27,
    width: 326,
    position: "absolute",
  },
});

export default InputPassword2;
