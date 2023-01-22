import { SitesEntityApi } from "./api/sites.api.model";
import { SitesEntity } from "./sites.vm";

export const mapSiteEntityListToVM = (sitesEntity: SitesEntityApi[]): SitesEntity[] => {
    return sitesEntity.map(mapSiteEntityToVM);
};

export const mapSiteEntityToVM = (site: SitesEntityApi): SitesEntity => {
    return {
        _id: site._id,
        name: site.name,
        path: site.path,
        key: site.key,
    };
};