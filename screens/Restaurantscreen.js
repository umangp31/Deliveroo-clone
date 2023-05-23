import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { AntDesign, Entypo, EvilIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
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
      genre,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  console.log("imggg", dishes[0]);
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="relative w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity className="absolute top-4 left-4 p-2 bg-gray-100 rounded-full">
            <AntDesign name="arrowleft" size={24} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="flex relative bg-white ">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
          </View>
          <View className="flex-row space-x-2 my-1 px-4 ">
            <View className="flex-row items-center space-x-1 ">
              <Foundation name="star" size={20} color="green" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500 text-xs ">{rating}</Text> *{" "}
                {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <EvilIcons
                name="location"
                size={20}
                opacity={0.4}
                color="black"
              />

              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">Nearby</Text> {area}
              </Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4 px-4">
            {short_description}
          </Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y bg-white border-gray-300">
          <EvilIcons name="question" size={20} opacity={0.6} color="black" />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <Entypo name="chevron-small-right" size={24} color="#00CCBB" />
        </TouchableOpacity>

        <View>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl" >
            Menu
          </Text>

          {dishes.map((dish)=>(
            <DishRow
              key={dish.id}
              id={dish.id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurantscreen;
