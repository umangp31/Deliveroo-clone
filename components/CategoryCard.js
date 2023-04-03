import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryCard = ({ pic, title }) => {
  return (
    <TouchableOpacity className="relative mr-2" >
      <View className="bg-red-500"  > 
        <Image source={{ uri: pic }} className="w-24 h-24 object-contain " /> 
      </View>
      <Text className="absolute bottom-1 text-white" >{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
