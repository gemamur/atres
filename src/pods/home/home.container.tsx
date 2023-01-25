import React, {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { deleteSite, getList } from "./api/home.api";
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

    const handleEdit = (id:string) => {
        navigate(`/edit-site/${id}`);
    }

    const handleDelete = async(id:string) => {
        await deleteSite(id);
    }

    return (
        <>
        <CreateSite onCreateSite={handleCreateSite} />
        <Home sites={sites} onEdit={handleEdit} onDelete={handleDelete} />
        </>
    );
}