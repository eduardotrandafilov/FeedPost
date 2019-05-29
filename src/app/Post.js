import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";

const Post = ({ data }) => (
  <View style={stylePost.container}>
    <View>
      <Text style={stylePost.title}>{data.title}</Text>
      <Text>{data.author}</Text>
    </View>
    <Text style={stylePost.content}>{data.content}</Text>
  </View>
);

const stylePost = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  },
  content: {
    textAlign: "justify",
    color: "#000"
  }
});

export default Post;
