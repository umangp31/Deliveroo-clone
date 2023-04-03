import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard pic="https://links.papareact.com/gn7" title="testing 1" />
      <CategoryCard pic="https://links.papareact.com/gn7" title="testing 2" />
      <CategoryCard pic="https://links.papareact.com/gn7" title="testing 3" />
      <CategoryCard pic="https://links.papareact.com/gn7" title="testing 4" />
      <CategoryCard pic="https://links.papareact.com/gn7" title="testing 4" />
      <CategoryCard pic="https://links.papareact.com/gn7" title="testing 4" />
      <CategoryCard pic="https://links.papareact.com/gn7" title="testing 4" />
    </ScrollView>
  );
};

export default Categories;
