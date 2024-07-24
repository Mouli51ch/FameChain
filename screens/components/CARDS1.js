import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CARDS1 = ({ tokens }) => {
  return (
    <View style={styles.cards}>
      <LinearGradient
        style={styles.rdCard}
        locations={[0, 1]}
        colors={["rgba(113, 69, 170, 0.6)", "rgba(59, 25, 139, 0.6)"]}
      />
      <View style={styles.topCard}>
        <LinearGradient
          style={[styles.topCardChild, styles.topCardBorder]}
          locations={[0, 0.64]}
          colors={["#4e0089", "#140023"]}
        />
        <Image
          style={styles.pattern2Icon}
          contentFit="cover"
          source={require("../assets/pattern-21.png")}
        />
        <View style={styles.topCardBorder} />
        <LinearGradient
          style={styles.topCardInner}
          locations={[0, 1]}
          colors={["#140824", "#000"]}
        />
        <Text
          style={[styles.polygonZkevm, styles.tokensLayout]}
        >{`polygon zkEVM `}</Text>
        <Text style={[styles.securedBy, styles.securedByTypo]}>Secured by</Text>
        <Text style={[styles.reclaimProtocol, styles.securedByPosition]}>
          Reclaim Protocol
        </Text>
        <Image
          style={styles.ethIconWhite}
          contentFit="cover"
          source={require("../assets/eth-icon-white1.png")}
        />
        <Text style={[styles.tokens, styles.tokensPosition]}>{tokens}</Text>
        <Text
          style={[styles.x999999cf1046e68e36e1aa2e0e071, styles.tokensPosition]}
        >
          0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topCardBorder: {
    borderColor: Color.colorGray_400,
    left: 0,
    height: 150,
    width: 334,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
  tokensLayout: {
    height: 15,
    color: Color.white,
  },
  securedByTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  securedByPosition: {
    left: 210,
    position: "absolute",
  },
  tokensPosition: {
    left: "50%",
    position: "absolute",
  },
  rdCard: {
    left: 34,
    borderColor: Color.colorBlueviolet,
    width: 332,
    height: 151,
    transform: [
      {
        rotate: "9.5deg",
      },
    ],
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
  topCardChild: {
    backgroundColor: "transparent",
  },
  pattern2Icon: {
    height: "100%",
    width: "99.94%",
    top: "0%",
    right: "0.06%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  topCardInner: {
    top: 112,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    borderColor: Color.white,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    height: 38,
    left: 0,
    width: 334,
    backgroundColor: "transparent",
    borderStyle: "solid",
    position: "absolute",
  },
  polygonZkevm: {
    top: 15,
    left: 9,
    width: 103,
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    fontSize: FontSize.bodyMedium_size,
    height: 15,
    position: "absolute",
  },
  securedBy: {
    top: 4,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.colorLightsteelblue_200,
    width: 54,
    height: 7,
    left: 210,
    position: "absolute",
  },
  reclaimProtocol: {
    top: 13,
    letterSpacing: -0.3,
    width: 112,
    height: 9,
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    fontSize: FontSize.bodyMedium_size,
    color: Color.white,
    left: 210,
  },
  ethIconWhite: {
    top: 64,
    left: 74,
    width: 17,
    height: 22,
    position: "absolute",
  },
  tokens: {
    marginTop: -7.3,
    marginLeft: -64.85,
    top: "50%",
    fontSize: FontSize.size_7xl,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    width: 149,
    height: 15,
    color: Color.white,
  },
  x999999cf1046e68e36e1aa2e0e071: {
    marginLeft: -125.85,
    top: 123,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.greyscaleGrey50,
    width: 262,
    height: 17,
    opacity: 0.8,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  topCard: {
    top: 26,
    left: 13,
    height: 150,
    width: 334,
    position: "absolute",
  },
  cards: {
    top: 67,
    left: 10,
    width: 361,
    height: 202,
    position: "absolute",
  },
});

export default CARDS1;
