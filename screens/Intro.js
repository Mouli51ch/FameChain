import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Intro = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.intro1}
      onPress={() => navigation.navigate("Intro1")}
    >
      <Image
        style={[styles.purpleCubeIcon, styles.purpleIconLayout1]}
        contentFit="cover"
        source={require("../assets/purplecube2.png")}
      />
      <Text style={styles.heading3}>FameChain</Text>
      <Image
        style={[styles.purpleComposition23Icon, styles.purpleIconPosition]}
        contentFit="cover"
        source={require("../assets/purplecomposition2-31.png")}
      />
      <Image
        style={[styles.purpleComposition25Icon, styles.purpleIconPosition]}
        contentFit="cover"
        source={require("../assets/purplecomposition2-5.png")}
      />
      <Image
        style={[styles.purpleCubeIcon1, styles.purpleIconLayout1]}
        contentFit="cover"
        source={require("../assets/purplecube3.png")}
      />
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildPosition]}
          locations={[0, 1]}
          colors={["#010002", "#361764"]}
        />
        <View style={styles.groupItem} />
        <Image
          style={[styles.patternIcon, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/pattern1.png")}
        />
        <View style={styles.frameParent}>
          <View>
            <Text style={styles.connectWithCelebrities}>
              Connect with Celebrities
            </Text>
            <Text style={styles.connectWithYour}>
              Connect with Your Favourite Stars Instantly!
            </Text>
          </View>
          <Text style={styles.personalMeetAnd}>Personal Meet and Greets</Text>
          <Text style={styles.personalMeetAnd}>{`Live Q&A Session`}</Text>
          <Text style={styles.personalMeetAnd}>Personal Meet and Greets</Text>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[styles.realTimeInteractions, styles.messagesFromYourTypo]}
            >
              Real-Time Interactions
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[styles.exclusiveBtsTours, styles.messagesFromYourTypo]}
            >
              Exclusive BTS tours
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[styles.exclusiveBtsTours, styles.messagesFromYourTypo]}
            >
              Custom shout-outs
            </Text>
          </View>
          <View style={[styles.pricingRow3, styles.pricingRow3Layout]}>
            <Text style={[styles.messagesFromYour, styles.pricingRow3Layout]}>
              Messages from your favourite celebrities
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[styles.exclusiveBtsTours, styles.messagesFromYourTypo]}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.purpleComposition25Icon1, styles.purpleIconLayout]}
        contentFit="cover"
        source={require("../assets/purplecomposition2-51.png")}
      />
      <Image
        style={[styles.purpleComposition26Icon, styles.purpleIconLayout]}
        contentFit="cover"
        source={require("../assets/purplecomposition2-6.png")}
      />
      <GroupComponent />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  purpleIconLayout1: {
    opacity: 0.75,
    height: 217,
    position: "absolute",
  },
  purpleIconPosition: {
    opacity: 0.6,
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  pricingSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    marginTop: 29,
  },
  messagesFromYourTypo: {
    height: 12,
    fontSize: FontSize.bodyMedium_size,
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    color: Color.white,
    textAlign: "left",
  },
  pricingRow3Layout: {
    width: 270,
    alignItems: "center",
  },
  purpleIconLayout: {
    borderRadius: Border.br_58xl,
    opacity: 0.6,
    position: "absolute",
  },
  purpleCubeIcon: {
    top: -93,
    left: 302,
    width: 210,
  },
  heading3: {
    top: 44,
    left: 39,
    fontSize: FontSize.size_45xl,
    letterSpacing: -3.2,
    lineHeight: 84,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 330,
    height: 104,
    textAlign: "left",
    position: "absolute",
  },
  purpleComposition23Icon: {
    top: 117,
    left: 249,
    width: 64,
    height: 55,
  },
  purpleComposition25Icon: {
    top: -40,
    left: 114,
    borderRadius: Border.br_66xl,
    width: 95,
    height: 96,
  },
  purpleCubeIcon1: {
    top: 8,
    left: -141,
    width: 218,
  },
  groupChild: {
    height: "99.21%",
    bottom: "0.79%",
    shadowColor: "rgba(17, 12, 165, 0.51)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 74,
    elevation: 74,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
  },
  groupItem: {
    height: "0.2%",
    width: "87.3%",
    top: "20.34%",
    right: "6.35%",
    bottom: "79.46%",
    left: "6.35%",
    borderStyle: "solid",
    borderColor: Color.colorPlum,
    borderTopWidth: 1,
    position: "absolute",
  },
  patternIcon: {
    height: "100%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  connectWithCelebrities: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.white,
    lineHeight: 31,
    textAlign: "left",
  },
  connectWithYour: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_700,
    marginTop: 6,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    width: 271,
    textAlign: "left",
  },
  personalMeetAnd: {
    width: 174,
    height: 23,
    marginTop: 29,
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    color: Color.white,
    lineHeight: 31,
    textAlign: "left",
  },
  realTimeInteractions: {
    width: 212,
    alignItems: "center",
  },
  pricingRow: {
    alignItems: "center",
  },
  exclusiveBtsTours: {
    width: 143,
    alignItems: "center",
  },
  messagesFromYour: {
    height: 12,
    fontSize: FontSize.bodyMedium_size,
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    color: Color.white,
    textAlign: "left",
  },
  pricingRow3: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    marginTop: 29,
  },
  frameParent: {
    top: 20,
    left: 20,
    height: 477,
    width: 271,
    position: "absolute",
  },
  rectangleParent: {
    height: "59.72%",
    width: "78.72%",
    top: "26.66%",
    right: "10.51%",
    bottom: "13.63%",
    left: "10.77%",
    position: "absolute",
  },
  purpleComposition25Icon1: {
    top: 686,
    left: -152,
    width: 274,
    height: 210,
  },
  purpleComposition26Icon: {
    top: 737,
    left: 231,
    width: 215,
    height: 275,
  },
  intro1: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Intro;
