import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const Pic2 = () => {
  return (
    <View style={styles.pic4}>
      <View style={styles.pic4Child} />
      <Image
        style={styles.pic4Icon}
        contentFit="cover"
        source={require("../assets/pic-4.png")}
      />
      <Image
        style={[styles.zoomIcon, styles.like4Layout]}
        contentFit="cover"
        source={require("../assets/zoom.png")}
      />
      <Text style={[styles.username4, styles.kTypo]}>Username 4</Text>
      <View style={[styles.like4, styles.like4Layout]}>
        <Text style={[styles.k, styles.kTypo]}>700K</Text>
        <Image
          style={[styles.like4Child, styles.like4ChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-5.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.like4ChildLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Image
        style={styles.creator4Icon}
        contentFit="cover"
        source={require("../assets/creator-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  like4Layout: {
    height: 10,
    position: "absolute",
  },
  kTypo: {
    textAlign: "left",
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  like4ChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  pic4Child: {
    height: "89.95%",
    width: "97.26%",
    top: "0%",
    right: "2.74%",
    bottom: "10.05%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 1,
    left: "0%",
    position: "absolute",
  },
  pic4Icon: {
    top: 1,
    left: 2,
    borderRadius: Border.br_4xs,
    width: 175,
    height: 163,
    position: "absolute",
  },
  zoomIcon: {
    top: 8,
    left: 153,
    width: 11,
  },
  username4: {
    top: 173,
    left: 18,
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
  like4Child: {
    height: "28%",
    width: "16.78%",
    top: "61%",
    right: "81.61%",
    bottom: "11%",
    left: "1.61%",
  },
  vectorIcon: {
    height: "80%",
    width: "20.69%",
    top: "10%",
    right: "79.31%",
    bottom: "10%",
    left: "0%",
  },
  like4: {
    top: 172,
    left: 139,
    width: 44,
  },
  creator4Icon: {
    top: 170,
    left: 3,
    borderRadius: Border.br_116xl_8,
    width: 14,
    height: 14,
    position: "absolute",
  },
  pic4: {
    height: "47.08%",
    width: "47.93%",
    top: "52.69%",
    right: "0.89%",
    bottom: "0.23%",
    left: "51.18%",
    position: "absolute",
  },
});

export default Pic2;
