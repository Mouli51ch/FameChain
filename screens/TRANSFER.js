import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import CARDS from "../components/CARDS";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TRANSFER = () => {
  return (
    <View style={styles.transfer}>
      <Text style={styles.famechain}>FameChain</Text>
      <Image
        style={styles.bottomScreenIcon}
        contentFit="cover"
        source={require("../assets/bottom-screen6.png")}
      />
      <Text style={[styles.transferToken, styles.addTypo1]}>
        TRANSFER TOKEN
      </Text>
      <LinearGradient
        style={[styles.ndCard, styles.cardBorder]}
        locations={[0, 1]}
        colors={["rgba(113, 69, 170, 0.6)", "rgba(59, 25, 139, 0.6)"]}
      />
      <View style={[styles.senderIngo, styles.senderIngoLayout]}>
        <View style={[styles.maskGroup, styles.maskGroupLayout]}>
          <LinearGradient
            style={[styles.rectangle, styles.maskGroupLayout]}
            locations={[0, 1]}
            colors={["#280e52", "#000"]}
          />
          <Image
            style={[styles.bayc1Icon, styles.maskGroupLayout]}
            contentFit="cover"
            source={require("../assets/bayc-12.png")}
          />
        </View>
        <View style={styles.frameParent}>
          <View style={styles.frameWrapper}>
            <View>
              <View style={styles.senderParent}>
                <Text style={[styles.sender, styles.senderTypo]}>SENDER</Text>
                <Image
                  style={styles.vuesaxlineararrowDownIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowdown1.png")}
                />
              </View>
              <Text style={styles.youTypo}>You</Text>
            </View>
          </View>
          <View style={styles.tokensParent}>
            <Text style={[styles.sender, styles.senderTypo]}>15 tokens</Text>
            <Text style={[styles.text, styles.textTypo1]}>≈ $15</Text>
          </View>
        </View>
      </View>
      <LinearGradient
        style={[styles.rdCard, styles.cardBorder]}
        locations={[0, 1]}
        colors={["rgba(59, 25, 139, 0.6)", "rgba(113, 69, 170, 0.6)"]}
      />
      <View style={[styles.recipientInfo, styles.senderIngoLayout]}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.recipient, styles.senderTypo]}>RECIPIENT</Text>
        <Image
          style={[styles.arrowDownIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
        <Text style={[styles.user159, styles.youTypo]}>User #159</Text>
        <Text style={[styles.text1, styles.textTypo1]}>≈ $15</Text>
      </View>
      <Image
        style={styles.exchangeButtonIcon}
        contentFit="cover"
        source={require("../assets/exchange-button1.png")}
      />
      <View style={styles.continue}>
        <View style={[styles.continue1, styles.buttonLayout]}>
          <View style={[styles.button, styles.buttonLayout]} />
          <Text style={[styles.add, styles.addTypo]}>CONTINUE</Text>
        </View>
        <View style={[styles.addedInfo, styles.addedInfoPosition]}>
          <Image
            style={[styles.rectangle12Icon, styles.addedInfoPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-121.png")}
          />
          <View style={[styles.parent, styles.parentLayout]}>
            <Text style={[styles.text2, styles.textTypo]}>$15</Text>
            <Text style={[styles.totalPayment, styles.parentLayout]}>
              Total payment
            </Text>
          </View>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text3, styles.textTypo]}>0%</Text>
            <Text style={[styles.swapFee, styles.rateTypo]}>Swap Fee</Text>
          </View>
          <View style={[styles.token1Parent, styles.rateLayout]}>
            <Text style={[styles.token1, styles.textTypo]}>1 token = $1</Text>
            <Text style={[styles.rate, styles.rateLayout]}>Rate</Text>
          </View>
          <Image
            style={styles.addedInfoChild}
            contentFit="cover"
            source={require("../assets/rectangle-91.png")}
          />
          <Text style={styles.iAgreeWithContainer}>
            <Text
              style={styles.iAgreeWith}
            >{`I agree with Reclaim Protocol `}</Text>
            <Text style={styles.termsAgreement}>{`Terms & Agreement`}</Text>
            <Text style={styles.iAgreeWith}> services.</Text>
          </Text>
        </View>
      </View>
      <CARDS
        pattern2={require("../assets/pattern-21.png")}
        eTHIconWhite={require("../assets/eth-icon-white1.png")}
        tokens="836 tokens"
        propTop={93}
        propHeight={150}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addTypo1: {
    textAlign: "center",
    color: Color.colorGray_1100,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    left: "50%",
    top: "50%",
  },
  cardBorder: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  senderIngoLayout: {
    height: 60,
    position: "absolute",
  },
  maskGroupLayout: {
    width: 60,
    top: 0,
    height: 60,
    position: "absolute",
  },
  senderTypo: {
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.bodyMedium_size,
    color: Color.white,
    textAlign: "left",
  },
  textTypo1: {
    color: Color.colorGray_400,
    letterSpacing: -0.2,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  youTypo: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: -0.2,
    fontSize: FontSize.h1_size,
    textAlign: "left",
  },
  buttonLayout: {
    height: 36,
    width: 155,
    position: "absolute",
  },
  addTypo: {
    fontSize: FontSize.h1_size,
    position: "absolute",
  },
  addedInfoPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  parentLayout: {
    height: 35,
    position: "absolute",
  },
  textTypo: {
    height: 30,
    textAlign: "right",
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.2,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout: {
    height: 75,
    position: "absolute",
  },
  rateTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorLavender_300,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    letterSpacing: -0.3,
    left: 0,
    top: 0,
    textAlign: "left",
  },
  rateLayout: {
    height: 37,
    position: "absolute",
  },
  famechain: {
    top: -11,
    fontSize: FontSize.size_base,
    letterSpacing: -0.8,
    lineHeight: 84,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 85,
    height: 38,
    textAlign: "left",
    left: 15,
    position: "absolute",
  },
  bottomScreenIcon: {
    top: 754,
    left: 3,
    width: 384,
    height: 84,
    position: "absolute",
  },
  transferToken: {
    marginTop: -144,
    marginLeft: -89,
    fontSize: FontSize.size_xl,
    textShadowColor: "rgba(205, 254, 2, 0.4)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    position: "absolute",
  },
  ndCard: {
    top: 321,
    height: 85,
    width: 361,
    borderColor: Color.colorBlueviolet,
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
    left: 15,
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_980xl,
    borderColor: Color.colorGray_300,
    opacity: 0.9,
    left: 0,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  bayc1Icon: {
    borderRadius: Border.br_81xl,
    left: 0,
  },
  maskGroup: {
    left: 0,
  },
  sender: {
    color: Color.white,
  },
  vuesaxlineararrowDownIcon: {
    width: 12,
    height: 12,
    marginLeft: 10,
  },
  senderParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    width: 80,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_3xs,
    marginTop: 1,
  },
  tokensParent: {
    width: 22,
    marginLeft: 152,
    alignItems: "flex-end",
  },
  frameParent: {
    top: 14,
    left: 71,
    width: 352,
    flexDirection: "row",
    position: "absolute",
  },
  senderIngo: {
    top: 334,
    left: 30,
    width: 423,
  },
  rdCard: {
    top: 422,
    height: 85,
    width: 361,
    borderColor: Color.colorBlueviolet,
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
    left: 15,
    position: "absolute",
  },
  maskGroupIcon: {
    left: 269,
  },
  recipient: {
    top: 17,
    left: 187,
    color: Color.white,
    position: "absolute",
  },
  arrowDownIcon: {
    height: "19.87%",
    width: "3.65%",
    top: "33.11%",
    right: "45.29%",
    bottom: "47.02%",
    left: "51.06%",
    position: "absolute",
  },
  user159: {
    top: 38,
    left: 198,
    position: "absolute",
  },
  text1: {
    top: 24,
    fontSize: FontSize.h1_size,
    position: "absolute",
    left: 0,
  },
  recipientInfo: {
    top: 435,
    left: 32,
    width: 329,
  },
  exchangeButtonIcon: {
    top: 390,
    left: 172,
    width: 45,
    height: 45,
    position: "absolute",
  },
  button: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorDimgray_400,
    borderColor: Color.colorLightsteelblue,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    width: 155,
  },
  add: {
    marginTop: -8,
    marginLeft: -32.5,
    textAlign: "center",
    color: Color.colorGray_1100,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    left: "50%",
    top: "50%",
  },
  continue1: {
    top: 173,
    left: 97,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangle12Icon: {
    height: "73.89%",
    bottom: "26.11%",
    borderRadius: Border.br_3xs,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text2: {
    top: 2,
    left: 247,
    width: 59,
    color: Color.colorLavender_300,
  },
  totalPayment: {
    fontSize: FontSize.size_smi_5,
    width: 84,
    color: Color.colorLavender_300,
    letterSpacing: -0.2,
    height: 35,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    left: 0,
    top: 0,
    textAlign: "left",
  },
  parent: {
    top: 83,
    width: 306,
    left: 12,
  },
  text3: {
    left: 287,
    width: 19,
    color: Color.colorLavender_300,
    top: 0,
  },
  swapFee: {
    width: 186,
    height: 75,
    position: "absolute",
  },
  group: {
    top: 48,
    width: 306,
    left: 12,
  },
  token1: {
    left: 210,
    color: Color.colorGray_1000,
    width: 96,
    top: 0,
  },
  rate: {
    width: 28,
    fontSize: FontSize.size_smi,
    color: Color.colorLavender_300,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    letterSpacing: -0.3,
    left: 0,
    top: 0,
    textAlign: "left",
  },
  token1Parent: {
    top: 11,
    width: 306,
    left: 12,
  },
  addedInfoChild: {
    top: 142,
    left: 2,
    borderRadius: Border.br_11xs,
    width: 10,
    height: 10,
    position: "absolute",
  },
  iAgreeWith: {
    color: Color.white,
  },
  termsAgreement: {
    color: Color.colorMediumpurple,
  },
  iAgreeWithContainer: {
    top: 137,
    left: 18,
    lineHeight: 20,
    width: 312,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.bodyMedium,
    textAlign: "left",
    position: "absolute",
  },
  addedInfo: {
    height: "75.12%",
    bottom: "24.88%",
  },
  continue: {
    top: 531,
    left: 29,
    width: 331,
    height: 209,
    position: "absolute",
  },
  transfer: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default TRANSFER;
