import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { getSite } from "./api/site.api";
import { mapSiteApiToVM } from "./site.mapper";
import { createEmptySite, SiteModel } from "./site.vm";
import { Site } from "./components/site.component";

export const SiteContainer = () => {

    const [ site, setSite ] = useState<SiteModel>(createEmptySite());
    const {id} = useParams();

    useEffect(()=>{
        getSite(id).then(mapSiteApiToVM).then(setSite);
    }, [id]);

    console.log(site);

    return (
        <>
            <Site site={site} />
        </>
    );
}