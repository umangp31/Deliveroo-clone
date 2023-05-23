import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";

const DishRow = ({ id, name, description, price, image }) => {
  console.log("moneyyy", price);
  return (
    <TouchableOpacity>
      <View>
        <Text classname="text-lg mb-1">{name}</Text>
        <Text classname="text-lg mb-1">{description}</Text>
        <Text classname="text-gray-400 mt-2">
          <Currency
            quantity={price} currency="INR"
          />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
