import React, { useState, useEffect, useContext } from "react";
import { getSite } from "../site/api/site.api";
import {SiteForm} from "./components/siteform.component";
import { createEmptySiteForm, SiteFormModel } from "./siteForm.vm";
import { useNavigate, useParams } from "react-router";
import { saveSite } from "./api/apiForm.api";
import { SwitchRoutes } from "@/core/router/routes";
import { replace } from "formik";


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


    const handleSave = (site:SiteFormModel) => {
        saveSite(site);
        navigate(SwitchRoutes.root,{ replace: true});
    }
    

      
        return (
            <SiteForm site={site} onSave={handleSave}/>
        );
      
    
}