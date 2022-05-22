import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY_STORAGE_SEARCH } from "../commons/contants";

export const saveSearchStorage = async (value) => {
  try {
    value = JSON.stringify(value);
    await AsyncStorage.setItem(KEY_STORAGE_SEARCH, value);
  } catch (error) {
    console.log(error);
  }
};

export const getSearchStorage = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY_STORAGE_SEARCH);
    debugger;
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    console.log(error);
  }
};
