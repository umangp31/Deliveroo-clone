import { View, Text, Image, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity classname="bg-white border p-4 border-gray-200">
      <View classname="flex-row" >
        <Text classname="text-lg mb-1">{name}</Text>
        <Text classname="text-lg mb-1">{description}</Text>
        <Text classname="text-gray-400 mt-2">
          <Currency quantity={price} currency="INR" />
        </Text>
      </View>
      <View>
        <Image
          style={{
            height: 96,
            width: 96,
            borderWidth: 1,
            borderColor: "#F3F3F4",
            padding:12,
            // backgroundColor:"gray.300" 
          }}
          source={{ uri: urlFor(image).url() }}
          classname=""
        />
      </View>
      
    </TouchableOpacity>
  );
};

export default DishRow;
