import { axiosInstance } from "./config";
import {
    URL_BANNERS,
    URL_SHOW
} from './url'

export const getBannersRequest = 
    () => axiosInstance.get(URL_BANNERS)

export const getShowRequest = (count) => {
    let url = `${URL_SHOW}/${count}`
    return axiosInstance.get(url)
}