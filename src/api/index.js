/*
包含多个应用请求*/
import ajax from "./ajax";

export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

export const reqFoodTypes = () => ajax('/index_category')

export const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})