import { ICity } from '../utils/types';
export const updateCity = (city:ICity):any => ({
  type: 'CITY_UPDATED',
  payload: city
});
export const updateWeatherList = (weatherList:any):any => ({
  type: 'WEATHER_LIST_UPDATED',
  payload: weatherList
});