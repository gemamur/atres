import React, { useState, useEffect, useContext } from "react";
import { getSite } from "../site/api/site.api";
import {SiteForm} from "./components/siteform.component";
import { createEmptySiteForm, SiteFormModel } from "./siteForm.vm";
import { useNavigate, useParams } from "react-router";
import { saveSite } from "./api/apiForm.api";
import { SwitchRoutes } from "@/core/router/routes";


export const SiteFormContainer = () => {
    const [site, setSite] = useState(createEmptySiteForm());

    const {id} = useParams();
    const navigate = useNavigate();

    const handleGetSite = async () => {
        const SiteData = await getSite(id);
        setSite(SiteData);
    }

    useEffect(()=>{
        if(id){
            handleGetSite();
        }
      },[]);


    const handleSave = async (site:SiteFormModel) => {
        await saveSite(site);
        navigate(SwitchRoutes.root);
    }
    

      
        return (
            <SiteForm site={site} onSave={handleSave}/>
        );
      
    
}