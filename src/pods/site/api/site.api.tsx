import axios from "axios";
import { SiteEntityApi } from "./site.api.model";

const url = process.env.API_BASE_URL;

export const getSite = (id:string):Promise<SiteEntityApi> => {
     return axios.get(`${url}/site/${id}`)
      .then(res => {
        return res.data;
      });
}