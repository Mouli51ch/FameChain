import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const GroupComponent1 = ({ pattern }) => {
  return (
    <View style={styles.rectangleParent}>
      <LinearGradient
        style={[styles.groupChild, styles.groupChildPosition]}
        locations={[0, 1]}
        colors={["#010002", "#361764"]}
      />
      <View style={styles.groupItem} />
      <Image
        style={[styles.patternIcon, styles.groupChildPosition]}
        contentFit="cover"
        source={pattern}
      />
      <View style={styles.frameParent}>
        <View>
          <Text style={styles.connectWithCelebrities}>
            Connect with Celebrities
          </Text>
          <Text style={styles.connectWithYour}>
            Connect with Your Favourite Stars Instantly!
          </Text>
        </View>
        <Text style={styles.personalMeetAnd}>Personal Meet and Greets</Text>
        <Text style={styles.personalMeetAnd}>{`Live Q&A Session`}</Text>
        <Text style={styles.personalMeetAnd}>Personal Meet and Greets</Text>
        <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
          <Text
            style={[styles.realTimeInteractions, styles.messagesFromYourTypo]}
          >
            Real-Time Interactions
          </Text>
        </View>
        <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
          <Text style={[styles.exclusiveBtsTours, styles.messagesFromYourTypo]}>
            Exclusive BTS tours
          </Text>
        </View>
        <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
          <Text style={[styles.exclusiveBtsTours, styles.messagesFromYourTypo]}>
            Custom shout-outs
          </Text>
        </View>
        <View style={[styles.pricingRow3, styles.pricingRow3Layout]}>
          <Text style={[styles.messagesFromYour, styles.pricingRow3Layout]}>
            Messages from your favourite celebrities
          </Text>
        </View>
        <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
          <Text
            style={[styles.exclusiveBtsTours, styles.messagesFromYourTypo]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  pricingSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    marginTop: 29,
  },
  messagesFromYourTypo: {
    height: 12,
    fontSize: FontSize.bodyMedium_size,
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    textAlign: "left",
    color: Color.white,
  },
  pricingRow3Layout: {
    width: 270,
    alignItems: "center",
  },
  groupChild: {
    height: "99.21%",
    bottom: "0.79%",
    shadowColor: "rgba(78, 0, 191, 0.41)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 74,
    elevation: 74,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
  },
  groupItem: {
    height: "0.2%",
    width: "87.3%",
    top: "20.34%",
    right: "6.35%",
    bottom: "79.46%",
    left: "6.35%",
    borderStyle: "solid",
    borderColor: Color.colorPlum,
    borderTopWidth: 1,
    position: "absolute",
  },
  patternIcon: {
    height: "100%",
    bottom: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  connectWithCelebrities: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    color: Color.white,
    lineHeight: 31,
  },
  connectWithYour: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_700,
    marginTop: 6,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    textAlign: "left",
    width: 271,
  },
  personalMeetAnd: {
    width: 174,
    height: 23,
    marginTop: 29,
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    textAlign: "left",
    color: Color.white,
    lineHeight: 31,
  },
  realTimeInteractions: {
    width: 212,
    alignItems: "center",
  },
  pricingRow: {
    alignItems: "center",
  },
  exclusiveBtsTours: {
    width: 143,
    alignItems: "center",
  },
  messagesFromYour: {
    height: 12,
    fontSize: FontSize.bodyMedium_size,
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    textAlign: "left",
    color: Color.white,
  },
  pricingRow3: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    marginTop: 29,
  },
  frameParent: {
    top: 20,
    left: 20,
    height: 477,
    width: 271,
    position: "absolute",
  },
  rectangleParent: {
    height: "59.72%",
    width: "78.72%",
    top: "-37.8%",
    right: "10%",
    bottom: "78.08%",
    left: "11.28%",
    opacity: 0,
    position: "absolute",
  },
});

export default GroupComponent1;
