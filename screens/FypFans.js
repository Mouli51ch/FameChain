import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Top1 from "../components/Top1";
import CreatorList from "../components/CreatorList";
import Fans from "../components/Fans";
import Pic2 from "../components/Pic2";
import Pic1 from "../components/Pic1";
import Pic from "../components/Pic";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const FypFans = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fypFans}>
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Text style={styles.famechain}>FameChain</Text>
      <View style={[styles.tcTf, styles.tcTfPosition]}>
        <View style={[styles.tcTfDetails, styles.rectangle1Border]} />
        <Top1 onTFButtonCPress={() => navigation.navigate("FypCreator")} />
        <CreatorList />
        <Fans />
      </View>
      <Image
        style={styles.bottomScreenIcon}
        contentFit="cover"
        source={require("../assets/bottom-screen1.png")}
      />
      <View style={styles.allPics}>
        <Pic2 />
        <Pic1 />
        <Pic />
        <View style={[styles.pic1, styles.pic1Position]}>
          <View style={[styles.rectangle1, styles.pic1Position]} />
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
              style={[styles.vectorIcon, styles.pic1Position]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tcTfPosition: {
    width: 351,
    left: "50%",
    position: "absolute",
  },
  rectangle1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  pic1Position: {
    left: "0%",
    position: "absolute",
  },
  like1Layout: {
    height: 10,
    position: "absolute",
  },
  kTypo: {
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    position: "absolute",
  },
  searchIcon: {
    height: "2.09%",
    width: "4.56%",
    top: "2.13%",
    right: "7.49%",
    bottom: "95.78%",
    left: "87.95%",
    position: "absolute",
  },
  famechain: {
    top: -11,
    left: 15,
    fontSize: FontSize.size_base,
    letterSpacing: -0.8,
    lineHeight: 84,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 85,
    height: 38,
    textAlign: "left",
    position: "absolute",
  },
  tcTfDetails: {
    marginLeft: -175.5,
    top: 56,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorDimgray_200,
    borderColor: Color.colorLightsteelblue,
    height: 327,
    width: 351,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  tcTf: {
    marginLeft: -179,
    top: 471,
    height: 388,
  },
  bottomScreenIcon: {
    top: 754,
    left: 3,
    width: 384,
    height: 84,
    position: "absolute",
  },
  rectangle1: {
    height: "90.49%",
    right: "0%",
    bottom: "9.51%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    borderColor: Color.colorGray_600,
    top: "0%",
    left: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
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
    position: "absolute",
  },
  vectorIcon: {
    height: "80%",
    width: "25.35%",
    top: "10%",
    right: "74.65%",
    bottom: "10%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    top: "0%",
    left: "0%",
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
  fypFans: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default FypFans;
