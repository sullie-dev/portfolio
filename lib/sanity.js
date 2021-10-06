// /lib/sanity.js
import sanityClient from "@sanity/client";

// I added one called "landing page"
const client = sanityClient({
  projectId: "wvh1x5xm",
  dataset: "production",
  token: process.env.SANITY_TOKEN,
  //   token:
  //     "sk3OG99Y1YdJKHN7wTK4hqxegdTnX1BWAuhpN3ksnUUkFXUrRguOXTXhdrsqTf0DWXXRmQn7xe9w6S39RWYCyC3eu4gQmGVMUzvcT6LTOwfhJsC00ieW2UQt0vizRvsZc0yxNGsjWVqt6ozuIqXC0MiXGdvyP6wSZfq4MmATsqGhLo6hI5uR", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;
