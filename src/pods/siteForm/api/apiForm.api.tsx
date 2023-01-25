import axios from "axios";
import { SiteEntityApi } from "@/pods/site/api/site.api.model";

const url = process.env.API_BASE_URL;

export const saveSite = async (site: SiteEntityApi): Promise<boolean> => {
  
    if(site._id != ''){
        await axios.put<SiteEntityApi>(`${url}/site/${site._id}`, site);
    }else{
        await axios.post<SiteEntityApi>(`${url}/site`, site);
    }
    return true;
  };