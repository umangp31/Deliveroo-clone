import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";

const Categories = () => {
  const [category, setcategory] = useState([])
  async function getCategories(){
    const response =await sanityClient.fetch( `
    *[_type=="category" ]{
      ...,
    }
    `,)
    setcategory(response);
  }

  useEffect(() => {
    getCategories();
  }, [])

  
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
     {category.map((item,index)=>{
      return <CategoryCard pic={item?.image?.asset?._ref} title={item.name}/>
     })}
    </ScrollView>
  );
};

export default Categories;
