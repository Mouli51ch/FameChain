import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CARDS1 from "../components/CARDS1";
import AddTokenInfo from "../components/AddTokenInfo";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AddToken = () => {
  return (
    <View style={styles.addToken}>
      <Image
        style={[styles.searchIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Text style={styles.famechain}>FameChain</Text>
      <View style={styles.ethereumMainnet}>
        <Image
          style={[styles.ethIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/eth.png")}
        />
        <View style={[styles.ethBg, styles.ethBgLayout]}>
          <View style={[styles.ethText, styles.bodyPosition]}>
            <View style={[styles.eth1st, styles.text1Position]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/link.png")}
              />
              <View style={styles.content}>
                <View style={styles.title}>
                  <Text style={[styles.link, styles.linkTypo]}>Link</Text>
                  <View style={styles.acronymSpaceBlock}>
                    <Text style={[styles.link, styles.linkTypo]}>(LINK)</Text>
                  </View>
                </View>
                <View style={styles.pairsIndex}>
                  <Text style={styles.textTypo1}>Pairs index:</Text>
                  <Text style={[styles.text, styles.textTypo1]}>58292</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.text1, styles.textTypo2]}>2,000,000,000</Text>
            <Image
              style={[styles.chartIcon, styles.chartIconLayout]}
              contentFit="cover"
              source={require("../assets/chart.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>15</Text>
            <Text style={[styles.text3, styles.textTypo]}>%</Text>
            <View style={[styles.body, styles.bodyPosition]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/rune.png")}
              />
              <View style={styles.content}>
                <View style={styles.title}>
                  <Text style={[styles.link, styles.linkTypo]}>RUNE</Text>
                  <View style={styles.acronymSpaceBlock}>
                    <Text style={[styles.link, styles.linkTypo]}>(RUNE)</Text>
                  </View>
                </View>
                <View style={styles.pairsIndex2}>
                  <Text style={styles.textTypo1}>Pairs index:</Text>
                  <View style={styles.view}>
                    <Text style={styles.text5}>/</Text>
                  </View>
                  <Text style={[styles.text, styles.textTypo1]}>92</Text>
                </View>
              </View>
            </View>
            <View style={styles.text7}>
              <Text style={styles.textTypo2}>12,000,000</Text>
            </View>
            <View style={styles.amount}>
              <Image
                style={styles.chartIconLayout}
                contentFit="cover"
                source={require("../assets/chart1.png")}
              />
              <View style={[styles.percent, styles.acronymSpaceBlock]}>
                <Text style={styles.textTypo}>40</Text>
                <Text style={styles.textTypo}>%</Text>
              </View>
            </View>
            <Image
              style={[styles.ethTextChild, styles.ethLayout]}
              contentFit="cover"
              source={require("../assets/line-7.png")}
            />
            <Image
              style={[styles.ethTextItem, styles.ethLayout]}
              contentFit="cover"
              source={require("../assets/line-8.png")}
            />
            <Image
              style={[styles.ethTextInner, styles.ethLayout]}
              contentFit="cover"
              source={require("../assets/line-8.png")}
            />
            <Image
              style={[styles.lineIcon, styles.ethLayout]}
              contentFit="cover"
              source={require("../assets/line-8.png")}
            />
            <Text style={[styles.tokensLocked, styles.tokenNameTypo]}>
              Tokens Locked
            </Text>
            <Text style={[styles.tokenName, styles.tokenNameTypo]}>
              Token Name
            </Text>
            <Image
              style={[styles.beefyFinanceBifiLogo1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/beefyfinancebifilogo-11.png")}
            />
            <Text style={[styles.text11, styles.bifiTypo]}>Beefy.finance</Text>
            <Text style={[styles.bifi, styles.bifiTypo]}>(BIFI)</Text>
            <Text style={[styles.pairsIndex4, styles.text12Position]}>
              Pairs index:
            </Text>
            <Text style={[styles.text12, styles.text12Position]}>223</Text>
            <View style={styles.text13}>
              <Text style={styles.textTypo2}>6,000,000</Text>
            </View>
            <Image
              style={[styles.ellipseIcon, styles.chartIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-38.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.chartIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-39.png")}
            />
            <Text style={[styles.text15, styles.textPosition]}>10</Text>
            <Text style={[styles.text16, styles.textPosition]}>%</Text>
            <Text style={[styles.text17, styles.linkTypo]}>View All</Text>
            <Image
              style={[styles.vectorIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
        <Text style={[styles.ethereumMainnet1, styles.maticChain1Typo]}>
          Ethereum Mainnet
        </Text>
        <Text style={[styles.tokens, styles.tokensTypo]}>(135 Tokens)</Text>
      </View>
      <Text style={styles.addToken1}>ADD TOKEN</Text>
      <Image
        style={[styles.purpleCube2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/purplecube-21.png")}
      />
      <Image
        style={[styles.purpleCube1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/purplecube-1.png")}
      />
      <CARDS1 tokens="800 tokens" />
      <Image
        style={[styles.bottomScreenIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/bottom-screen7.png")}
      />
      <LinearGradient
        style={styles.ndCard}
        locations={[0, 1]}
        colors={["rgba(113, 69, 170, 0.6)", "rgba(59, 25, 139, 0.6)"]}
      />
      <AddTokenInfo />
      <View style={styles.maticChain}>
        <Image
          style={styles.maticIcon}
          contentFit="cover"
          source={require("../assets/matic-icon.png")}
        />
        <Text style={[styles.maticChain1, styles.tokens1Position]}>
          Matic Chain
        </Text>
        <Text style={[styles.tokens1, styles.tokens1Position]}>
          (111 Tokens)
        </Text>
        <View style={[styles.maticBg, styles.ethBgLayout]} />
        <Text style={[styles.tokensLocked1, styles.tokenName1Typo]}>
          Tokens Locked
        </Text>
        <Text style={[styles.tokenName1, styles.tokenName1Typo]}>
          Token Name
        </Text>
      </View>
      <Image
        style={[styles.tickIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/tick1.png")}
      />
      <Image
        style={[styles.tickIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/tick2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 32,
    width: 32,
    overflow: "hidden",
  },
  ethBgLayout: {
    height: 303,
    borderColor: Color.colorLightsteelblue,
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
    left: "50%",
    marginLeft: -180.5,
    borderWidth: 1,
    borderStyle: "solid",
    width: 361,
    position: "absolute",
    overflow: "hidden",
  },
  bodyPosition: {
    top: "50%",
    position: "absolute",
  },
  text1Position: {
    marginTop: -93,
    top: "50%",
    position: "absolute",
  },
  linkTypo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
  },
  textTypo1: {
    color: Color.gray8,
    lineHeight: 16,
    fontFamily: FontFamily.captionSmall1216Regular,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  textTypo2: {
    fontFamily: FontFamily.captionSmall1216Regular,
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  chartIconLayout: {
    height: 16,
    width: 16,
  },
  textTypo: {
    color: Color.colorGreenyellow,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 16,
    textAlign: "left",
  },
  acronymSpaceBlock: {
    marginLeft: 4,
    flexDirection: "row",
  },
  ethLayout: {
    height: 0,
    width: "99.07%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tokenNameTypo: {
    display: "flex",
    lineHeight: 19,
    color: Color.colorGray_1100,
    top: "0%",
    fontSize: FontSize.h1_size,
    fontFamily: FontFamily.nunitoBold,
    alignItems: "center",
    fontWeight: "700",
    position: "absolute",
  },
  bifiTypo: {
    marginTop: 45,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.nunitoBold,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    top: "50%",
    fontWeight: "700",
    position: "absolute",
  },
  text12Position: {
    marginTop: 69,
    color: Color.gray8,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 16,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    marginTop: 64,
    color: Color.colorGreenyellow,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 16,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  maticChain1Typo: {
    width: 123,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.bodyMedium_size,
    color: Color.white,
  },
  tokensTypo: {
    left: 275,
    color: Color.gray8,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
  },
  iconPosition: {
    opacity: 0,
    position: "absolute",
  },
  iconPosition1: {
    left: 3,
    position: "absolute",
  },
  tokens1Position: {
    top: 1,
    textAlign: "left",
    position: "absolute",
  },
  tokenName1Typo: {
    top: "16.42%",
    display: "flex",
    color: Color.colorGray_1100,
    lineHeight: 19,
    fontSize: FontSize.h1_size,
    fontFamily: FontFamily.nunitoBold,
    alignItems: "center",
    fontWeight: "700",
    position: "absolute",
  },
  searchIcon: {
    height: "2.09%",
    width: "4.56%",
    top: "2.13%",
    right: "7.49%",
    bottom: "95.78%",
    left: "87.95%",
  },
  famechain: {
    top: -11,
    fontSize: FontSize.size_base,
    letterSpacing: -0.8,
    lineHeight: 84,
    fontFamily: FontFamily.interBold,
    width: 85,
    height: 38,
    textAlign: "left",
    fontWeight: "700",
    left: 15,
    position: "absolute",
  },
  ethIcon: {
    top: 0,
    left: 3,
    position: "absolute",
  },
  link: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    marginLeft: 2,
  },
  pairsIndex: {
    width: 179,
    flexDirection: "row",
  },
  content: {
    marginLeft: 8,
  },
  eth1st: {
    left: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    left: 255,
    marginTop: -93,
    top: "50%",
    position: "absolute",
  },
  chartIcon: {
    top: 68,
    left: 284,
    position: "absolute",
  },
  text2: {
    left: 304,
    marginTop: -69,
    color: Color.colorGreenyellow,
    fontSize: FontSize.size_5xs,
    top: "50%",
    position: "absolute",
  },
  text3: {
    left: 314,
    marginTop: -69,
    color: Color.colorGreenyellow,
    fontSize: FontSize.size_5xs,
    top: "50%",
    position: "absolute",
  },
  text5: {
    fontSize: FontSize.h1_size,
    color: Color.gray8,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 16,
    textAlign: "center",
  },
  view: {
    display: "none",
    marginLeft: 2,
  },
  pairsIndex2: {
    flexDirection: "row",
  },
  body: {
    marginTop: -24,
    left: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  text7: {
    top: 113,
    left: 265,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  percent: {
    alignItems: "center",
  },
  amount: {
    top: 137,
    left: 280,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  ethTextChild: {
    top: "11.31%",
    left: "0.93%",
    right: "0%",
    height: 0,
    width: "99.07%",
  },
  ethTextItem: {
    top: "36.5%",
    left: "0.93%",
    right: "0%",
    height: 0,
    width: "99.07%",
  },
  ethTextInner: {
    top: "61.68%",
    left: "0.93%",
    right: "0%",
    height: 0,
    width: "99.07%",
  },
  lineIcon: {
    top: "86.86%",
    right: "0.93%",
    left: "0%",
    height: 0,
    width: "99.07%",
  },
  tokensLocked: {
    width: "43.65%",
    left: "56.35%",
    textAlign: "right",
  },
  tokenName: {
    width: "45.2%",
    left: "0.93%",
    textAlign: "left",
  },
  beefyFinanceBifiLogo1Icon: {
    height: "8.14%",
    width: "9.07%",
    top: "69.82%",
    right: "88.05%",
    bottom: "22.04%",
    left: "2.88%",
  },
  text11: {
    left: 48,
  },
  bifi: {
    left: 114,
  },
  pairsIndex4: {
    left: 48,
  },
  text12: {
    left: 102,
  },
  text13: {
    top: 177,
    left: 273,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  ellipseIcon: {
    top: 201,
    left: 282,
    position: "absolute",
  },
  text15: {
    left: 302,
  },
  text16: {
    left: 312,
  },
  text17: {
    top: 250,
    left: 138,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.3%",
    width: "0.99%",
    top: "94.27%",
    right: "38.05%",
    bottom: "3.43%",
    left: "60.96%",
  },
  ethText: {
    marginTop: -133.5,
    left: 12,
    width: 323,
    height: 274,
  },
  ethBg: {
    top: 40,
  },
  ethereumMainnet1: {
    top: 5,
    left: 32,
    textAlign: "left",
    position: "absolute",
  },
  tokens: {
    top: 4,
    textAlign: "left",
    position: "absolute",
  },
  ethereumMainnet: {
    top: 784,
    left: 16,
    height: 343,
    width: 361,
    position: "absolute",
  },
  addToken1: {
    marginTop: -144,
    marginLeft: -58,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    textShadowColor: "rgba(205, 254, 2, 0.4)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorGray_1100,
    lineHeight: 16,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  purpleCube2Icon: {
    top: 74,
    left: 262,
    width: 247,
    height: 246,
  },
  purpleCube1Icon: {
    top: 609,
    left: -68,
    width: 210,
    height: 217,
  },
  bottomScreenIcon: {
    top: 754,
    width: 384,
    height: 84,
  },
  ndCard: {
    top: 310,
    borderRadius: Border.br_xs,
    borderColor: Color.colorBlueviolet,
    height: 444,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    width: 361,
    left: 15,
    position: "absolute",
  },
  maticIcon: {
    height: "6.89%",
    width: "7.4%",
    right: "91.69%",
    bottom: "93.11%",
    left: "0.91%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maticChain1: {
    left: 36,
    width: 123,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.bodyMedium_size,
    color: Color.white,
  },
  tokens1: {
    left: 275,
    color: Color.gray8,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
  },
  maticBg: {
    top: 38,
  },
  tokensLocked1: {
    width: "39.06%",
    left: "53.74%",
    textAlign: "right",
  },
  tokenName1: {
    width: "40.44%",
    left: "4.16%",
    textAlign: "left",
  },
  maticChain: {
    height: "40.4%",
    width: "92.56%",
    top: "125%",
    right: "3.33%",
    bottom: "-65.4%",
    left: "4.1%",
    position: "absolute",
  },
  tickIcon: {
    top: 278,
    left: 260,
    width: 17,
    height: 17,
  },
  tickIcon1: {
    height: "0.83%",
    width: "2.05%",
    top: "77.96%",
    right: "88.46%",
    bottom: "21.21%",
    left: "9.49%",
  },
  addToken: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AddToken;
