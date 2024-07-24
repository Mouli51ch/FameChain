import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Top1 from "./Top1";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TCTF = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tcTf}>
      <View style={styles.tcTfDetails} />
      <Top1 onTFButtonCPress={() => navigation.navigate("FypFans")} />
      <View style={[styles.creatorList, styles.rowsLayout]}>
        <View style={[styles.rows, styles.rowsLayout]}>
          <View style={[styles.view, styles.viewLayout]} />
          <View style={[styles.view1, styles.viewLayout]} />
          <View style={[styles.view2, styles.viewLayout]} />
          <View style={[styles.view3, styles.viewLayout]} />
          <View style={[styles.view4, styles.viewLayout]} />
          <View style={[styles.view5, styles.viewLayout]} />
          <View style={[styles.view6, styles.viewLayout]} />
          <View style={[styles.view7, styles.viewLayout]} />
        </View>
        <View style={[styles.creators, styles.creatorsLayout]}>
          <View style={[styles.followingButton, styles.followPosition]}>
            <View style={[styles.button, styles.buttonPosition]} />
            <Text style={[styles.following, styles.followTypo]}>FOLLOWING</Text>
          </View>
          <View style={[styles.followingButton1, styles.followPosition]}>
            <View style={[styles.button, styles.buttonPosition]} />
            <Text style={[styles.following, styles.followTypo]}>FOLLOWING</Text>
          </View>
          <View style={[styles.followingButton2, styles.followPosition]}>
            <View style={[styles.button, styles.buttonPosition]} />
            <Text style={[styles.following, styles.followTypo]}>FOLLOWING</Text>
          </View>
          <View style={[styles.followButton, styles.followPosition]}>
            <View style={[styles.button3, styles.buttonPosition]} />
            <Text style={[styles.follow, styles.followTypo]}>FOLLOW</Text>
          </View>
          <View style={[styles.followButton1, styles.followPosition]}>
            <View style={[styles.button3, styles.buttonPosition]} />
            <Text style={[styles.follow, styles.followTypo]}>FOLLOW</Text>
          </View>
          <View style={[styles.followButton2, styles.followPosition]}>
            <View style={[styles.button3, styles.buttonPosition]} />
            <Text style={[styles.follow, styles.followTypo]}>FOLLOW</Text>
          </View>
          <View style={[styles.followButton3, styles.followPosition]}>
            <View style={[styles.button3, styles.buttonPosition]} />
            <Text style={[styles.follow, styles.followTypo]}>FOLLOW</Text>
          </View>
          <View style={[styles.followButton4, styles.followPosition]}>
            <View style={[styles.button3, styles.buttonPosition]} />
            <Text style={[styles.follow, styles.followTypo]}>FOLLOW</Text>
          </View>
          <View style={[styles.profiles, styles.creatorsLayout]}>
            <Text style={[styles.user8, styles.userTypo1]}>User #8</Text>
            <Image
              style={[styles.pfp8Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pfp-8.png")}
            />
            <Text style={[styles.user7, styles.userTypo1]}>User #7</Text>
            <Image
              style={[styles.pfp7Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pfp-8.png")}
            />
            <Text style={[styles.user6, styles.userTypo1]}>User #6</Text>
            <Image
              style={[styles.pfp6Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pfp-6.png")}
            />
            <Text style={[styles.user5, styles.userTypo1]}>User #5</Text>
            <Image
              style={[styles.pfp5Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pfp-5.png")}
            />
            <Text style={[styles.user4, styles.userTypo1]}>User #4</Text>
            <Image
              style={[styles.pfp4Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pfp-4.png")}
            />
            <Text style={[styles.user3, styles.userTypo]}>User #3</Text>
            <Image
              style={[styles.pfp3Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pfp-3.png")}
            />
            <Text style={[styles.user2, styles.userTypo]}>User #2</Text>
            <Image
              style={[styles.pfp2Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pfp-2.png")}
            />
            <Text style={[styles.user1, styles.userTypo]}>User #1</Text>
            <Image
              style={[styles.pfp1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/pfp-8.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowsLayout: {
    height: 315,
    width: 335,
    left: "50%",
    position: "absolute",
  },
  viewLayout: {
    height: 35,
    width: 331,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
    left: "50%",
    position: "absolute",
  },
  creatorsLayout: {
    height: 309,
    position: "absolute",
  },
  followPosition: {
    height: 20,
    width: 69,
    marginLeft: 88.5,
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    marginLeft: -34.5,
    height: 20,
    width: 69,
    top: 0,
    overflow: "hidden",
    borderRadius: Border.br_base,
    left: "50%",
    position: "absolute",
  },
  followTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_5xs,
    top: "50%",
    marginTop: -8,
    left: "50%",
    position: "absolute",
  },
  userTypo1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_700,
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    left: 42,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    height: 29,
    width: 30,
    position: "absolute",
  },
  userTypo: {
    color: Color.colorGreenyellow_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    left: 42,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    position: "absolute",
  },
  tcTfDetails: {
    marginLeft: -175.5,
    top: 56,
    height: 327,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
    width: 351,
    left: "50%",
    position: "absolute",
  },
  view: {
    marginLeft: -163.5,
    top: 280,
  },
  view1: {
    marginLeft: -164.5,
    top: 240,
  },
  view2: {
    top: 200,
    marginLeft: -167.5,
  },
  view3: {
    top: 160,
    marginLeft: -167.5,
  },
  view4: {
    top: 120,
    marginLeft: -167.5,
  },
  view5: {
    top: 80,
    marginLeft: -167.5,
  },
  view6: {
    top: 40,
    marginLeft: -167.5,
  },
  view7: {
    top: 0,
    marginLeft: -167.5,
  },
  rows: {
    top: 0,
    marginLeft: -167.5,
  },
  button: {
    backgroundColor: Color.colorSlateblue_200,
  },
  following: {
    marginLeft: -23.5,
  },
  followingButton: {
    top: 4,
  },
  followingButton1: {
    top: 124,
  },
  followingButton2: {
    top: 204,
  },
  button3: {
    backgroundColor: Color.colorDimgray_500,
  },
  follow: {
    marginLeft: -17.5,
  },
  followButton: {
    top: 44,
  },
  followButton1: {
    top: 84,
  },
  followButton2: {
    top: 164,
  },
  followButton3: {
    top: 244,
  },
  followButton4: {
    top: 284,
  },
  user8: {
    width: 52,
    top: 284,
  },
  pfp8Icon: {
    borderRadius: Border.br_81xl,
    height: 29,
    width: 30,
    left: 3,
    top: 280,
  },
  user7: {
    width: 44,
    top: 244,
  },
  pfp7Icon: {
    borderRadius: Border.br_81xl,
    height: 29,
    width: 30,
    left: 3,
    top: 240,
  },
  user6: {
    width: 116,
    top: 204,
  },
  pfp6Icon: {
    borderRadius: Border.br_203xl_5,
    left: 0,
    top: 200,
  },
  user5: {
    width: 116,
    top: 164,
  },
  pfp5Icon: {
    borderRadius: Border.br_116xl,
    left: 0,
    top: 160,
  },
  user4: {
    width: 116,
    top: 124,
  },
  pfp4Icon: {
    borderRadius: Border.br_116xl_8,
    left: 0,
    top: 120,
  },
  user3: {
    width: 60,
    top: 84,
  },
  pfp3Icon: {
    borderRadius: Border.br_81xl,
    height: 29,
    width: 30,
    left: 0,
    top: 80,
  },
  user2: {
    width: 116,
    top: 44,
  },
  pfp2Icon: {
    borderRadius: Border.br_81xl,
    height: 29,
    width: 30,
    left: 0,
    top: 40,
  },
  user1: {
    width: 37,
    top: 4,
  },
  pfp1Icon: {
    borderRadius: Border.br_81xl,
    height: 29,
    width: 30,
    left: 0,
    top: 0,
  },
  profiles: {
    right: 157,
    left: 0,
    top: 0,
  },
  creators: {
    marginLeft: -157.5,
    width: 315,
    top: 4,
    left: "50%",
    height: 309,
  },
  creatorList: {
    marginLeft: -166.5,
    top: 73,
  },
  tcTf: {
    marginLeft: -179,
    top: 471,
    height: 388,
    width: 351,
    position: "absolute",
    left: "50%",
  },
});

export default TCTF;
