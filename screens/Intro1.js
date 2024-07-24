import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Intro1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.intro2, styles.intro2Layout]}
      onPress={() => navigation.navigate("Intro2")}
    >
      <GroupComponent1 pattern={require("../assets/pattern2.png")} />
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
      <GroupComponent propTop={225} propElevation={74} />
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={["#361764", "#000"]}
        />
        <View style={styles.groupItem} />
        <Image
          style={[styles.patternIcon, styles.intro2Layout]}
          contentFit="cover"
          source={require("../assets/pattern3.png")}
        />
        <View style={styles.frameParent}>
          <View>
            <Text style={styles.privacyAndSecurity}>Privacy and Security</Text>
            <Text style={styles.experienceSecureAnd}>
              Experience Secure and Private Interactions!
            </Text>
          </View>
          <Text style={[styles.controlYourData, styles.controlYourDataTypo]}>
            Control Your Data
          </Text>
          <Text
            style={[styles.anonymousInteractions, styles.controlYourDataTypo]}
          >
            Anonymous Interactions
          </Text>
          <Text
            style={[styles.anonymousInteractions, styles.controlYourDataTypo]}
          >
            Blockchain Security
          </Text>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text style={[styles.transparentDataHandling, styles.rewardsTypo]}>
              Transparent Data Handling
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text style={[styles.decentralizedIdentity, styles.rewardsTypo]}>
              Decentralized Identity
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text style={[styles.seamlessDefiIntegration, styles.rewardsTypo]}>
              Seamless DeFi Integration
            </Text>
          </View>
          <View style={[styles.pricingRow3, styles.rewardsLayout]}>
            <Text style={[styles.rewards, styles.rewardsLayout]}>Rewards</Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text style={[styles.linkOptimization, styles.rewardsTypo]} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  intro2Layout: {
    overflow: "hidden",
    width: "100%",
  },
  purpleIconLayout1: {
    opacity: 0.75,
    height: 217,
    position: "absolute",
  },
  purpleIconPosition: {
    opacity: 0.6,
    position: "absolute",
  },
  purpleIconLayout: {
    borderRadius: Border.br_58xl,
    opacity: 0.6,
    position: "absolute",
  },
  controlYourDataTypo: {
    marginTop: 29,
    height: 23,
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    color: Color.white,
    lineHeight: 31,
    textAlign: "left",
  },
  pricingSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    marginTop: 29,
  },
  rewardsTypo: {
    height: 12,
    fontSize: FontSize.bodyMedium_size,
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    color: Color.white,
    textAlign: "left",
  },
  rewardsLayout: {
    width: 270,
    alignItems: "center",
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
  groupChild: {
    height: "99.03%",
    width: "99.51%",
    top: "0.1%",
    right: "0.23%",
    bottom: "0.87%",
    left: "0.26%",
    shadowColor: "rgba(78, 0, 191, 0.41)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 74,
    elevation: 74,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    position: "absolute",
  },
  groupItem: {
    height: "0.2%",
    width: "86.87%",
    top: "20.4%",
    right: "6.55%",
    bottom: "79.4%",
    left: "6.58%",
    borderStyle: "solid",
    borderColor: Color.colorPlum,
    borderTopWidth: 1,
    position: "absolute",
  },
  patternIcon: {
    height: "100%",
    top: "99.82%",
    right: "-100%",
    bottom: "-99.82%",
    left: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  privacyAndSecurity: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.white,
    lineHeight: 31,
    textAlign: "left",
  },
  experienceSecureAnd: {
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
  controlYourData: {
    width: 231,
  },
  anonymousInteractions: {
    width: 174,
  },
  transparentDataHandling: {
    width: 232,
    alignItems: "center",
  },
  pricingRow: {
    alignItems: "center",
  },
  decentralizedIdentity: {
    width: 194,
    alignItems: "center",
  },
  seamlessDefiIntegration: {
    width: 199,
    alignItems: "center",
  },
  rewards: {
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
  linkOptimization: {
    width: 143,
    alignItems: "center",
  },
  frameParent: {
    top: 21,
    left: 21,
    height: 477,
    width: 271,
    position: "absolute",
  },
  rectangleParent: {
    height: "59.82%",
    width: "79.1%",
    top: "93.07%",
    right: "9.82%",
    bottom: "-52.89%",
    left: "11.08%",
    opacity: 0,
    position: "absolute",
  },
  intro2: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
  },
});

export default Intro1;
