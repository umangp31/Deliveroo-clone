import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
const ResturantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        style={{ height: 144, width: 256, borderRadius: 5 }}
        source={{
          uri: imgUrl,
        }}
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <EvilIcons name="star" size={24} color="green" opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> * {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <EvilIcons name="location" size={24} color="black" />
          <Text className="text-xs text-gray-500">Nearby * {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
