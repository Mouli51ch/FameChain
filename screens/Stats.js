import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Profile from "../components/Profile";
import Nft from "../components/Nft";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Stats = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.stats}>
      <Text style={styles.famechain}>FameChain</Text>
      <LinearGradient
        style={[styles.bckgrnd, styles.bckgrndBorder]}
        locations={[0, 0.73]}
        colors={["rgba(78, 78, 97, 0.2)", "rgba(160, 160, 199, 0)"]}
      />
      <View style={[styles.maskGroup, styles.maskGroupLayout]}>
        <LinearGradient
          style={[styles.rectangle, styles.rectanglePosition]}
          locations={[0, 1]}
          colors={["#381c66", "#381c66"]}
        />
        <Image
          style={[styles.bayc1Icon, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/bayc-11.png")}
        />
      </View>
      <Text style={styles.user4}>USER #4</Text>
      <Profile
        onCollectibleButtonPress={() => navigation.navigate("Activity")}
        onCollectibleButtonPress1={() => navigation.navigate("Posts")}
      />
      <View style={[styles.stats1, styles.stats1Layout]}>
        <View style={[styles.join3Livestreams33Parent, styles.stats1Layout]}>
          <Text
            style={[styles.join3LivestreamsContainer, styles.containerTypo1]}
          >
            <Text style={styles.join3Livestreams}>Join 3 Livestreams</Text>
            <Text style={styles.text}>{` `}</Text>
            <Text style={styles.join3Livestreams}>(3/3)</Text>
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-70.png")}
          />
          <Image
            style={[styles.followerIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/follower.png")}
          />
          <Text style={[styles.follow, styles.leadPosition]}>
            <Text style={styles.text2}>{`105 `}</Text>
            <Text style={styles.followers}>FOLLOWERS</Text>
          </Text>
          <Image
            style={[styles.userLoveIcon, styles.userIconLayout]}
            contentFit="cover"
            source={require("../assets/user-love.png")}
          />
          <Image
            style={[styles.leaderIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/follower.png")}
          />
          <Text style={[styles.lead, styles.leadPosition]}>
            <Text style={styles.text2}>{`4 `}</Text>
            <Text style={styles.followers}>LEADERBOARD</Text>
          </Text>
          <Image
            style={[styles.userLoveIcon1, styles.userIconLayout]}
            contentFit="cover"
            source={require("../assets/user-love1.png")}
          />
          <Image
            style={[styles.userLoveIcon2, styles.userIconPosition]}
            contentFit="cover"
            source={require("../assets/user-love2.png")}
          />
          <Image
            style={[styles.userLoveIcon3, styles.userIconPosition]}
            contentFit="cover"
            source={require("../assets/user-love2.png")}
          />
          <Image
            style={[styles.rectangle6Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/follower.png")}
          />
          <Text style={[styles.folloii, styles.folloiiPosition]}>
            <Text style={styles.text2}>{`605 `}</Text>
            <Text style={styles.followers}>FOLLOWING</Text>
          </Text>
          <Image
            style={[styles.userLoveIcon4, styles.userIconLayout]}
            contentFit="cover"
            source={require("../assets/user-love1.png")}
          />
          <Image
            style={[styles.rectangle5Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/follower.png")}
          />
          <Text style={[styles.tokSpent, styles.folloiiPosition]}>
            <Text style={styles.text2}>{`6000 `}</Text>
            <Text style={styles.followers}>TOKENS SPENT</Text>
          </Text>
          <Text style={[styles.dailyTasks, styles.dailyTasksTypo]}>
            Daily Tasks
          </Text>
          <Text style={[styles.collectibles, styles.dailyTasksTypo]}>
            Collectibles
          </Text>
          <Nft />
          <Image
            style={[styles.tokenIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/token.png")}
          />
          <View style={styles.adjustablePosition5} />
          <View
            style={[styles.adjustableProgressBar1, styles.adjustablePosition5]}
          />
          <Text style={[styles.like20PostsContainer, styles.containerTypo1]}>
            <Text style={styles.join3Livestreams}>Like 20 Posts</Text>
            <Text style={styles.text}>{` `}</Text>
            <Text style={styles.join3Livestreams}>(20/20)</Text>
          </Text>
          <Image
            style={[styles.groupItem, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-70.png")}
          />
          <View style={styles.adjustablePosition4} />
          <View
            style={[styles.adjustableProgressBar3, styles.adjustablePosition4]}
          />
          <Text style={[styles.voteOn50Container, styles.containerTypo1]}>
            <Text style={styles.text}>{`Vote on 50 Community Polls `}</Text>
            <Text style={styles.join3Livestreams}>(25/50)</Text>
          </Text>
          <Image
            style={[styles.groupInner, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-70.png")}
          />
          <View
            style={[styles.adjustableProgressBar4, styles.adjustablePosition3]}
          />
          <View
            style={[styles.adjustableProgressBar5, styles.adjustablePosition3]}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.share20PostsContainer, styles.containerTypo]}>
            <Text style={styles.text}>{`Share 20 Posts `}</Text>
            <Text style={styles.join3Livestreams}>(5/20)</Text>
          </Text>
          <Image
            style={[styles.ellipseIcon, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-70.png")}
          />
          <View
            style={[styles.adjustableProgressBar6, styles.adjustableBorder]}
          />
          <View
            style={[styles.adjustableProgressBar7, styles.adjustableBorder]}
          />
          <Text style={[styles.purchaseAnNftContainer, styles.containerTypo]}>
            <Text style={styles.text}>{`Purchase an NFT Collectible `}</Text>
            <Text style={styles.join3Livestreams}>(0/1)</Text>
          </Text>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-70.png")}
          />
          <View
            style={[styles.adjustableProgressBar8, styles.adjustableBorder]}
          />
        </View>
        <Image
          style={styles.rectangle7Icon}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </View>
      <Image
        style={styles.bottomScreenIcon}
        contentFit="cover"
        source={require("../assets/bottom-screen3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bckgrndBorder: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  maskGroupLayout: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  rectanglePosition: {
    left: 0,
    top: 0,
  },
  stats1Layout: {
    height: 688,
    width: 352,
    position: "absolute",
  },
  containerTypo1: {
    width: 280,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    left: 50,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  leadPosition: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    top: "50%",
    marginTop: -327.85,
    left: "50%",
    position: "absolute",
  },
  userIconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "51.14%",
    right: "0%",
  },
  userIconPosition: {
    opacity: 0.6,
    top: 8,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    bottom: "86.04%",
    top: "7.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    width: "48.86%",
    height: "6.4%",
    position: "absolute",
    overflow: "hidden",
  },
  folloiiPosition: {
    marginTop: -275.85,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  dailyTasksTypo: {
    width: 77,
    color: Color.colorGray_800,
    fontFamily: FontFamily.nunitoBold,
    lineHeight: 22,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  adjustablePosition5: {
    borderColor: Color.colorGray_600,
    borderRadius: 124,
    left: "14.2%",
    bottom: "71.94%",
    top: "27.19%",
    height: "0.87%",
    right: "5.4%",
    width: "80.4%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  adjustablePosition4: {
    bottom: "64.81%",
    top: "34.32%",
    borderColor: Color.colorGray_600,
    borderRadius: 124,
    left: "14.2%",
    right: "5.4%",
    width: "80.4%",
    height: "0.87%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  adjustablePosition3: {
    bottom: "57.1%",
    top: "42.02%",
    borderColor: Color.colorGray_600,
    borderRadius: 124,
    left: "14.2%",
    height: "0.87%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "5.68%",
    right: "89.57%",
    width: "4.74%",
    height: "1.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  containerTypo: {
    left: 51,
    width: 280,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  adjustableBorder: {
    left: "14.49%",
    borderColor: Color.colorGray_600,
    borderRadius: 124,
    height: "0.87%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  famechain: {
    top: -11,
    fontSize: FontSize.size_base,
    letterSpacing: -0.8,
    lineHeight: 84,
    width: 85,
    height: 38,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 15,
    position: "absolute",
  },
  bckgrnd: {
    marginLeft: -184,
    top: 72,
    borderRadius: Border.br_base,
    borderColor: Color.colorLightsteelblue_100,
    width: 367,
    height: 787,
    left: "50%",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    borderRadius: Border.br_980xl,
    borderColor: Color.colorGray_300,
    opacity: 0.9,
    height: 70,
    width: 70,
    position: "absolute",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  bayc1Icon: {
    borderRadius: Border.br_81xl,
    height: 70,
    width: 70,
    position: "absolute",
  },
  maskGroup: {
    top: 37,
    left: 160,
  },
  user4: {
    height: "3.2%",
    width: "15.64%",
    top: "13.63%",
    left: "42.05%",
    color: Color.colorGray_700,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  join3Livestreams: {
    color: Color.colorGray_900,
  },
  text: {
    color: Color.white,
  },
  join3LivestreamsContainer: {
    top: 166,
  },
  groupChild: {
    top: 170,
    left: 15,
    width: 25,
  },
  followerIcon: {
    borderRadius: Border.br_3xs,
    bottom: "93.6%",
    top: "0%",
    width: "48.86%",
    height: "6.4%",
    maxWidth: "100%",
    left: "0%",
    right: "51.14%",
  },
  text2: {
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.colorGray_1100,
  },
  followers: {
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.colorGray_400,
  },
  follow: {
    marginLeft: -120,
  },
  userLoveIcon: {
    left: 16,
    top: 7,
    height: 30,
    width: 30,
  },
  leaderIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    bottom: "93.6%",
    top: "0%",
    width: "48.86%",
    height: "6.4%",
  },
  lead: {
    marginLeft: 57,
  },
  userLoveIcon1: {
    left: 196,
    top: 7,
    height: 30,
    width: 30,
  },
  userLoveIcon2: {
    left: 204,
  },
  userLoveIcon3: {
    left: 192,
  },
  rectangle6Icon: {
    left: "0%",
    right: "51.14%",
  },
  folloii: {
    marginLeft: -123,
  },
  userLoveIcon4: {
    top: 59,
    left: 16,
  },
  rectangle5Icon: {
    left: "51.14%",
    right: "0%",
  },
  tokSpent: {
    marginLeft: 43,
  },
  dailyTasks: {
    top: 116,
    left: 5,
  },
  collectibles: {
    top: 439,
    left: 8,
  },
  tokenIcon: {
    height: "2.92%",
    width: "4.29%",
    top: "9.45%",
    right: "39.74%",
    bottom: "87.63%",
    left: "55.97%",
  },
  adjustableProgressBar1: {
    backgroundColor: Color.colorSlateblue_100,
  },
  like20PostsContainer: {
    top: 215,
  },
  groupItem: {
    top: 219,
    left: 15,
    width: 25,
  },
  adjustableProgressBar3: {
    backgroundColor: Color.colorSlateblue_100,
  },
  voteOn50Container: {
    top: 268,
  },
  groupInner: {
    top: 272,
    left: 15,
    width: 25,
  },
  adjustableProgressBar4: {
    right: "5.4%",
    width: "80.4%",
    bottom: "57.1%",
    top: "42.02%",
  },
  adjustableProgressBar5: {
    width: "40.2%",
    right: "45.6%",
    backgroundColor: Color.colorSlateblue_100,
  },
  vectorIcon: {
    top: "25.74%",
    bottom: "72.39%",
  },
  vectorIcon1: {
    top: "32.86%",
    bottom: "65.26%",
  },
  share20PostsContainer: {
    top: 321,
  },
  ellipseIcon: {
    top: 325,
    left: 16,
  },
  adjustableProgressBar6: {
    bottom: "49.4%",
    top: "49.73%",
    left: "14.49%",
    right: "5.11%",
    width: "80.4%",
  },
  adjustableProgressBar7: {
    width: "20.11%",
    right: "65.4%",
    bottom: "49.4%",
    top: "49.73%",
    left: "14.49%",
    backgroundColor: Color.colorSlateblue_100,
  },
  purchaseAnNftContainer: {
    top: 373,
  },
  groupChild1: {
    top: 377,
    left: 16,
  },
  adjustableProgressBar8: {
    top: "57.29%",
    bottom: "41.84%",
    right: "5.11%",
    width: "80.4%",
  },
  join3Livestreams33Parent: {
    left: 0,
    top: 0,
  },
  rectangle7Icon: {
    height: "41.73%",
    top: "20.94%",
    bottom: "37.33%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  stats1: {
    top: 214,
    left: 19,
  },
  bottomScreenIcon: {
    top: 754,
    left: 3,
    width: 384,
    height: 84,
    position: "absolute",
  },
  stats: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Stats;
