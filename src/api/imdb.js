import API_HOST from "../commons/contants";
export const searchMovie = async (sarch) => {
  try {
    return await (await fetch(`${API_HOST}${search}`)).json();
  } catch (error) {
    throw error;
  }
};
