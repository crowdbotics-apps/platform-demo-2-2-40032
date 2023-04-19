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
        </View></Pressable>
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
        <View style={styles.section}>
          {
          /* YOUR CODE HERE */
        }
        </View>
      </View>
    </ScrollView>;
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
  }
});
export default FourRows;