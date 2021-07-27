import axios from "axios";

export async function getBeerList() {
  return await axios.get("https://api.punkapi.com/v2/beers");
}
