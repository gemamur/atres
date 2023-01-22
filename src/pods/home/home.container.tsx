import React, {useEffect, useState} from "react";
import { getList } from "./api/home.api";
import { mapSiteEntityListToVM } from "./sites.mapper";
import { SitesEntity } from "./sites.vm";
import { Home } from "./components/list.component";
import { CreateSite } from "./components/create.component";

export const HomeContainer = () => {

    const [sites, setSites] = useState<SitesEntity[]>([]);

    useEffect(()=> {
        getList().then(mapSiteEntityListToVM).then(setSites);
    },[])

    return (
        <>
        <CreateSite />
        <Home sites={sites} />
        </>
    );
}