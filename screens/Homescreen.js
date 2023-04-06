import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect,useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
const Homescreen = () => {
  const navigation = useNavigation();
  const [featuredCategory,useFeaturedCategory]=useState([])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch()
  }, [])
  
  return (
    <SafeAreaView className="bg-white pt-5">
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      {/* Header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 justify-between">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-6 w-6 bg-gray-300 p-4 rounded-full object-cover"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current location
            <Entypo name="chevron-small-down" size={20} color="#00CCBB" />
          </Text>
        </View>
        <AntDesign name="user" size={20} color="#00CCBB" />
      </View>

      {/* Search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-2 items-center rounded-md">
          <AntDesign name="search1" size={20} color="gray" />
          <TextInput
            className="mr-6"
            placeholder="resturants and crusines"
            keyboardType="default"
          />
        </View>
        <Feather name="sliders" size={20} color="#00CCBB" />
      </View>

      {/* Body */}

      <ScrollView
        className="bg-gray-200"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Category */}
        <Categories />

        {/* Featured Row */}
        <FeaturedRow
          id="12"
          title="Featured"
          description="any description"
        />
        <FeaturedRow
          id="123"
          title="Featured"
          description="any description"
        />
        <FeaturedRow
          id="1234"
          title="Featured"
          description="any description"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
