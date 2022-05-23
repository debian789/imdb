import {
  API_SEARCH,
  API_DETAIL,
  API_TRAILER,
  ACTIVE_MOCK,
} from "../commons/contants";
import { detailMock, mockSeach, trailerMock } from "./mockData";

/**
 * Metodo para consultar peliculas
 * @param {string} search
 * @returns
 */
export const searchMovie = async (search) => {
  try {
    console.log(API_SEARCH(search));
    const data = (await ACTIVE_MOCK)
      ? mockSeach
      : (await fetch(API_SEARCH(search))).json();
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Metodo para realizar consulta de trailers
 * @param {string} id
 * @returns
 */
export const trailerMovie = async (id) => {
  try {
    const data = (await ACTIVE_MOCK)
      ? trailerMock
      : (await fetch(API_TRAILER(id))).json();
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Metodo para consultar detalles de una pelicula
 * @param {string} id
 * @returns
 */
export const detailMovie = async (id) => {
  try {
    const data = (await ACTIVE_MOCK)
      ? detailMock
      : (await fetch(API_DETAIL(id))).json();
    return data;
  } catch (error) {
    throw error;
  }
};
