import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

const CreatorList = () => {
  return (
    <View style={[styles.creatorList, styles.rowsLayout]}>
      <View style={[styles.rows, styles.rowsPosition]}>
        <View style={[styles.view, styles.viewLayout]} />
        <View style={[styles.view1, styles.viewLayout]} />
        <View style={[styles.view2, styles.viewLayout]} />
        <View style={[styles.view3, styles.viewLayout]} />
        <View style={[styles.view4, styles.viewLayout]} />
        <View style={[styles.view5, styles.viewLayout]} />
        <View style={[styles.view6, styles.viewLayout]} />
        <View style={[styles.view7, styles.viewLayout]} />
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
  rowsPosition: {
    top: 0,
    marginLeft: -167.5,
  },
  viewLayout: {
    overflow: "hidden",
    height: 35,
    width: 331,
    borderWidth: 1,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
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
    overflow: "hidden",
    height: 35,
    width: 331,
    borderWidth: 1,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
  },
  view3: {
    top: 160,
    marginLeft: -167.5,
    overflow: "hidden",
    height: 35,
    width: 331,
    borderWidth: 1,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
  },
  view4: {
    top: 120,
    marginLeft: -167.5,
    overflow: "hidden",
    height: 35,
    width: 331,
    borderWidth: 1,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
  },
  view5: {
    top: 80,
    marginLeft: -167.5,
    overflow: "hidden",
    height: 35,
    width: 331,
    borderWidth: 1,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
  },
  view6: {
    top: 40,
    marginLeft: -167.5,
    overflow: "hidden",
    height: 35,
    width: 331,
    borderWidth: 1,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
  },
  view7: {
    top: 0,
    marginLeft: -167.5,
  },
  rows: {
    height: 315,
    width: 335,
    left: "50%",
    position: "absolute",
  },
  creatorList: {
    marginLeft: -166.5,
    top: 73,
  },
});

export default CreatorList;
