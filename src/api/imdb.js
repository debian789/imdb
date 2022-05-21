import { API_HOST } from "../commons/contants";
export const searchMovie = async (search) => {
  try {
    console.log(`${API_HOST}${search}`);
    const data = await (await fetch(`${API_HOST}${search}`)).json();
    //console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
