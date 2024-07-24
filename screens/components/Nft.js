import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Nft = () => {
  return (
    <View style={styles.nft2}>
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
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <Image
        style={styles.imageIcon1}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewLayout]}>
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-69.png")}
          />
          <Text style={styles.text}>360</Text>
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-691.png")}
          />
          <Text style={styles.text}>360</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    backgroundColor: "transparent",
    height: 99,
    width: 168,
    borderRadius: Border.br_mini,
    top: 134,
    position: "absolute",
  },
  viewLayout: {
    opacity: 0.8,
    width: 18,
    height: 12,
    top: 0,
    position: "absolute",
  },
  bg: {
    left: 180,
  },
  bg1: {
    left: 0,
  },
  imageIcon: {
    left: 210,
    width: 100,
    height: 167,
    top: 0,
    position: "absolute",
  },
  imageIcon1: {
    top: 30,
    left: 1,
    width: 145,
    height: 104,
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
    left: 5,
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    textAlign: "center",
    width: 8,
    height: 11,
    position: "absolute",
  },
  view: {
    left: 177,
  },
  view1: {
    left: 0,
  },
  parent: {
    top: 14,
    left: 146,
    width: 194,
    height: 12,
    position: "absolute",
  },
  nft2: {
    top: 455,
    left: 4,
    width: 348,
    height: 233,
    position: "absolute",
  },
});

export default Nft;
