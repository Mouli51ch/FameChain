import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Profile = ({ onCollectibleButtonPress, onCollectibleButtonPress1 }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.tcTab} />
      <Pressable
        style={[styles.collectibleButton, styles.buttonLayout]}
        onPress={onCollectibleButtonPress}
      />
      <Pressable
        style={[styles.collectibleButton1, styles.buttonLayout]}
        onPress={onCollectibleButtonPress1}
      />
      <View style={[styles.tokenButton, styles.buttonLayout]} />
      <Text style={[styles.collectibles, styles.collectiblesTypo]}>Posts</Text>
      <Text style={[styles.collectibles1, styles.collectiblesTypo]}>
        Activity
      </Text>
      <Text style={[styles.tokens, styles.collectiblesTypo]}>Stats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 36,
    width: 100,
    top: 7,
    position: "absolute",
  },
  collectiblesTypo: {
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    left: "50%",
    top: "50%",
    marginTop: -8,
    position: "absolute",
  },
  tcTab: {
    top: 0,
    left: 351,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.greyscaleGray100,
    borderRadius: Border.br_base,
    height: 50,
    width: 351,
    position: "absolute",
  },
  collectibleButton: {
    left: 232,
    borderRadius: Border.br_980xl,
    width: 100,
    top: 7,
    backgroundColor: Color.greyscaleGray100,
  },
  collectibleButton1: {
    left: 128,
    borderRadius: Border.br_980xl,
    width: 100,
    top: 7,
    backgroundColor: Color.greyscaleGray100,
  },
  tokenButton: {
    left: 20,
    backgroundColor: Color.colorDimgray_400,
    borderStyle: "solid",
    borderColor: Color.colorLightsteelblue,
    borderWidth: 1,
    width: 100,
    top: 7,
    borderRadius: Border.br_base,
  },
  collectibles: {
    marginLeft: -16.5,
    color: Color.greyscaleGrey30,
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    left: "50%",
    top: "50%",
    marginTop: -8,
  },
  collectibles1: {
    marginLeft: 83.5,
    color: Color.greyscaleGrey30,
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    left: "50%",
    top: "50%",
    marginTop: -8,
  },
  tokens: {
    marginLeft: -121.5,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    left: "50%",
    top: "50%",
    marginTop: -8,
  },
  profile: {
    top: 142,
    left: 19,
    shadowColor: "rgba(59, 25, 139, 0.39)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 50,
    width: 351,
    position: "absolute",
  },
});

export default Profile;
