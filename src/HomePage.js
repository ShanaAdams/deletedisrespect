import React from "react";
import { View, Text, StyleSheet } from "react-native";

//create a function to get the username from the mongoDB

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome {UserName ? `${UserName}!` : "User!"}
      </Text>
      {/* Add components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#40000d",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffdcb1",
  },
});

export default HomePage;
