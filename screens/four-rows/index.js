import { ImageBackground } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const FourRows = () => {
  const navigation = useNavigation();
  return <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Pressable onPress={() => {
        navigation.navigate("socialFollowers");
      }}><View style={styles.section}>
          {
            /* YOUR CODE HERE */
          }
        <Text style={styles.xKjjFnny}>Navigate</Text></View></Pressable>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        <ImageBackground style={styles.KGGrtgjP} source={require("./image (2).png")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        </View>
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        </View>
      </View>
    <ImageBackground style={styles.aztDszjg} source={require("./image (2).png")}></ImageBackground></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15
  },
  section: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  textHeading1: {
    fontSize: 20,
    fontWeight: "bold"
  },
  xKjjFnny: {
    width: 100,
    height: 19,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  tWGLLzwz: {
    width: 100,
    height: 19,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  DZmChaep: {
    width: 100,
    height: 19,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  OEFyrxwi: {
    width: 100,
    height: 19,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  KGGrtgjP: {
    width: 306,
    height: 147,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    position: "absolute",
    left: 0,
    top: 0
  },
  aztDszjg: {
    width: 306,
    height: 147,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    position: "absolute",
    left: 25,
    top: 242
  }
});
export default FourRows;