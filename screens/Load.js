import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Nfts from "../components/Nfts";
import Poll from "../components/Poll";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const Load = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.load} onPress={() => navigation.navigate("Home")}>
      <Image
        style={[styles.searchIcon, styles.liveItemLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Text style={styles.famechain}>FameChain</Text>
      <Image
        style={styles.infinityLoopIcon}
        contentFit="cover"
        source={require("../assets/infinity-loop.png")}
      />
      <Image
        style={[styles.bottomScreenIcon, styles.livePosition]}
        contentFit="cover"
        source={require("../assets/bottom-screen8.png")}
      />
      <Nfts
        image={require("../assets/image2.png")}
        image1={require("../assets/image11.png")}
        ellipse69={require("../assets/ellipse-692.png")}
        ellipse691={require("../assets/ellipse-692.png")}
        groupViewLeft={-15}
        groupViewOpacity={0}
      />
      <Poll
        frame105={require("../assets/frame-105.png")}
        group64={require("../assets/group-641.png")}
        opt1ColorTop={345}
        pollMarginLeft={-184}
        pollOpacity={0}
      />
      <View style={[styles.live, styles.livePosition]}>
        <View style={styles.liveChild} />
        <Image
          style={[styles.livestram11, styles.live21Layout]}
          contentFit="cover"
          source={require("../assets/livestram-1-1.png")}
        />
        <LinearGradient
          style={[styles.liveWrapper, styles.liveBorder]}
          locations={[0, 1]}
          colors={["rgba(207, 216, 230, 0.1)", "rgba(207, 216, 230, 0)"]}
        >
          <Text style={styles.live1}>LIVE</Text>
        </LinearGradient>
        <Image
          style={[styles.live21, styles.live21Layout]}
          contentFit="cover"
          source={require("../assets/live-2-1.png")}
        />
        <LinearGradient
          style={[styles.liveContainer, styles.liveBorder]}
          locations={[0, 1]}
          colors={["rgba(207, 216, 230, 0.1)", "rgba(207, 216, 230, 0)"]}
        >
          <Text style={styles.live1}>LIVE</Text>
        </LinearGradient>
        <Image
          style={[styles.liveItem, styles.liveItemLayout]}
          contentFit="cover"
          source={require("../assets/group-651.png")}
        />
        <View style={[styles.liveInner, styles.liveInnerShadowBox]} />
        <Image
          style={styles.live31}
          contentFit="cover"
          source={require("../assets/live-3-1.png")}
        />
        <LinearGradient
          style={[styles.liveFrame, styles.liveBorder]}
          locations={[0, 1]}
          colors={["rgba(207, 216, 230, 0.1)", "rgba(207, 216, 230, 0)"]}
        >
          <Text style={styles.live1}>LIVE</Text>
        </LinearGradient>
        <View style={[styles.rectangleView, styles.liveInnerShadowBox]} />
        <Image
          style={[styles.ellipseIcon, styles.liveChild1Layout]}
          contentFit="cover"
          source={require("../assets/group-651.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.liveChild1Layout]}
          contentFit="cover"
          source={require("../assets/group-651.png")}
        />
        <Image
          style={[styles.liveChild1, styles.liveChild1Layout]}
          contentFit="cover"
          source={require("../assets/group-651.png")}
        />
        <Image
          style={[styles.liveChild1, styles.liveChild1Layout]}
          contentFit="cover"
          source={require("../assets/group-651.png")}
        />
        <Text style={[styles.username, styles.usernameTypo]}>username</Text>
        <Text style={[styles.username1, styles.usernameTypo]}>username</Text>
        <Text style={[styles.username2, styles.usernameTypo]}>username</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  liveItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  livePosition: {
    opacity: 0,
    position: "absolute",
  },
  live21Layout: {
    bottom: "1.69%",
    borderRadius: Border.br_21xl,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  liveBorder: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_81xl,
    top: "7.71%",
    width: "9.44%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  liveInnerShadowBox: {
    bottom: "0.82%",
    top: "0%",
    borderWidth: 1,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_21xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(11, 21, 126, 0.6)",
    width: "31.46%",
    height: "99.18%",
    position: "absolute",
  },
  liveChild1Layout: {
    height: 13,
    width: 13,
    top: 18,
    position: "absolute",
  },
  usernameTypo: {
    color: Color.colorGray_700,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  searchIcon: {
    height: "2.09%",
    width: "4.56%",
    top: "-0.12%",
    right: "8.51%",
    bottom: "98.03%",
    left: "86.92%",
  },
  famechain: {
    top: -30,
    left: 20,
    fontSize: FontSize.size_base,
    letterSpacing: -0.8,
    lineHeight: 84,
    width: 85,
    height: 38,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  infinityLoopIcon: {
    top: 344,
    left: 107,
    width: 177,
    height: 157,
    position: "absolute",
  },
  bottomScreenIcon: {
    top: 797,
    left: 3,
    width: 384,
    height: 84,
  },
  liveChild: {
    top: "0.82%",
    right: "34.27%",
    bottom: "0%",
    left: "34.27%",
    borderWidth: 1,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_500,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(11, 21, 126, 0.6)",
    width: "31.46%",
    height: "99.18%",
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  livestram11: {
    height: "95.9%",
    width: "29.89%",
    top: "2.41%",
    right: "35.06%",
    left: "35.06%",
  },
  live1: {
    fontSize: FontSize.size_2xs,
    lineHeight: 32,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorMaroon,
    textAlign: "left",
  },
  liveWrapper: {
    right: "36.85%",
    left: "53.71%",
    bottom: "85.69%",
    height: "6.6%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_81xl,
    top: "7.71%",
    width: "9.44%",
  },
  live21: {
    height: "97.35%",
    width: "30.56%",
    top: "0.96%",
    right: "68.99%",
    left: "0.45%",
    opacity: 0.9,
  },
  liveContainer: {
    height: "6.84%",
    right: "70.79%",
    bottom: "85.45%",
    left: "19.78%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_81xl,
    top: "7.71%",
    width: "9.44%",
  },
  liveItem: {
    height: "6.27%",
    width: "2.92%",
    right: "60.45%",
    bottom: "85.06%",
    left: "36.63%",
    top: "8.67%",
  },
  liveInner: {
    right: "0%",
    left: "68.54%",
  },
  live31: {
    top: 2,
    left: 307,
    width: 133,
    height: 202,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  liveFrame: {
    right: "2.47%",
    left: "88.09%",
    bottom: "85.69%",
    height: "6.6%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_81xl,
    top: "7.71%",
    width: "9.44%",
  },
  rectangleView: {
    right: "68.54%",
    left: "0%",
  },
  ellipseIcon: {
    left: 317,
  },
  liveChild1: {
    left: 10,
  },
  username: {
    left: 26,
    top: 18,
    color: Color.colorGray_700,
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
  },
  username1: {
    left: "40%",
    top: "8.67%",
  },
  username2: {
    left: "75.28%",
    top: "8.67%",
  },
  live: {
    height: "24.59%",
    width: "114.1%",
    top: "63.74%",
    right: "-1.28%",
    bottom: "11.67%",
    left: "-12.82%",
  },
  load: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Load;
