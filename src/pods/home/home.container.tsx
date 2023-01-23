import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getList } from "./api/home.api";
import { mapSiteEntityListToVM } from "./sites.mapper";
import { SitesEntity } from "./sites.vm";
import { Home } from "./components/list.component";
import { CreateSite } from "./components/create.component";
import { SwitchRoutes } from "@/core/router/routes";

export const HomeContainer = () => {

    let navigate = useNavigate();
    const [sites, setSites] = useState<SitesEntity[]>([]);

    useEffect(()=> {
        getList().then(mapSiteEntityListToVM).then(setSites);
    },[]);

    const handleCreateSite = () => {
        navigate(SwitchRoutes.create);
    }

    return (
        <>
        <CreateSite onCreateSite={handleCreateSite} />
        <Home sites={sites} />
        </>
    );
}