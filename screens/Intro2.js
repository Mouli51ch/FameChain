import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GroupComponent1 from "../components/GroupComponent1";
import TypeSecondary from "../components/TypeSecondary";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Intro2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.intro3}
      onPress={() => navigation.navigate("LoginOrSignUp")}
    >
      <GroupComponent1 pattern={require("../assets/pattern4.png")} />
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
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View>
            <Text style={styles.exclusiveContent}>Exclusive Content</Text>
            <Text style={styles.engageAndUnlock}>
              Engage and Unlock Exclusive Content!
            </Text>
          </View>
          <Text
            style={[
              styles.purchaseExclusiveTickets,
              styles.accessPremiumContentTypo,
            ]}
          >
            Purchase Exclusive Tickets
          </Text>
          <Text
            style={[
              styles.accessPremiumContent,
              styles.accessPremiumContentTypo,
            ]}
          >
            Access Premium Content
          </Text>
          <Text
            style={[
              styles.accessPremiumContent,
              styles.accessPremiumContentTypo,
            ]}
          >
            Earn Tokens
          </Text>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[
                styles.collectDigitalCollectibles,
                styles.joinFanClubsTypo,
              ]}
            >
              Collect Digital Collectibles
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text style={[styles.joinFanClubs, styles.joinFanClubsTypo]}>
              Join Fan Clubs
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[styles.ongoingExclusiveAccess, styles.joinFanClubsTypo]}
            >
              Ongoing Exclusive Access
            </Text>
          </View>
          <View style={[styles.pricingRow3, styles.pricingLayout]}>
            <Text style={[styles.tieredPricingOptions, styles.pricingLayout]}>
              Tiered Pricing Options
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text style={[styles.joinFanClubs, styles.joinFanClubsTypo]} />
          </View>
        </View>
        <View style={[styles.pricingCard, styles.frameParentLayout]}>
          <View style={styles.pricingCardChild} />
          <View style={[styles.pricingCardItem, styles.itemPosition]} />
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={["#361764", "#000"]}
        />
        <View style={[styles.groupItem, styles.itemPosition]} />
        <Image
          style={styles.patternIcon}
          contentFit="cover"
          source={require("../assets/pattern5.png")}
        />
        <View style={[styles.frameContainer, styles.frameLayout]}>
          <View>
            <Text style={styles.exclusiveContent}>Privacy and Security</Text>
            <Text style={styles.engageAndUnlock}>
              Experience Secure and Private Interactions!
            </Text>
          </View>
          <Text
            style={[
              styles.purchaseExclusiveTickets,
              styles.accessPremiumContentTypo,
            ]}
          >
            Control Your Data
          </Text>
          <Text
            style={[
              styles.accessPremiumContent,
              styles.accessPremiumContentTypo,
            ]}
          >
            Anonymous Interactions
          </Text>
          <Text
            style={[
              styles.accessPremiumContent,
              styles.accessPremiumContentTypo,
            ]}
          >
            Blockchain Security
          </Text>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[
                styles.collectDigitalCollectibles,
                styles.joinFanClubsTypo,
              ]}
            >
              Transparent Data Handling
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[styles.decentralizedIdentity, styles.joinFanClubsTypo]}
            >
              Decentralized Identity
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text
              style={[styles.ongoingExclusiveAccess, styles.joinFanClubsTypo]}
            >
              Seamless DeFi Integration
            </Text>
          </View>
          <View style={[styles.pricingRow3, styles.pricingLayout]}>
            <Text style={[styles.tieredPricingOptions, styles.pricingLayout]}>
              Rewards
            </Text>
          </View>
          <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
            <Text style={[styles.joinFanClubs, styles.joinFanClubsTypo]} />
          </View>
        </View>
      </View>
      <TypeSecondary
        iHaveAnAccount="I have an account"
        typeSecondaryPosition="absolute"
        typeSecondaryWidth={333}
        typeSecondaryMarginLeft={-167}
        typeSecondaryTop={865}
        typeSecondaryLeft="50%"
        typeSecondaryBackgroundColor="rgba(255, 255, 255, 0.1)"
        typeSecondaryBorderColor="rgba(255, 255, 255, 0.15)"
        typeSecondaryPaddingHorizontal="unset"
      />
      <TypeSecondary
        iHaveAnAccount="Get Started"
        typeSecondaryPosition="absolute"
        typeSecondaryWidth={333}
        typeSecondaryMarginLeft="unset"
        typeSecondaryTop={789}
        typeSecondaryLeft={28}
        typeSecondaryBackgroundColor="#381c66"
        typeSecondaryBorderColor="rgba(255, 255, 255, 0.5)"
        typeSecondaryPaddingHorizontal="unset"
        typeSecondaryElevation={25}
        typeSecondaryOpacity={0}
      />
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
  purpleIconLayout: {
    borderRadius: Border.br_58xl,
    opacity: 0.6,
    position: "absolute",
  },
  frameParentLayout: {
    height: 500,
    width: 307,
    position: "absolute",
  },
  frameLayout: {
    height: 477,
    width: 271,
    top: 20,
    position: "absolute",
  },
  accessPremiumContentTypo: {
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
  joinFanClubsTypo: {
    height: 12,
    fontSize: FontSize.bodyMedium_size,
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    color: Color.white,
    textAlign: "left",
  },
  pricingLayout: {
    width: 270,
    alignItems: "center",
  },
  itemPosition: {
    borderTopWidth: 1,
    height: "0.2%",
    borderStyle: "solid",
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
  exclusiveContent: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.white,
    lineHeight: 31,
    textAlign: "left",
  },
  engageAndUnlock: {
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
  purchaseExclusiveTickets: {
    width: 231,
  },
  accessPremiumContent: {
    width: 174,
  },
  collectDigitalCollectibles: {
    width: 232,
    alignItems: "center",
  },
  pricingRow: {
    alignItems: "center",
  },
  joinFanClubs: {
    width: 143,
    alignItems: "center",
  },
  ongoingExclusiveAccess: {
    width: 199,
    alignItems: "center",
  },
  tieredPricingOptions: {
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
  frameGroup: {
    left: 18,
  },
  pricingCardChild: {
    backgroundColor: Color.colorGray_500,
    borderColor: Color.colorGray_600,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  pricingCardItem: {
    width: "87.3%",
    top: "20.5%",
    right: "6.35%",
    bottom: "79.3%",
    left: "6.35%",
    borderColor: Color.colorGray_100,
  },
  pricingCard: {
    top: 0,
    left: 0,
  },
  frameParent: {
    top: -330,
    left: 44,
    opacity: 0,
  },
  groupChild: {
    height: "99.13%",
    width: "99.77%",
    top: "0.04%",
    right: "0.1%",
    bottom: "0.83%",
    left: "0.13%",
    shadowColor: "rgba(17, 12, 165, 0.41)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 74,
    elevation: 74,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupItem: {
    width: "87.1%",
    top: "20.36%",
    right: "6.43%",
    bottom: "79.44%",
    left: "6.47%",
    borderColor: Color.colorPlum,
  },
  patternIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  decentralizedIdentity: {
    width: 194,
    alignItems: "center",
  },
  frameContainer: {
    left: 20,
  },
  rectangleParent: {
    height: "59.76%",
    width: "78.9%",
    top: "26.64%",
    right: "9.92%",
    bottom: "13.6%",
    left: "11.18%",
    position: "absolute",
  },
  intro3: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Intro2;
