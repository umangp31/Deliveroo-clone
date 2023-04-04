// import {defineField, defineType} from 'sanity'

import { defineField } from "sanity";

export default ({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: "name",
      title: "Category name",
      type: 'string',
      validation:(Rule)=>Rule.required(),
    }),
    defineField({
      name:"image",
      type:"image",
      title:"Image of Category",
    })
  ],
})
