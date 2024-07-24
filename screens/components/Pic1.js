import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const Pic1 = () => {
  return (
    <View style={styles.pic3}>
      <View style={styles.pic3Child} />
      <Image
        style={styles.pic3Icon}
        contentFit="cover"
        source={require("../assets/pic-3.png")}
      />
      <Image
        style={[styles.zoomIcon, styles.like3Layout]}
        contentFit="cover"
        source={require("../assets/zoom1.png")}
      />
      <Text style={[styles.username3, styles.kTypo]}>Username 3</Text>
      <View style={[styles.like3, styles.like3Layout]}>
        <Text style={[styles.k, styles.kTypo]}>280K</Text>
        <Image
          style={[styles.like3Child, styles.like3ChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.like3ChildLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Image
        style={styles.creator3Icon}
        contentFit="cover"
        source={require("../assets/creator-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  like3Layout: {
    height: 10,
    position: "absolute",
  },
  kTypo: {
    textAlign: "left",
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  like3ChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  pic3Child: {
    height: "89.51%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "10.49%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 1,
    left: "0%",
    position: "absolute",
  },
  pic3Icon: {
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
  username3: {
    left: 23,
    fontFamily: FontFamily.bodyMedium,
    color: Color.colorDimgray_100,
    top: 174,
  },
  k: {
    top: 0,
    left: 14,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.white,
  },
  like3Child: {
    height: "28%",
    width: "21.16%",
    top: "61%",
    right: "76.52%",
    bottom: "11%",
    left: "2.32%",
  },
  vectorIcon: {
    height: "80%",
    width: "26.09%",
    top: "10%",
    right: "73.91%",
    bottom: "10%",
    left: "0%",
  },
  like3: {
    left: 143,
    width: 35,
    top: 174,
  },
  creator3Icon: {
    top: 171,
    left: 8,
    borderRadius: Border.br_11xl,
    width: 14,
    height: 14,
    position: "absolute",
  },
  pic3: {
    height: "47.31%",
    width: "46.61%",
    top: "52.69%",
    right: "53.39%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
});

export default Pic1;
