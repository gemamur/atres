import { SiteEntityApi } from "./api/site.api.model";
import { SiteModel } from "./site.vm";

export const mapSiteEntityApiToVM = (siteEntity: SiteEntityApi[]): SiteModel[] => {
    return siteEntity.map(mapSiteApiToVM);
};

export const mapSiteApiToVM = (site: SiteEntityApi): SiteModel => {
    return {
        _id: site._id,
        name: site.name,
        path: site.path,
        description: site.description,
    };
};