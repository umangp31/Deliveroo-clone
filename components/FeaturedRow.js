import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";
const FeaturedRow = ({ title, description, id }) => {
  const [restaurantData, setrestaurantData] = useState([]);
  async function getRestaurantData() {
    const response= await sanityClient
      .fetch(
        `
    *[_type=="featured" && _id=='${id}']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
      )
      setrestaurantData(response?.restaurants);
      console.log('ans....',response?.restaurants);
      // console.log('aaaaaaa',response?.restaurants[0].address);
      // console.log('naya bhai ', response.restaurants[0]?.dishes);
  }
  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resturant card   */}
        {restaurantData &&  restaurantData.map((category) => {
          return <ResturantCard
            id={category?._id}
            imgUrl={category?.image}
            title={category?.name}
            rating={category?.rating}
            address={category?.address}
            genre={category?.type.name}
            area={category?.area}
            long={category?.long}
            lat={category?.lat}
            short_description={category?.short_description}
            dishes={category?.dishes }
            
          />
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
