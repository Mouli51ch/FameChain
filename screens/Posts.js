import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Profile from "../components/Profile";
import Posts1 from "../components/Posts1";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Posts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.posts}>
      <Text style={[styles.famechain, styles.user4Typo]}>FameChain</Text>
      <LinearGradient
        style={[styles.pollBg, styles.pollBgBorder]}
        locations={[0, 1]}
        colors={["rgba(78, 78, 97, 0.2)", "rgba(160, 160, 199, 0)"]}
      />
      <View style={styles.maskGroup}>
        <LinearGradient
          style={[styles.rectangle, styles.rectanglePosition]}
          locations={[0, 1]}
          colors={["#381c66", "#381c66"]}
        />
        <Image
          style={[styles.bayc1Icon, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/bayc-11.png")}
        />
      </View>
      <Text style={[styles.user4, styles.user4Typo]}>USER #4</Text>
      <Profile
        onCollectibleButtonPress={() => navigation.navigate("Activity")}
        onCollectibleButtonPress1={() => navigation.navigate("Stats")}
      />
      <Image
        style={styles.bottomScreenIcon}
        contentFit="cover"
        source={require("../assets/bottom-screen4.png")}
      />
      <Posts1 />
    </View>
  );
};

const styles = StyleSheet.create({
  user4Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  pollBgBorder: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectanglePosition: {
    left: 0,
    top: 0,
    height: 70,
    width: 70,
    position: "absolute",
  },
  famechain: {
    top: -11,
    left: 15,
    fontSize: FontSize.size_base,
    letterSpacing: -0.8,
    lineHeight: 84,
    width: 85,
    height: 38,
  },
  pollBg: {
    marginLeft: -184,
    top: 72,
    left: "50%",
    borderRadius: Border.br_base,
    borderColor: Color.colorLightsteelblue_100,
    width: 367,
    height: 778,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    borderRadius: Border.br_980xl,
    borderColor: Color.colorGray_300,
    opacity: 0.9,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  bayc1Icon: {
    borderRadius: Border.br_81xl,
  },
  maskGroup: {
    top: 37,
    left: 160,
    height: 70,
    width: 70,
    position: "absolute",
  },
  user4: {
    height: "3.2%",
    width: "15.64%",
    top: "13.63%",
    left: "42.05%",
    fontSize: FontSize.bodyMedium_size,
    color: Color.colorGray_700,
  },
  bottomScreenIcon: {
    top: 754,
    left: 3,
    width: 384,
    height: 84,
    position: "absolute",
  },
  posts: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Posts;
