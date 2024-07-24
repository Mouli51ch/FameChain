import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Top1 = ({ onTFButtonCPress }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.top, styles.topLayout]}>
      <View style={[styles.tcTfTab, styles.topLayout]} />
      <Pressable
        style={[styles.tfButtonC, styles.buttonPosition]}
        onPress={onTFButtonCPress}
      />
      <View style={[styles.tcButton, styles.buttonPosition]} />
      <Text style={[styles.tf, styles.tfTypo]}>Top Fans</Text>
      <Text style={[styles.tc, styles.tfTypo]}>Top Creators</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topLayout: {
    height: 50,
    width: 351,
    top: 0,
    position: "absolute",
  },
  buttonPosition: {
    height: 36,
    top: 7,
    position: "absolute",
  },
  tfTypo: {
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    left: "50%",
    top: "50%",
    marginTop: -8,
    position: "absolute",
  },
  tcTfTab: {
    left: 351,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.greyscaleGray100,
    borderRadius: Border.br_base,
  },
  tfButtonC: {
    left: 186,
    borderRadius: Border.br_980xl,
    width: 154,
    backgroundColor: Color.greyscaleGray100,
  },
  tcButton: {
    left: 9,
    backgroundColor: Color.colorDimgray_400,
    borderStyle: "solid",
    borderColor: Color.colorLightsteelblue,
    borderWidth: 1,
    width: 155,
    borderRadius: Border.br_base,
  },
  tf: {
    marginLeft: 60.5,
    color: Color.greyscaleGrey30,
  },
  tc: {
    marginLeft: -130.5,
    color: Color.white,
  },
  top: {
    left: 0,
  },
});

export default Top1;
