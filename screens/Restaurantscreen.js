import { View, Text, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

const Restaurantscreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      title,
      short_description,
      imgUrl,
      long,
      lat,
      address,
      area,
      rating,
      type,
      dishes,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  // console.log("imggg", id);
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
      </View>
    </ScrollView>
  );
};

export default Restaurantscreen;
