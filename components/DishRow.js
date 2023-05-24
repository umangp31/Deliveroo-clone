import { View, Text, Image, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
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
              // backgroundColor:"gray.300"
            }}
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-200 p-4 rounded-sm"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
