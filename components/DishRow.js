import { View, Text, Image, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setisPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        } `}
      >
        <View className="flex-row items-center ">
          <View className="flex-1 pr-2 item ">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
                padding: 12,
              }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-200 p-4 rounded-sm"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={24} color="#00CCBB" />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={24} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
