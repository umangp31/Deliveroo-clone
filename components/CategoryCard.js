import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ pic, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <View className="">
        <Image
          source={{ uri: urlFor(pic).width(200).url() }}
          className="w-24 h-24 object-contain rounded-sm "
        />
      </View>
      <Text className="absolute bottom-1 text-white font-semibold text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
