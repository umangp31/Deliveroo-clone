import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";
const FeaturedRow = ({ title, description, id }) => {
  const [restaurantData, setrestaurantData] = useState([]);
  console.log('ye id he  ',id);
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
        // { id }
      )
      // const newdata= response.json();
      setrestaurantData(response?.restaurants);
      console.log('this is neww   ',response?.restaurants[0]?.image);

  }
  useEffect(() => {
    getRestaurantData();
    // console.log("ye he ansssssssss ", restaurantData);
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
          console.log('cateeeeee   ',category);
          return <ResturantCard
            id={category?._id}
            imgUrl={category?.image}
            title={category?.name}
            rating={category?.rating}
            address={category?.address}
            genre={category?.type.name}
            area={category?.area}
          />
        })}

        {/* <ResturantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="GM Naan"
          rating={4.5}
          genre="indian"
          address="123 XYZ"
        />

        <ResturantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="GM Naan"
          rating={4.5}
          genre="indian"
          address="123 XYZ"
          shor_description="this is short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="GM Naan"
          rating={4.5}
          genre="indian"
          address="123 XYZ"
          shor_description="this is short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl="https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="GM Naan"
          rating={4.5}
          genre="indian"
          address="123 XYZ"
          shor_description="this is short description"
          dishes={[]}
          long={20}
          lat={0}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
