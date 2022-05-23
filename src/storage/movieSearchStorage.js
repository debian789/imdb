import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY_STORAGE_SEARCH } from "../commons/contants";

/**
 * Permite gurdar los datos de la pelicula en LocalStorage
 * @param {*} value
 */
export const saveSearchStorage = async (value) => {
  try {
    value = JSON.stringify(value);
    await AsyncStorage.setItem(KEY_STORAGE_SEARCH, value);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Permite obtener los datos de peliculas de localStorage
 * @returns
 */
export const getSearchStorage = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY_STORAGE_SEARCH);
    debugger;
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    console.error(error);
  }
};
