import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Fans = () => {
  return (
    <View style={styles.fans}>
      <Image
        style={[styles.cloneX3, styles.cloneChildLayout]}
        contentFit="cover"
        source={require("../assets/pfp-8.png")}
      />
      <Text style={[styles.user1, styles.userTypo1]}>User #1</Text>
      <Text style={[styles.user2, styles.userLayout]}>User #2</Text>
      <Text style={[styles.user3, styles.userTypo1]}>User #3</Text>
      <Text style={[styles.user4, styles.userTypo]}>User #4</Text>
      <Text style={[styles.user6, styles.userTypo]}>User #6</Text>
      <Text style={[styles.user5, styles.userTypo]}>User #5</Text>
      <Text style={[styles.user8, styles.userTypo]}>User #8</Text>
      <Image
        style={[styles.cloneX10, styles.cloneChildLayout]}
        contentFit="cover"
        source={require("../assets/pfp-2.png")}
      />
      <Image
        style={[styles.cloneX9, styles.cloneChildLayout]}
        contentFit="cover"
        source={require("../assets/pfp-3.png")}
      />
      <Image
        style={[styles.cloneX13, styles.cloneChildLayout]}
        contentFit="cover"
        source={require("../assets/pfp-4.png")}
      />
      <Image
        style={[styles.cloneX14, styles.cloneChildLayout]}
        contentFit="cover"
        source={require("../assets/pfp-5.png")}
      />
      <Image
        style={[styles.cloneX1, styles.cloneX1Position]}
        contentFit="cover"
        source={require("../assets/pfp-6.png")}
      />
      <View style={[styles.token, styles.tokenPosition2]}>
        <Text style={[styles.tokens, styles.tokensTypo]}>8000 tokens</Text>
        <Image
          style={[styles.ethPinkIcon, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink.png")}
        />
      </View>
      <View style={[styles.token1, styles.tokenPosition1]}>
        <Text style={[styles.tokens, styles.tokensTypo]}>6000 tokens</Text>
        <Image
          style={[styles.ethPinkIcon, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink1.png")}
        />
      </View>
      <View style={[styles.token2, styles.tokenPosition]}>
        <Text style={[styles.tokens, styles.tokensTypo]}>6000 tokens</Text>
        <Image
          style={[styles.ethPinkIcon, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink1.png")}
        />
      </View>
      <View style={[styles.token3, styles.tokenPosition]}>
        <Text style={[styles.tokens, styles.tokensTypo]}>6000 tokens</Text>
        <Image
          style={[styles.ethPinkIcon, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink1.png")}
        />
      </View>
      <View style={[styles.token4, styles.tokenPosition1]}>
        <Text style={[styles.tokens4, styles.tokensTypo]}>6010 tokens</Text>
        <Image
          style={[styles.ethPinkIcon4, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink1.png")}
        />
      </View>
      <View style={[styles.token4, styles.tokenPosition1]}>
        <Text style={[styles.tokens4, styles.tokensTypo]}>6010 tokens</Text>
        <Image
          style={[styles.ethPinkIcon4, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink1.png")}
        />
      </View>
      <View style={[styles.token6, styles.tokenPosition2]}>
        <Text style={[styles.tokens, styles.tokensTypo]}>6500 tokens</Text>
        <Image
          style={[styles.ethPinkIcon, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink1.png")}
        />
      </View>
      <View style={[styles.token7, styles.tokenPosition2]}>
        <Text style={[styles.tokens7, styles.tokensTypo]}>7800 tokens</Text>
        <Image
          style={[styles.ethPinkIcon, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink1.png")}
        />
      </View>
      <View style={[styles.token8, styles.tokenPosition2]}>
        <Text style={[styles.tokens7, styles.tokensTypo]}>7900 tokens</Text>
        <Image
          style={[styles.ethPinkIcon, styles.ethIconPosition]}
          contentFit="cover"
          source={require("../assets/eth-pink2.png")}
        />
      </View>
      <Image
        style={[styles.fansChild, styles.cloneChildLayout]}
        contentFit="cover"
        source={require("../assets/group-67.png")}
      />
      <Image
        style={[styles.fansItem, styles.cloneChildLayout]}
        contentFit="cover"
        source={require("../assets/group-64.png")}
      />
      <Image
        style={styles.cloneX1Position}
        contentFit="cover"
        source={require("../assets/group-87.png")}
      />
      <Image
        style={[styles.groupIcon, styles.fansChildLayout]}
        contentFit="cover"
        source={require("../assets/group-63.png")}
      />
      <Image
        style={[styles.fansChild1, styles.fansChildLayout]}
        contentFit="cover"
        source={require("../assets/group-63.png")}
      />
      <Image
        style={[styles.fansChild2, styles.fansChildLayout]}
        contentFit="cover"
        source={require("../assets/group-65.png")}
      />
      <Image
        style={[styles.fansChild3, styles.fansChildLayout]}
        contentFit="cover"
        source={require("../assets/group-66.png")}
      />
      <Text style={[styles.user7, styles.userTypo]}>User #7</Text>
      <Image
        style={[styles.fansChild4, styles.cloneChildLayout]}
        contentFit="cover"
        source={require("../assets/group-67.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cloneChildLayout: {
    height: 29,
    width: 30,
    left: 0,
    position: "absolute",
  },
  userTypo1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGreenyellow_100,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  userLayout: {
    width: 116,
    left: 42,
  },
  userTypo: {
    color: Color.colorGray_700,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  cloneX1Position: {
    top: 200,
    height: 29,
    width: 30,
    left: 0,
    position: "absolute",
  },
  tokenPosition2: {
    height: 16,
    left: "50%",
    top: "50%",
    marginLeft: 87,
    width: 66,
    position: "absolute",
  },
  tokensTypo: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 16,
    fontSize: FontSize.size_5xs,
    marginTop: -8,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    position: "absolute",
  },
  ethIconPosition: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "6.25%",
    top: "0%",
    height: "93.75%",
    position: "absolute",
  },
  tokenPosition1: {
    marginLeft: 88,
    height: 16,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tokenPosition: {
    marginLeft: 89,
    height: 16,
    width: 66,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  fansChildLayout: {
    height: 30,
    width: 30,
    left: 0,
    position: "absolute",
  },
  cloneX3: {
    borderRadius: Border.br_81xl,
    width: 30,
    left: 0,
    top: 0,
  },
  user1: {
    top: 4,
    width: 37,
    left: 42,
  },
  user2: {
    top: 44,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGreenyellow_100,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  user3: {
    top: 84,
    width: 60,
    left: 42,
  },
  user4: {
    top: 124,
    width: 116,
    left: 42,
  },
  user6: {
    top: 204,
    width: 116,
    left: 42,
  },
  user5: {
    top: 164,
    width: 116,
    left: 42,
  },
  user8: {
    top: 284,
    left: 46,
    width: 52,
  },
  cloneX10: {
    top: 40,
    borderRadius: Border.br_81xl,
    width: 30,
    left: 0,
  },
  cloneX9: {
    top: 80,
    borderRadius: Border.br_81xl,
    width: 30,
    left: 0,
  },
  cloneX13: {
    top: 120,
    borderRadius: Border.br_116xl_8,
    width: 30,
    left: 0,
  },
  cloneX14: {
    borderRadius: Border.br_116xl,
    top: 160,
    width: 30,
    left: 0,
  },
  cloneX1: {
    borderRadius: Border.br_203xl_5,
  },
  tokens: {
    marginLeft: -17,
  },
  ethPinkIcon: {
    width: "16.67%",
    right: "83.33%",
  },
  token: {
    marginTop: -148.5,
  },
  token1: {
    marginTop: -28.5,
    width: 66,
    marginLeft: 88,
  },
  token2: {
    marginTop: 91.5,
  },
  token3: {
    marginTop: 131.5,
  },
  tokens4: {
    marginLeft: -15.5,
  },
  ethPinkIcon4: {
    width: "16.92%",
    right: "83.08%",
  },
  token4: {
    marginTop: 51.5,
    width: 65,
  },
  token6: {
    marginTop: 11.5,
  },
  tokens7: {
    marginLeft: -16,
  },
  token7: {
    marginTop: -68.5,
  },
  token8: {
    marginTop: -108.5,
  },
  fansChild: {
    width: 30,
    left: 0,
    top: 0,
  },
  fansItem: {
    top: 41,
    width: 30,
    left: 0,
  },
  groupIcon: {
    top: 79,
  },
  fansChild1: {
    top: 279,
  },
  fansChild2: {
    top: 119,
  },
  fansChild3: {
    top: 160,
  },
  user7: {
    top: 244,
    width: 44,
    left: 42,
  },
  fansChild4: {
    top: 240,
    width: 30,
    left: 0,
  },
  fans: {
    top: 77,
    left: 19,
    width: 310,
    height: 309,
    position: "absolute",
  },
});

export default Fans;
