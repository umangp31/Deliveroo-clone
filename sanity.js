import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { ImageUrlBuilderOptionsWithAliases } from "@sanity/image-url/lib/types/types";

const client = sanityClient({
  projectId: "fj1ofdxr",
  datasert:"production",
  useCdn:true,
  apiVersion:"2021-10-21"
});

const builder=ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);

export default client
