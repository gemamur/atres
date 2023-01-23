import axios from "axios";
import { SitesEntityApi } from "./sites.api.model";

const url = process.env.API_BASE_URL;

export const getList = ():Promise<SitesEntityApi[]> => {
    return axios.get(`${url}/sites`)
      .then(res => {
        return res.data;
      });
}