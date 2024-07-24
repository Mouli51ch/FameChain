import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Profile from "../components/Profile";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Activity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activity}>
      <Text style={[styles.famechain, styles.user4Typo]}>FameChain</Text>
      <LinearGradient
        style={[styles.pollBg, styles.pollBgBorder]}
        locations={[0, 0.73]}
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
        onCollectibleButtonPress={() => navigation.navigate("Stats")}
        onCollectibleButtonPress1={() => navigation.navigate("Posts")}
      />
      <View style={styles.activity1}>
        <Image
          style={[styles.activityChild, styles.activityChildLayout1]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.activityItem, styles.activityChildLayout1]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.activityInner, styles.activityChildLayout1]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.lineIcon, styles.activityChildLayout1]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.activityChild1, styles.activityChildLayout1]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.activityChild2, styles.activityChildLayout1]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.activityChild3, styles.activityChildLayout1]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.activityChild4, styles.activityChildLayout1]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.activityChild5, styles.activityChildLayout]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <View style={styles.nft}>
          <Text style={styles.receivedAnNftContainer}>
            <Text style={styles.tokensContainerTypo}>
              <Text style={styles.receivedAn}>{`Received an `}</Text>
              <Text style={styles.nftCollectible}>NFT collectible</Text>
              <Text style={styles.receivedAn}>{` from `}</Text>
            </Text>
            <Text style={styles.receivedAn}>
              <Text style={styles.celebrityFanClub1}>@celebrity fan club</Text>
            </Text>
          </Text>
          <Text style={[styles.text, styles.pmTypo]}>16-07-2024</Text>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
          <Image
            style={[styles.groupIcon1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
        </View>
        <View style={styles.nft1}>
          <Text style={[styles.pm, styles.pmTypo]}>21:12 PM</Text>
        </View>
        <View style={[styles.nft2, styles.nftLayout]}>
          <Text
            style={[
              styles.joinedCelebrityFanContainer,
              styles.tokensContainerFlexBox,
            ]}
          >
            <Text style={styles.joinedCelebrityFanContainer1}>
              <Text style={styles.receivedAn}>
                <Text style={styles.tokensContainerTypo}>{`Joined `}</Text>
                <Text style={styles.celebrityFanClub1}>
                  @celebrity fan club
                </Text>
                <Text style={styles.tokensContainerTypo}>{` with `}</Text>
              </Text>
              <Text style={styles.tokensContainerTypo}>
                <Text style={styles.nftCollectible}>200 Tokens</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>15-07-2024</Text>
          <Text style={[styles.pm1, styles.pmTypo]}>12:41 PM</Text>
        </View>
        <View style={[styles.nft3, styles.nftLayout]}>
          <Text
            style={[
              styles.earned100TokensContainer,
              styles.tokensContainerFlexBox,
            ]}
          >
            <Text style={styles.joinedCelebrityFanContainer1}>
              <Text style={styles.receivedAn}>{`Earned `}</Text>
              <Text style={styles.nftCollectible}>100 Tokens</Text>
              <Text style={styles.receivedAn}> from a quiz contest</Text>
            </Text>
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>15-07-2024</Text>
          <Text style={[styles.am, styles.amPosition]}>01:30 AM</Text>
        </View>
        <View style={[styles.nft4, styles.nftLayout]}>
          <Text
            style={[
              styles.earned100TokensContainer,
              styles.tokensContainerFlexBox,
            ]}
          >
            <Text style={styles.joinedCelebrityFanContainer1}>
              <Text style={styles.receivedAn}>{`Staked `}</Text>
              <Text style={styles.nftCollectible}>400 Tokens</Text>
              <Text style={styles.receivedAn}> for liquidity provision</Text>
            </Text>
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>12-07-2024</Text>
          <Text style={[styles.am1, styles.amPosition]}>23:23 AM</Text>
        </View>
        <View style={[styles.nft5, styles.nftLayout]}>
          <Text
            style={[
              styles.transferred100TokensContainer,
              styles.tokensContainerFlexBox,
            ]}
          >
            <Text style={styles.joinedCelebrityFanContainer1}>
              <Text
                style={styles.tokensContainerTypo}
              >{`Transferred 100 Tokens to `}</Text>
              <Text style={styles.celebrityFanClub1}>@User #160</Text>
            </Text>
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>12-07-2024</Text>
          <Text style={[styles.pm2, styles.amPosition]}>19:10 PM</Text>
        </View>
        <View style={[styles.nft6, styles.nftLayout]}>
          <Text
            style={[
              styles.earned100TokensContainer,
              styles.tokensContainerFlexBox,
            ]}
          >
            <Text style={styles.joinedCelebrityFanContainer1}>
              <Text style={styles.receivedAn}>{`Bought an `}</Text>
              <Text style={styles.nftCollectible}>
                exclusive NFT collectible
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>11-07-2024</Text>
          <Text style={[styles.am2, styles.amPosition]}>20:33 AM</Text>
        </View>
        <View style={[styles.nft7, styles.nftLayout]}>
          <Text
            style={[styles.purchased500Tokens, styles.tokensContainerFlexBox]}
          >
            Purchased 500 Tokens
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>11-07-2024</Text>
          <Text style={[styles.am3, styles.amPosition]}>20:20 AM</Text>
        </View>
        <View style={[styles.nft8, styles.nft8Position]}>
          <Text style={[styles.participatedInAContainer, styles.nft8Position]}>
            <Text style={styles.joinedCelebrityFanContainer1}>
              <Text
                style={styles.receivedAn}
              >{`Participated in a gamified challenge and won `}</Text>
              <Text style={styles.nftCollectible}>300 Tokens</Text>
            </Text>
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>10-07-2024</Text>
          <Text style={[styles.pm3, styles.amPosition]}>22:22 PM</Text>
        </View>
        <View style={[styles.nft9, styles.nft9Position]}>
          <Text style={[styles.received50TokensContainer, styles.nft9Position]}>
            <Text style={styles.joinedCelebrityFanContainer1}>
              <Text style={styles.receivedAn}>{`Received `}</Text>
              <Text style={styles.nftCollectible}>50 Tokens</Text>
              <Text style={styles.receivedAn}>
                {" "}
                for completing all daily tasks
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>12-07-2024</Text>
          <Text style={[styles.pm4, styles.amPosition]}>23:40 PM</Text>
        </View>
        <View style={[styles.nft10, styles.nft10Position]}>
          <Text
            style={[
              styles.unlockedABehindTheScenesContainer,
              styles.nft10Position,
            ]}
          >
            <Text style={styles.joinedCelebrityFanContainer1}>
              <Text style={styles.receivedAn}>Unlocked a</Text>
              <Text style={styles.nftCollectible}> behind-the-scenes tour</Text>
              <Text style={styles.receivedAn}> with 150 Tokens</Text>
            </Text>
          </Text>
          <Text style={[styles.text1, styles.amPosition]}>14-07-2024</Text>
          <Text style={[styles.pm5, styles.amPosition]}>18:08 PM</Text>
        </View>
        <Image
          style={[styles.clubIcon, styles.clubIconPosition]}
          contentFit="cover"
          source={require("../assets/club.png")}
        />
        <Image
          style={[styles.clubIcon1, styles.clubIconPosition]}
          contentFit="cover"
          source={require("../assets/club.png")}
        />
        <Image
          style={[styles.userLove2, styles.clubIconPosition]}
          contentFit="cover"
          source={require("../assets/user-love-2.png")}
        />
        <Image
          style={[styles.eth5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/eth-5.png")}
        />
        <Image
          style={[styles.eth4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/eth-5.png")}
        />
        <Image
          style={[styles.eth3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/eth-5.png")}
        />
        <Image
          style={[styles.eth2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/eth-5.png")}
        />
        <Image
          style={[styles.eth1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/eth-5.png")}
        />
        <Image
          style={[styles.activityChild6, styles.activityChildLayout]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
      </View>
      <Image
        style={styles.bottomScreenIcon}
        contentFit="cover"
        source={require("../assets/bottom-screen5.png")}
      />
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
    top: 0,
    left: 0,
    height: 70,
    width: 70,
    position: "absolute",
  },
  activityChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0.84%",
    right: "9.27%",
    width: "89.89%",
    height: "0.17%",
    position: "absolute",
    overflow: "hidden",
  },
  activityChildLayout: {
    right: "10.11%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "89.89%",
    height: "0.17%",
    position: "absolute",
    overflow: "hidden",
  },
  pmTypo: {
    textAlign: "center",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 16,
    fontSize: FontSize.size_4xs,
    top: "50%",
    position: "absolute",
  },
  groupIconLayout: {
    width: "9.97%",
    height: "6.59%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nftLayout: {
    height: 37,
    left: 58,
  },
  tokensContainerFlexBox: {
    alignItems: "center",
    display: "flex",
    marginTop: -18.5,
    lineHeight: 24,
    fontSize: FontSize.size_2xs_5,
    left: 0,
    textAlign: "left",
  },
  amPosition: {
    marginTop: 2.5,
    textAlign: "center",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 16,
    fontSize: FontSize.size_4xs,
    top: "50%",
    position: "absolute",
  },
  nft8Position: {
    width: 298,
    top: "50%",
    position: "absolute",
  },
  nft9Position: {
    width: 293,
    top: "50%",
    position: "absolute",
  },
  nft10Position: {
    width: 281,
    top: "50%",
    position: "absolute",
  },
  clubIconPosition: {
    height: 30,
    left: 12,
    position: "absolute",
  },
  iconLayout: {
    left: "5.9%",
    right: "89.86%",
    width: "4.24%",
    height: "3.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    height: 787,
    position: "absolute",
    overflow: "hidden",
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
  activityChild: {
    top: "7.72%",
    bottom: "92.11%",
  },
  activityItem: {
    top: "18.01%",
    bottom: "81.82%",
  },
  activityInner: {
    top: "28.3%",
    bottom: "71.53%",
  },
  lineIcon: {
    top: "38.59%",
    bottom: "61.23%",
  },
  activityChild1: {
    top: "48.89%",
    bottom: "50.94%",
  },
  activityChild2: {
    top: "59.18%",
    bottom: "40.65%",
  },
  activityChild3: {
    top: "69.47%",
    bottom: "30.36%",
  },
  activityChild4: {
    top: "79.76%",
    bottom: "20.07%",
  },
  activityChild5: {
    top: "89.71%",
    bottom: "10.12%",
    left: "0%",
  },
  receivedAn: {
    color: Color.white,
  },
  nftCollectible: {
    color: Color.colorOlivedrab,
  },
  tokensContainerTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  celebrityFanClub1: {
    fontStyle: "italic",
    fontFamily: FontFamily.nunitoItalic,
  },
  receivedAnNftContainer: {
    marginTop: -225.35,
    lineHeight: 24,
    fontSize: FontSize.size_2xs_5,
    left: 46,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  text: {
    marginTop: -204.35,
    left: 46,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.captionSmall1216Regular,
    lineHeight: 16,
    fontSize: FontSize.size_4xs,
  },
  groupIcon: {
    top: "0.89%",
    right: "90.03%",
    bottom: "92.52%",
    left: "0%",
  },
  groupIcon1: {
    top: "93.41%",
    right: "89.04%",
    bottom: "0%",
    left: "1%",
  },
  nft: {
    marginTop: -291.5,
    width: 301,
    height: 451,
    left: 12,
    top: "50%",
    position: "absolute",
  },
  pm: {
    marginTop: -8,
    left: 0,
  },
  nft1: {
    marginTop: -273.5,
    left: 247,
    width: 40,
    height: 16,
    top: "50%",
    position: "absolute",
  },
  joinedCelebrityFanContainer1: {
    width: "100%",
  },
  joinedCelebrityFanContainer: {
    width: 220,
    top: "50%",
    position: "absolute",
  },
  text1: {
    left: 0,
  },
  pm1: {
    marginTop: 0.5,
    left: 172,
  },
  nft2: {
    marginTop: -235.5,
    width: 220,
    top: "50%",
    position: "absolute",
  },
  earned100TokensContainer: {
    width: 220,
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  am: {
    left: 148,
  },
  nft3: {
    marginTop: -176.5,
    width: 220,
    top: "50%",
    position: "absolute",
  },
  am1: {
    left: 158,
  },
  nft4: {
    marginTop: -56.5,
    width: 220,
    top: "50%",
    position: "absolute",
  },
  transferred100TokensContainer: {
    width: 220,
    top: "50%",
    position: "absolute",
    color: Color.white,
  },
  pm2: {
    left: 151,
  },
  nft5: {
    marginTop: 3.5,
    width: 220,
    top: "50%",
    position: "absolute",
  },
  am2: {
    left: 132,
  },
  nft6: {
    marginTop: 123.5,
    width: 220,
    top: "50%",
    position: "absolute",
  },
  purchased500Tokens: {
    width: 220,
    top: "50%",
    position: "absolute",
    color: Color.white,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  am3: {
    left: 69,
  },
  nft7: {
    marginTop: 183.5,
    width: 220,
    top: "50%",
    position: "absolute",
  },
  participatedInAContainer: {
    alignItems: "center",
    display: "flex",
    marginTop: -18.5,
    lineHeight: 24,
    fontSize: FontSize.size_2xs_5,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  pm3: {
    left: 239,
  },
  nft8: {
    marginTop: 241.5,
    height: 37,
    left: 58,
  },
  received50TokensContainer: {
    alignItems: "center",
    display: "flex",
    marginTop: -18.5,
    lineHeight: 24,
    fontSize: FontSize.size_2xs_5,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  pm4: {
    left: 200,
  },
  nft9: {
    marginTop: 63.5,
    height: 37,
    left: 58,
  },
  unlockedABehindTheScenesContainer: {
    alignItems: "center",
    display: "flex",
    marginTop: -18.5,
    lineHeight: 24,
    fontSize: FontSize.size_2xs_5,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  pm5: {
    left: 215,
  },
  nft10: {
    marginTop: -116.5,
    height: 37,
    left: 58,
  },
  clubIcon: {
    top: 62,
    width: 37,
    height: 30,
  },
  clubIcon1: {
    top: 180,
    width: 37,
    height: 30,
  },
  userLove2: {
    top: 301,
    width: 30,
    overflow: "hidden",
  },
  eth5Icon: {
    top: "83.02%",
    bottom: "13.53%",
  },
  eth4Icon: {
    top: "93.83%",
    bottom: "2.73%",
  },
  eth3Icon: {
    top: "62.44%",
    bottom: "34.12%",
  },
  eth2Icon: {
    top: "41.85%",
    bottom: "54.7%",
  },
  eth1Icon: {
    top: "21.27%",
    bottom: "75.28%",
  },
  activityChild6: {
    top: "100%",
    bottom: "-0.17%",
    left: "0%",
  },
  activity1: {
    height: "69.08%",
    width: "91.28%",
    top: "24.88%",
    right: "0.77%",
    bottom: "6.04%",
    left: "7.95%",
    position: "absolute",
  },
  bottomScreenIcon: {
    top: 754,
    left: 3,
    width: 384,
    height: 84,
    position: "absolute",
  },
  activity: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Activity;
