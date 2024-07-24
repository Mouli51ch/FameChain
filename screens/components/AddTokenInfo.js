import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddTokenInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addTokenInfo, styles.paymentLayout1]}>
      <View style={[styles.payment, styles.paymentLayout1]}>
        <Text style={[styles.amount, styles.amountTypo]}>Amount</Text>
        <Text style={[styles.currency, styles.amountTypo]}>Currency</Text>
        <Text style={[styles.paymentMethod, styles.amountTypo]}>
          Payment method
        </Text>
        <View style={styles.ethParent}>
          <Text style={[styles.eth, styles.ethTypo]}>ETH</Text>
          <Image
            style={[styles.vuesaxlineararrowDownIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/arrowdown.png")}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo1]}>0.02</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
        </View>
        <Text style={[styles.eth1, styles.ethTypo]}>ETH</Text>
        <View style={[styles.tokensParent, styles.parentLayout]}>
          <Text style={[styles.tokens, styles.tokensTypo]}>36 TOKENS</Text>
          <Text style={[styles.tokens1, styles.tokensTypo]}>Tokens</Text>
        </View>
        <View style={[styles.group, styles.parentLayout]}>
          <Text style={[styles.text1, styles.textTypo]}>$1,800</Text>
          <Text style={[styles.totalPayment, styles.textTypo]}>
            Total payment
          </Text>
        </View>
        <View style={[styles.container, styles.parentLayout]}>
          <Text style={[styles.text2, styles.textTypo]}>0%</Text>
          <Text style={[styles.depositFee, styles.textTypo]}>Deposit fee</Text>
        </View>
        <View style={[styles.eth1800Parent, styles.parentLayout]}>
          <Text style={[styles.eth1800, styles.tokensTypo1]}>
            1 ETH = $1,800
          </Text>
          <Text style={[styles.rate, styles.textTypo]}>Rate</Text>
        </View>
        <Image
          style={styles.rectangle10Icon}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
        <Text style={[styles.metamask, styles.metamaskTypo]}>Metamask</Text>
        <Text style={[styles.trustWallet, styles.image2IconPosition]}>
          Trust Wallet
        </Text>
        <Image
          style={[styles.paymentChild, styles.paymentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.paymentChild, styles.paymentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.paymentInner, styles.paymentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-91.png")}
        />
        <Text style={[styles.iAgreeWithContainer, styles.textTypo1]}>
          <Text
            style={styles.iAgreeWith}
          >{`I agree with Reclaim Protocol `}</Text>
          <Text style={styles.termsAgreement}>{`Terms & Agreement`}</Text>
          <Text style={styles.iAgreeWith}> services.</Text>
        </Text>
      </View>
      <Image
        style={[styles.rectangle8Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Image
        style={[styles.rectangle9Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-92.png")}
      />
      <Image
        style={styles.rectangle11Icon}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Image
        style={[styles.addTokenInfoChild, styles.addLayout]}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
      <Pressable
        style={[styles.continue, styles.buttonLayout]}
        onPress={() => navigation.navigate("Confirmed")}
      >
        <View style={[styles.button, styles.buttonLayout]} />
        <Text style={styles.continue1}>CONTINUE</Text>
      </Pressable>
      <Image
        style={[styles.addTokenInfoItem, styles.addLayout]}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
      <Image
        style={[styles.metamaskIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/metamask-2.png")}
      />
      <Image
        style={[styles.image2Icon, styles.image2IconPosition]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paymentLayout1: {
    width: 336,
    position: "absolute",
  },
  amountTypo: {
    color: Color.colorLavender_200,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    position: "absolute",
  },
  ethTypo: {
    width: 28,
    color: Color.colorLavender_100,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "right",
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    letterSpacing: -0.3,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.bodyMedium,
    textAlign: "left",
  },
  parentLayout: {
    width: 334,
    position: "absolute",
  },
  tokensTypo: {
    fontSize: FontSize.size_smi,
    letterSpacing: -0.3,
    top: 0,
  },
  textTypo: {
    color: Color.colorLavender_300,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    position: "absolute",
  },
  tokensTypo1: {
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    textAlign: "right",
    position: "absolute",
  },
  metamaskTypo: {
    width: 85,
    color: Color.white,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    letterSpacing: -0.3,
  },
  image2IconPosition: {
    top: 281,
    position: "absolute",
  },
  paymentLayout: {
    height: 14,
    width: 14,
    left: 301,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_3xs,
    height: "10.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  addLayout: {
    width: "95.24%",
    height: "0.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  buttonLayout: {
    height: 36,
    width: 155,
    position: "absolute",
  },
  amount: {
    left: 185,
    width: 150,
    textAlign: "right",
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    color: Color.colorLavender_200,
    top: 0,
  },
  currency: {
    width: 69,
    textAlign: "left",
    left: 2,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    color: Color.colorLavender_200,
    top: 0,
  },
  paymentMethod: {
    top: 189,
    width: 127,
    textAlign: "left",
    left: 2,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    color: Color.colorLavender_200,
  },
  eth: {
    left: 0,
    top: 0,
  },
  vuesaxlineararrowDownIcon: {
    height: "70.59%",
    width: "13.64%",
    top: "11.76%",
    bottom: "17.65%",
    left: "86.36%",
    right: "0%",
  },
  ethParent: {
    left: 18,
    width: 88,
    height: 17,
    top: 39,
    position: "absolute",
  },
  text: {
    color: Color.white,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: -0.3,
  },
  frameChild: {
    marginLeft: 1,
    height: 16,
    overflow: "hidden",
    maxWidth: "100%",
  },
  parent: {
    left: 154,
    width: 27,
    flexDirection: "row",
    alignItems: "flex-end",
    top: 39,
    position: "absolute",
  },
  eth1: {
    left: 292,
    top: 39,
  },
  tokens: {
    left: 226,
    width: 108,
    color: Color.white,
    textAlign: "right",
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    position: "absolute",
  },
  tokens1: {
    width: 52,
    textAlign: "left",
    color: Color.colorLavender_200,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    position: "absolute",
    left: 0,
  },
  tokensParent: {
    top: 95,
    height: 16,
    left: 0,
  },
  text1: {
    top: 1,
    left: 270,
    width: 64,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
  },
  totalPayment: {
    fontSize: FontSize.size_smi_5,
    width: 92,
    letterSpacing: -0.2,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  group: {
    top: 156,
    height: 15,
    left: 2,
  },
  text2: {
    left: 313,
    width: 21,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    top: 0,
  },
  depositFee: {
    width: 74,
    fontSize: FontSize.size_smi,
    letterSpacing: -0.3,
    top: 0,
    textAlign: "left",
    left: 0,
  },
  container: {
    top: 141,
    height: 16,
    left: 2,
  },
  eth1800: {
    left: 229,
    color: Color.colorGray_1000,
    width: 105,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    top: 0,
  },
  rate: {
    width: 30,
    fontSize: FontSize.size_smi,
    letterSpacing: -0.3,
    top: 0,
    textAlign: "left",
    left: 0,
  },
  eth1800Parent: {
    top: 125,
    height: 16,
    left: 2,
  },
  rectangle10Icon: {
    height: "11.92%",
    top: "63.95%",
    right: "0.6%",
    bottom: "24.13%",
    borderRadius: Border.br_16xl,
    width: "98.81%",
    left: "0.6%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  metamask: {
    top: 231,
    left: 57,
    position: "absolute",
  },
  trustWallet: {
    left: 58,
    width: 85,
    color: Color.white,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    letterSpacing: -0.3,
  },
  paymentChild: {
    top: 234,
  },
  paymentInner: {
    top: 283,
  },
  rectangleIcon: {
    top: 329,
    left: 8,
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
    top: 324,
    left: 24,
    lineHeight: 20,
    width: 312,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  payment: {
    height: 344,
    left: 0,
    top: 0,
  },
  rectangle8Icon: {
    width: "33.33%",
    top: "6.75%",
    right: "66.07%",
    bottom: "83%",
    left: "0.6%",
    borderRadius: Border.br_3xs,
  },
  rectangle9Icon: {
    width: "57.44%",
    top: "6.5%",
    bottom: "83.25%",
    left: "42.56%",
    right: "0%",
  },
  rectangle11Icon: {
    top: "67.5%",
    right: "0.3%",
    bottom: "22.25%",
    left: "0.89%",
    height: "10.25%",
    borderRadius: Border.br_16xl,
    width: "98.81%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  addTokenInfoChild: {
    top: "21.5%",
    right: "2.68%",
    bottom: "78.25%",
    left: "2.08%",
  },
  button: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorDimgray_400,
    borderStyle: "solid",
    borderColor: Color.colorLightsteelblue,
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  continue1: {
    marginTop: -8,
    marginLeft: -32.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.h1_size,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.h1,
    color: Color.colorGray_1100,
    textAlign: "center",
    position: "absolute",
  },
  continue: {
    top: 364,
    left: 90,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  addTokenInfoItem: {
    top: "45.25%",
    right: "2.08%",
    bottom: "54.5%",
    left: "2.68%",
  },
  metamaskIcon: {
    height: "5%",
    width: "5.95%",
    top: "57.75%",
    right: "86.9%",
    bottom: "37.25%",
    left: "7.14%",
  },
  image2Icon: {
    left: 26,
    width: 20,
    height: 20,
  },
  addTokenInfo: {
    top: 327,
    left: 28,
    height: 400,
  },
});

export default AddTokenInfo;
