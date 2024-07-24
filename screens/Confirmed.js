import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import CARDS1 from "../components/CARDS1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Confirmed = () => {
  return (
    <View style={styles.confirmed}>
      <Text style={styles.famechain}>FameChain</Text>
      <Image
        style={styles.bottomScreenIcon}
        contentFit="cover"
        source={require("../assets/bottom-screen6.png")}
      />
      <LinearGradient
        style={styles.ndCard}
        locations={[0, 1]}
        colors={["#7145aa", "#000"]}
      />
      <Image
        style={styles.metamask2Icon}
        contentFit="cover"
        source={require("../assets/metamask-2.png")}
      />
      <Image
        style={styles.purpleCube2Icon}
        contentFit="cover"
        source={require("../assets/purplecube-2.png")}
      />
      <Image
        style={styles.purpleCube1Icon}
        contentFit="cover"
        source={require("../assets/purplecube1.png")}
      />
      <Text style={styles.addToken}>TOKENS ADDED</Text>
      <Image
        style={styles.tickIcon}
        contentFit="cover"
        source={require("../assets/tick.png")}
      />
      <CARDS1 tokens="836 tokens" />
    </View>
  );
};

const styles = StyleSheet.create({
  famechain: {
    top: -11,
    left: 15,
    fontSize: FontSize.size_base,
    letterSpacing: -0.8,
    lineHeight: 84,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    width: 85,
    height: 38,
    position: "absolute",
  },
  bottomScreenIcon: {
    top: 754,
    left: 3,
    width: 384,
    height: 84,
    position: "absolute",
  },
  ndCard: {
    top: 331,
    left: 39,
    borderRadius: 10000,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 310,
    height: 310,
    opacity: 0.9,
    backgroundColor: "transparent",
    position: "absolute",
  },
  metamask2Icon: {
    top: 314,
    left: 60,
    width: 264,
    height: 344,
    position: "absolute",
  },
  purpleCube2Icon: {
    top: 561,
    left: -116,
    width: 247,
    height: 246,
    position: "absolute",
  },
  purpleCube1Icon: {
    top: 228,
    left: 295,
    width: 210,
    height: 217,
    position: "absolute",
  },
  addToken: {
    marginTop: 256,
    marginLeft: -94,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.colorGray_1100,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    position: "absolute",
  },
  tickIcon: {
    top: 677,
    left: 266,
    width: 17,
    height: 17,
    position: "absolute",
  },
  confirmed: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Confirmed;
