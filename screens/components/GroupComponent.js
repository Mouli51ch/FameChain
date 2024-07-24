import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ propTop, propOpacity, propElevation }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("opacity", propOpacity),
      ...getStyleValue("elevation", propElevation),
    };
  }, [propTop, propOpacity, propElevation]);

  return (
    <View
      style={[styles.frameParent, styles.frameParentLayout, groupViewStyle]}
    >
      <View style={styles.frameGroup}>
        <View>
          <Text style={styles.exclusiveContent}>Exclusive Content</Text>
          <Text style={styles.engageAndUnlock}>
            Engage and Unlock Exclusive Content!
          </Text>
        </View>
        <Text
          style={[
            styles.purchaseExclusiveTickets,
            styles.accessPremiumContentTypo,
          ]}
        >
          Purchase Exclusive Tickets
        </Text>
        <Text
          style={[styles.accessPremiumContent, styles.accessPremiumContentTypo]}
        >
          Access Premium Content
        </Text>
        <Text
          style={[styles.accessPremiumContent, styles.accessPremiumContentTypo]}
        >
          Earn Tokens
        </Text>
        <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
          <Text
            style={[styles.collectDigitalCollectibles, styles.joinFanClubsTypo]}
          >
            Collect Digital Collectibles
          </Text>
        </View>
        <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
          <Text style={[styles.joinFanClubs, styles.joinFanClubsTypo]}>
            Join Fan Clubs
          </Text>
        </View>
        <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
          <Text
            style={[styles.ongoingExclusiveAccess, styles.joinFanClubsTypo]}
          >
            Ongoing Exclusive Access
          </Text>
        </View>
        <View style={[styles.pricingRow3, styles.pricingLayout]}>
          <Text style={[styles.tieredPricingOptions, styles.pricingLayout]}>
            Tiered Pricing Options
          </Text>
        </View>
        <View style={[styles.pricingRow, styles.pricingSpaceBlock]}>
          <Text style={[styles.joinFanClubs, styles.joinFanClubsTypo]} />
        </View>
      </View>
      <View style={[styles.pricingCard, styles.frameParentLayout]}>
        <View style={[styles.pricingCardChild, styles.ctaBorder]} />
        <View style={[styles.cta, styles.ctaBorder]}>
          <Text style={styles.joinWaitlist}>Join waitlist</Text>
        </View>
        <View style={styles.pricingCardItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    height: 500,
    width: 307,
    position: "absolute",
  },
  accessPremiumContentTypo: {
    marginTop: 29,
    height: 23,
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    textAlign: "left",
    color: Color.white,
    lineHeight: 31,
  },
  pricingSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    marginTop: 29,
  },
  joinFanClubsTypo: {
    height: 12,
    fontSize: FontSize.bodyMedium_size,
    display: "flex",
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    textAlign: "left",
    color: Color.white,
  },
  pricingLayout: {
    width: 270,
    alignItems: "center",
  },
  ctaBorder: {
    borderWidth: 1,
    borderColor: Color.colorGray_600,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
  },
  exclusiveContent: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    color: Color.white,
    lineHeight: 31,
  },
  engageAndUnlock: {
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
  purchaseExclusiveTickets: {
    width: 231,
  },
  accessPremiumContent: {
    width: 174,
  },
  collectDigitalCollectibles: {
    width: 232,
    alignItems: "center",
  },
  pricingRow: {
    alignItems: "center",
  },
  joinFanClubs: {
    width: 143,
    alignItems: "center",
  },
  ongoingExclusiveAccess: {
    width: 199,
    alignItems: "center",
  },
  tieredPricingOptions: {
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
  frameGroup: {
    top: 20,
    left: 18,
    height: 477,
    width: 271,
    position: "absolute",
  },
  pricingCardChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_500,
  },
  joinWaitlist: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodyMedium,
    lineHeight: 26,
    textAlign: "left",
    color: Color.white,
  },
  cta: {
    height: "7.6%",
    width: "86.97%",
    top: "88.4%",
    right: "6.51%",
    bottom: "4%",
    left: "6.51%",
    backgroundColor: Color.colorDarkslategray_100,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_7xs,
    display: "none",
    flexDirection: "row",
    borderColor: Color.colorGray_600,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  pricingCardItem: {
    height: "0.2%",
    width: "87.3%",
    top: "20.5%",
    right: "6.35%",
    bottom: "79.3%",
    left: "6.35%",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  pricingCard: {
    top: 0,
    left: 0,
  },
  frameParent: {
    top: 782,
    left: 44,
    opacity: 0,
  },
});

export default GroupComponent;
