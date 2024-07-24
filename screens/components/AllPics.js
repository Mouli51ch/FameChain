import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Pic2 from "./Pic2";
import Pic1 from "./Pic1";
import Pic from "./Pic";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

const AllPics = () => {
  return (
    <View style={styles.allPics}>
      <Pic2 />
      <Pic1 />
      <Pic />
      <View style={[styles.pic1, styles.pic1Position]}>
        <Image
          style={[styles.rectangle1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Image
          style={styles.pic1Icon}
          contentFit="cover"
          source={require("../assets/pic-1.png")}
        />
        <Image
          style={[styles.zoomIcon, styles.like1Layout]}
          contentFit="cover"
          source={require("../assets/zoom1.png")}
        />
        <Text style={[styles.username1, styles.kTypo]}>Username 1</Text>
        <View style={[styles.like1, styles.like1Layout]}>
          <Text style={[styles.k, styles.kTypo]}>830K</Text>
          <Image
            style={[styles.like1Child, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-51.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <Image
          style={styles.creator1Icon}
          contentFit="cover"
          source={require("../assets/creator-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pic1Position: {
    top: "0%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  like1Layout: {
    height: 10,
    position: "absolute",
  },
  kTypo: {
    textAlign: "left",
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  rectangle1Icon: {
    height: "90.49%",
    width: "100%",
    right: "0%",
    bottom: "9.51%",
    borderRadius: Border.br_3xs,
    left: "0%",
    top: "0%",
  },
  pic1Icon: {
    top: 1,
    left: 25,
    width: 128,
    height: 163,
    position: "absolute",
  },
  zoomIcon: {
    top: 9,
    left: 154,
    width: 11,
  },
  username1: {
    left: 22,
    fontFamily: FontFamily.bodyMedium,
    color: Color.colorDimgray_100,
    top: 172,
  },
  k: {
    top: 0,
    left: 14,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.white,
  },
  like1Child: {
    height: "28%",
    width: "20.56%",
    top: "61%",
    right: "77.18%",
    bottom: "11%",
    left: "2.25%",
  },
  vectorIcon: {
    height: "80%",
    width: "25.35%",
    top: "10%",
    right: "74.65%",
    bottom: "10%",
    left: "0%",
  },
  like1: {
    left: 142,
    width: 36,
    top: 172,
  },
  creator1Icon: {
    top: 169,
    left: 7,
    borderRadius: Border.br_116xl,
    width: 14,
    height: 14,
    position: "absolute",
  },
  pic1: {
    height: "46.8%",
    width: "46.61%",
    right: "53.39%",
    bottom: "53.2%",
    left: "0%",
    position: "absolute",
  },
  allPics: {
    height: "46.33%",
    width: "97.69%",
    top: "7.46%",
    right: "0.26%",
    bottom: "46.21%",
    left: "2.05%",
    position: "absolute",
  },
});

export default AllPics;
