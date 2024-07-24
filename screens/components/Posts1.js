import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Posts1 = () => {
  return (
    <View style={styles.posts}>
      <View style={[styles.allPics, styles.allPosition]}>
        <View style={[styles.pic1, styles.pic1Position]}>
          <View style={[styles.rectangle1, styles.pic1Position1]} />
          <View style={[styles.like1, styles.like1Layout]}>
            <Text style={[styles.text, styles.textTypo]}>100</Text>
            <Text style={[styles.text1, styles.textTypo]}>1</Text>
            <Image
              style={[styles.like1Child, styles.like1ChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.like1ChildLayout]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.zoomIcon, styles.like1Layout]}
          contentFit="cover"
          source={require("../assets/zoom2.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.allPics1, styles.pic1Position]}>
        <View style={[styles.pic1, styles.pic1Position]}>
          <View style={[styles.rectangle1, styles.pic1Position1]} />
          <Image
            style={[styles.zoomIcon, styles.like1Layout]}
            contentFit="cover"
            source={require("../assets/zoom2.png")}
          />
          <View style={[styles.like1, styles.like1Layout]}>
            <Text style={[styles.text, styles.textTypo]}>12</Text>
            <Text style={[styles.text1, styles.textTypo]}>0</Text>
            <Image
              style={[styles.like1Child, styles.like1ChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.like1ChildLayout]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.allPics2, styles.allPosition1]}>
        <View style={[styles.pic1, styles.pic1Position]}>
          <View style={[styles.rectangle1, styles.pic1Position1]} />
          <Image
            style={[styles.zoomIcon, styles.like1Layout]}
            contentFit="cover"
            source={require("../assets/zoom2.png")}
          />
          <View style={[styles.like1, styles.like1Layout]}>
            <Text style={[styles.text, styles.textTypo]}>3</Text>
            <Text style={[styles.text1, styles.textTypo]}>0</Text>
            <Image
              style={[styles.like1Child, styles.like1ChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.like1ChildLayout]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={styles.skaterOnASeasideRoad}
        contentFit="cover"
        source={require("../assets/skater-on-a-seaside-road.png")}
      />
      <Image
        style={styles.seaCoastWithABridge}
        contentFit="cover"
        source={require("../assets/sea-coast-with-a-bridge.png")}
      />
      <Image
        style={styles.womanCrossingARoadAtACro}
        contentFit="cover"
        source={require("../assets/woman-crossing-a-road-at-a-crosswalk.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  allPosition: {
    bottom: "51.62%",
    top: "0.57%",
    width: "48.28%",
    height: "47.81%",
  },
  pic1Position: {
    right: "0%",
    position: "absolute",
  },
  pic1Position1: {
    top: "0%",
    left: "0%",
  },
  like1Layout: {
    height: 9,
    position: "absolute",
  },
  textTypo: {
    width: 20,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    top: 0,
    height: 9,
    position: "absolute",
  },
  like1ChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIconLayout: {
    left: "38.79%",
    right: "58.86%",
    width: "2.35%",
    height: "3.06%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupIconPosition: {
    bottom: "51.19%",
    top: "45.75%",
  },
  allPosition1: {
    right: "51.72%",
    left: "0%",
    position: "absolute",
  },
  rectangle1: {
    height: "91.21%",
    width: "99.63%",
    right: "0.37%",
    bottom: "8.79%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 1,
    position: "absolute",
  },
  text: {
    left: 12,
  },
  text1: {
    left: 137,
  },
  like1Child: {
    height: "28.26%",
    width: "4.26%",
    top: "60.87%",
    right: "95.3%",
    bottom: "10.87%",
    left: "0.45%",
  },
  vectorIcon: {
    height: "80.43%",
    width: "5.28%",
    top: "9.78%",
    right: "94.72%",
    bottom: "9.78%",
    left: "0%",
  },
  like1: {
    top: 158,
    left: 7,
    width: 157,
  },
  pic1: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    left: "0%",
  },
  zoomIcon: {
    top: 8,
    left: 142,
    width: 10,
  },
  allPics: {
    left: "0%",
    right: "51.72%",
    position: "absolute",
  },
  groupIcon: {
    bottom: "51.19%",
    top: "45.75%",
  },
  allPics1: {
    left: "51.72%",
    bottom: "51.62%",
    top: "0.57%",
    width: "48.28%",
    height: "47.81%",
  },
  groupIcon1: {
    right: "7.14%",
    left: "90.51%",
    width: "2.35%",
    height: "3.06%",
    bottom: "51.19%",
    top: "45.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  allPics2: {
    top: "51.76%",
    bottom: "0.43%",
    left: "0%",
    width: "48.28%",
    height: "47.81%",
    right: "51.72%",
  },
  groupIcon2: {
    top: "96.94%",
    bottom: "0%",
  },
  skaterOnASeasideRoad: {
    left: 0,
    width: 156,
    height: 156,
    top: 0,
    position: "absolute",
  },
  seaCoastWithABridge: {
    top: 10,
    left: 178,
    width: 154,
    height: 140,
    position: "absolute",
  },
  womanCrossingARoadAtACro: {
    top: 184,
    left: 11,
    width: 140,
    height: 149,
    position: "absolute",
  },
  posts: {
    height: "41.43%",
    width: "87.26%",
    top: "24.88%",
    right: "6.33%",
    bottom: "33.68%",
    left: "6.41%",
    position: "absolute",
  },
});

export default Posts1;
