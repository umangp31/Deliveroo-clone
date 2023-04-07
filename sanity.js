import  sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import ImageUrlBuilderOptionsWithAliases  from "@sanity/image-url";

const client = sanityClient({
  projectId: "fj1ofdxr",
  dataset:"deliveroo-clone",
  useCdn:false,
  apiVersion:"2022-02-01"
});

const builder=imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);

export default client
