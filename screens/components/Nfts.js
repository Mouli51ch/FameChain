import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Nfts = ({
  image,
  image1,
  ellipse69,
  ellipse691,
  groupViewLeft,
  groupViewOpacity,
}) => {
  const nftsStyle = useMemo(() => {
    return {
      ...getStyleValue("left", groupViewLeft),
      ...getStyleValue("opacity", groupViewOpacity),
    };
  }, [groupViewLeft, groupViewOpacity]);

  return (
    <View style={[styles.nfts, nftsStyle]}>
      <LinearGradient
        style={[styles.bg, styles.bgLayout]}
        locations={[0.01, 0.82]}
        colors={["rgba(51, 43, 43, 0.4)", "rgba(255, 255, 255, 0)"]}
      />
      <LinearGradient
        style={[styles.bg1, styles.bgLayout]}
        locations={[0.01, 0.82]}
        colors={["rgba(51, 43, 43, 0.4)", "rgba(255, 255, 255, 0)"]}
      />
      <Image style={styles.imageIcon} contentFit="cover" source={image} />
      <Image style={styles.imageIcon1} contentFit="cover" source={image1} />
      <View style={styles.bid1Parent}>
        <View style={[styles.bid1, styles.bidFlexBox]}>
          <View>
            <Text style={[styles.h11m11s, styles.textClr]}>1h:11m:11s</Text>
            <Text style={styles.remaningTime}>Remaning Time</Text>
          </View>
          <View>
            <Text style={[styles.eth, styles.ethTypo]}> 20.87 ETH</Text>
            <Text style={styles.remaningTime}>Highest bid</Text>
          </View>
        </View>
        <View style={[styles.bid2, styles.bidFlexBox]}>
          <View>
            <Text style={[styles.h11m11s, styles.textClr]}>22h:11m:33s</Text>
            <Text style={styles.remaningTime}>Remaning Time</Text>
          </View>
          <View>
            <Text style={[styles.eth, styles.ethTypo]}> 5.87 ETH</Text>
            <Text style={styles.remaningTime}>Highest bid</Text>
          </View>
        </View>
      </View>
      <View style={[styles.parent, styles.textLayout]}>
        <View style={[styles.view, styles.viewLayout]}>
          <Image style={styles.child} contentFit="cover" source={ellipse69} />
          <Text style={[styles.text, styles.textLayout]}>360</Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <Image style={styles.child} contentFit="cover" source={ellipse691} />
          <Text style={[styles.text, styles.textLayout]}>360</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    backgroundColor: "transparent",
    height: 112,
    width: 170,
    borderRadius: Border.br_mini,
    top: 133,
    position: "absolute",
  },
  bidFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 160,
    height: 24,
    top: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    fontSize: FontSize.size_5xs,
  },
  ethTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 10,
    textAlign: "left",
  },
  textLayout: {
    height: 13,
    position: "absolute",
  },
  viewLayout: {
    opacity: 0.8,
    width: 18,
    height: 13,
    top: 0,
    position: "absolute",
  },
  bg: {
    left: 187,
  },
  bg1: {
    left: 0,
  },
  imageIcon: {
    top: 23,
    left: 226,
    width: 93,
    height: 154,
    position: "absolute",
  },
  imageIcon1: {
    left: 19,
    width: 131,
    height: 196,
    top: 0,
    position: "absolute",
  },
  h11m11s: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 10,
  },
  remaningTime: {
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    fontFamily: FontFamily.bodyMedium,
    color: Color.colorDimgray_100,
    marginTop: 1,
    textAlign: "left",
  },
  eth: {
    color: Color.colorGreenyellow,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    fontWeight: "700",
    lineHeight: 10,
  },
  bid1: {
    left: 0,
  },
  bid2: {
    left: 187,
  },
  bid1Parent: {
    top: 189,
    width: 347,
    height: 24,
    left: 5,
    position: "absolute",
  },
  child: {
    height: 4,
    width: 18,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 1,
    lineHeight: 8,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    width: 8,
    color: Color.white,
    fontSize: FontSize.size_5xs,
    left: 5,
    height: 13,
  },
  view: {
    left: 179,
  },
  view1: {
    left: 0,
  },
  parent: {
    top: 16,
    left: 152,
    width: 197,
  },
  nfts: {
    top: 65,
    left: 16,
    width: 357,
    height: 245,
    position: "absolute",
  },
});

export default Nfts;
