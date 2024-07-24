import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CARDS = ({ pattern2, eTHIconWhite, tokens, propTop, propHeight }) => {
  const cARDSStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propHeight]);

  return (
    <View style={[styles.cards, cARDSStyle]}>
      <View style={styles.topCard}>
        <LinearGradient
          style={[styles.topCardChild, styles.topCardPosition]}
          locations={[0, 0.64]}
          colors={["#4e0089", "#140023"]}
        />
        <Image
          style={styles.pattern2Icon}
          contentFit="cover"
          source={pattern2}
        />
        <View style={[styles.topCardItem, styles.topCardLayout]} />
        <LinearGradient
          style={[styles.topCardInner, styles.topCardPosition]}
          locations={[0, 1]}
          colors={["#140824", "#000"]}
        />
        <Text
          style={[styles.polygonZkevm, styles.polygonZkevmTypo]}
        >{`polygon zkEVM `}</Text>
        <Text style={[styles.securedBy, styles.securedByTypo]}>Secured by</Text>
        <Text style={[styles.reclaimProtocol, styles.securedByPosition]}>
          Reclaim Protocol
        </Text>
        <Image
          style={styles.ethIconWhite}
          contentFit="cover"
          source={eTHIconWhite}
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
  topCardPosition: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    left: 0,
    width: 334,
    position: "absolute",
  },
  topCardLayout: {
    borderWidth: 1,
    borderColor: Color.colorGray_400,
    borderRadius: Border.br_xs,
    top: 0,
    height: 175,
  },
  polygonZkevmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    fontSize: FontSize.bodyMedium_size,
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
  topCardChild: {
    borderWidth: 1,
    borderColor: Color.colorGray_400,
    borderRadius: Border.br_xs,
    top: 0,
    height: 175,
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
  topCardItem: {
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderRadius: Border.br_xs,
    left: 0,
    width: 334,
    position: "absolute",
  },
  topCardInner: {
    top: 131,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    borderColor: Color.white,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    height: 44,
  },
  polygonZkevm: {
    top: 17,
    left: 9,
    position: "absolute",
  },
  securedBy: {
    top: 5,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    color: Color.colorLightsteelblue_200,
    width: 54,
    height: 8,
    left: 210,
    position: "absolute",
  },
  reclaimProtocol: {
    top: 15,
    letterSpacing: -0.3,
    width: 112,
    height: 11,
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    fontSize: FontSize.bodyMedium_size,
    color: Color.white,
  },
  ethIconWhite: {
    top: 75,
    left: 74,
    width: 17,
    height: 26,
    position: "absolute",
  },
  tokens: {
    marginTop: -8.5,
    marginLeft: -64.85,
    top: "50%",
    fontSize: FontSize.size_7xl,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    width: 149,
    height: 17,
    color: Color.white,
    left: "50%",
  },
  x999999cf1046e68e36e1aa2e0e071: {
    marginLeft: -125.85,
    top: 144,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.greyscaleGrey50,
    width: 262,
    opacity: 0.8,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  topCard: {
    left: 0,
    top: 0,
    height: 175,
    width: 334,
    position: "absolute",
  },
  cards: {
    top: 97,
    left: 23,
    height: 175,
    width: 334,
    position: "absolute",
  },
});

export default CARDS;
