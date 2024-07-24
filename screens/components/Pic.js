import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const Pic = () => {
  return (
    <View style={[styles.pic2, styles.pic2Position]}>
      <View style={[styles.pic2Child, styles.pic2Position]} />
      <Image
        style={styles.pic2Icon}
        contentFit="cover"
        source={require("../assets/pic-2.png")}
      />
      <Image
        style={[styles.zoomIcon, styles.like2Layout]}
        contentFit="cover"
        source={require("../assets/zoom1.png")}
      />
      <Text style={[styles.username2, styles.kTypo]}>Username 2</Text>
      <View style={[styles.like2, styles.like2Layout]}>
        <Text style={[styles.k, styles.kTypo]}>380K</Text>
        <Image
          style={[styles.like2Child, styles.like2ChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.like2ChildLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Image
        style={styles.creator2Icon}
        contentFit="cover"
        source={require("../assets/creator-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pic2Position: {
    top: "0%",
    position: "absolute",
  },
  like2Layout: {
    height: 10,
    position: "absolute",
  },
  kTypo: {
    textAlign: "left",
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  like2ChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  pic2Child: {
    height: "90.49%",
    width: "95.48%",
    right: "4.52%",
    bottom: "9.51%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 1,
    left: "0%",
  },
  pic2Icon: {
    top: 1,
    left: 19,
    width: 141,
    height: 163,
    position: "absolute",
  },
  zoomIcon: {
    top: 9,
    left: 154,
    width: 11,
  },
  username2: {
    top: 172,
    left: 21,
    fontFamily: FontFamily.bodyMedium,
    color: Color.colorDimgray_100,
  },
  k: {
    top: 0,
    left: 14,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.white,
    width: 30,
  },
  like2Child: {
    height: "28%",
    width: "16.78%",
    top: "61%",
    right: "81.38%",
    bottom: "11%",
    left: "1.84%",
  },
  vectorIcon: {
    height: "80%",
    width: "20.69%",
    top: "10%",
    right: "79.31%",
    bottom: "10%",
    left: "0%",
  },
  like2: {
    top: 171,
    left: 143,
    width: 44,
  },
  creator2Icon: {
    top: 169,
    left: 6,
    borderRadius: Border.br_116xl,
    width: 14,
    height: 14,
    position: "absolute",
  },
  pic2: {
    height: "46.8%",
    width: "48.82%",
    right: "0%",
    bottom: "53.2%",
    left: "51.18%",
  },
});

export default Pic;
