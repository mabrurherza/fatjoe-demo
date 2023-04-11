// import sanityClient from "@sanity/client";

// export const client = sanityClient({
//   projectId: "46vjcehd",
//   dataset: "production",
//   apiVersion: "2021-03-25", // use a recent version of the Sanity API
//   useCdn: true, // enable the Content Delivery Network (CDN) for faster responses
// });

import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-03-25",
};

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const sanityClient = createClient(config);
