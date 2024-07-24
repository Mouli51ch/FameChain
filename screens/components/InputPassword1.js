import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const InputPassword1 = () => {
  return (
    <View style={styles.inputpassword}>
      <View style={styles.inputpassword1}>
        <View style={styles.inputBorder}>
          <Image
            style={[styles.image1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Text style={[styles.metamask, styles.metamaskTypo]}>MetaMask</Text>
        </View>
      </View>
      <View style={[styles.input1, styles.inputBorder]}>
        <Image
          style={[styles.image1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image21.png")}
        />
        <Text style={[styles.trustWallet, styles.metamaskTypo]}>
          Trust Wallet
        </Text>
      </View>
      <View style={[styles.input1, styles.inputBorder]}>
        <Image
          style={[styles.bxlinkAltIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bxlinkalt1.png")}
        />
        <Text style={[styles.enterEthereumAddress, styles.metamaskTypo]}>
          Enter Ethereum Address
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 32,
    width: 32,
    top: 8,
    position: "absolute",
  },
  metamaskTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.bodyMedium_size,
    left: "50%",
    top: 14,
    position: "absolute",
  },
  inputBorder: {
    height: 48,
    borderWidth: 1,
    borderColor: Color.greyscaleGrey70,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    alignSelf: "stretch",
  },
  image1Icon: {
    left: 22,
  },
  metamask: {
    marginLeft: -14,
  },
  inputpassword1: {
    width: 326,
  },
  trustWallet: {
    marginLeft: -19,
  },
  input1: {
    marginTop: 4,
  },
  bxlinkAltIcon: {
    left: 20,
    overflow: "hidden",
  },
  enterEthereumAddress: {
    marginLeft: -64,
  },
  inputpassword: {
    top: 450,
    left: 32,
    width: 326,
    position: "absolute",
  },
});

export default InputPassword1;
