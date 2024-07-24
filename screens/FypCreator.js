import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TCTF from "../components/TCTF";
import AllPics from "../components/AllPics";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FypCreator = () => {
  return (
    <View style={styles.fypCreator}>
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Text style={styles.famechain}>FameChain</Text>
      <TCTF />
      <Image
        style={styles.bottomScreenIcon}
        contentFit="cover"
        source={require("../assets/bottom-screen.png")}
      />
      <AllPics />
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    height: "2.09%",
    width: "4.56%",
    top: "2.13%",
    right: "7.49%",
    bottom: "95.78%",
    left: "87.95%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
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
  fypCreator: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default FypCreator;
