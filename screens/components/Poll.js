import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Poll = ({
  frame105,
  group64,
  opt1ColorTop,
  pollMarginLeft,
  pollOpacity,
}) => {
  const pollStyle = useMemo(() => {
    return {
      ...getStyleValue("top", opt1ColorTop),
      ...getStyleValue("marginLeft", pollMarginLeft),
      ...getStyleValue("opacity", pollOpacity),
    };
  }, [opt1ColorTop, pollMarginLeft, pollOpacity]);

  return (
    <View style={[styles.poll, styles.pollLayout, pollStyle]}>
      <View style={[styles.pollBg, styles.pollBgBorder]} />
      <View style={[styles.opt2Color, styles.colorLayout]} />
      <View style={[styles.opt1Color, styles.colorLayout]} />
      <View style={[styles.opt3Color, styles.opt3Position]} />
      <View style={[styles.opt2, styles.optLayout]} />
      <View style={[styles.opt3, styles.optLayout]} />
      <View style={[styles.opt1, styles.optLayout]} />
      <View style={[styles.voteButton, styles.pollBgBorder]} />
      <Text style={[styles.option1, styles.optionFlexBox]}>Option #1</Text>
      <Text style={[styles.option3, styles.optionFlexBox]}>Option #3</Text>
      <Text style={[styles.option2, styles.optionFlexBox]}>Option #2</Text>
      <Text style={[styles.thisIsA, styles.optionFlexBox]}>
        This is a poll question:
      </Text>
      <Text style={[styles.votes, styles.votesTypo]}>1124 votes</Text>
      <Text style={[styles.votes1, styles.votesTypo]}>173 votes</Text>
      <Text style={[styles.vote, styles.votesTypo]}>vote</Text>
      <Text style={[styles.votes2, styles.votesTypo]}>143 votes</Text>
      <View style={styles.frameParent}>
        <Image style={styles.frameChild} contentFit="cover" source={frame105} />
        <Image style={styles.frameItem} contentFit="cover" source={group64} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pollLayout: {
    height: 221,
    width: 367,
  },
  pollBgBorder: {
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
    borderColor: Color.colorLightsteelblue,
    left: "50%",
    position: "absolute",
  },
  colorLayout: {
    height: 32,
    backgroundColor: Color.colorIndigo_200,
    marginLeft: -172.5,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    left: "50%",
    position: "absolute",
  },
  opt3Position: {
    top: 146,
    borderColor: Color.colorLightsteelblue,
  },
  optLayout: {
    width: 344,
    height: 32,
    marginLeft: -172.5,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
    left: "50%",
    position: "absolute",
  },
  optionFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  votesTypo: {
    textAlign: "right",
    color: Color.colorWhitesmoke,
    letterSpacing: 0.2,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.bodyMedium,
    position: "absolute",
  },
  pollBg: {
    marginLeft: -183.5,
    top: 0,
    height: 221,
    width: 367,
  },
  opt2Color: {
    width: 98,
    top: 98,
    borderColor: Color.colorLightsteelblue,
  },
  opt1Color: {
    width: 307,
    top: 50,
    borderColor: Color.colorLightsteelblue,
    height: 32,
    backgroundColor: Color.colorIndigo_200,
    marginLeft: -172.5,
  },
  opt3Color: {
    width: 170,
    height: 32,
    backgroundColor: Color.colorIndigo_200,
    marginLeft: -172.5,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    left: "50%",
    position: "absolute",
  },
  opt2: {
    top: 98,
    borderColor: Color.colorLightsteelblue,
  },
  opt3: {
    top: 146,
    borderColor: Color.colorLightsteelblue,
  },
  opt1: {
    borderColor: Color.colorIndigo_100,
    top: 50,
  },
  voteButton: {
    marginLeft: 114.5,
    top: 190,
    width: 57,
    height: 20,
  },
  option1: {
    top: 60,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    left: 23,
    textAlign: "left",
  },
  option3: {
    top: 156,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    left: 23,
    textAlign: "left",
  },
  option2: {
    top: 108,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    left: 23,
    textAlign: "left",
  },
  thisIsA: {
    top: 18,
    left: 16,
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorGreenyellow,
  },
  votes: {
    top: 62,
    left: 298,
  },
  votes1: {
    top: 157,
    left: 302,
  },
  vote: {
    top: 195,
    left: 317,
  },
  votes2: {
    top: 109,
    left: 301,
  },
  frameChild: {
    width: 32,
    height: 25,
  },
  frameItem: {
    width: 25,
    marginLeft: -14,
    height: 25,
  },
  frameParent: {
    top: 13,
    left: 309,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  poll: {
    marginLeft: -185,
    top: 303,
    left: "50%",
    height: 221,
    width: 367,
    position: "absolute",
  },
});

export default Poll;
