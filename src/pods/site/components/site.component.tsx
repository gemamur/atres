import React from "react";
import { SiteModel } from "../site.vm";
import "./site.scss";
import logo from "@/assets/img/tres.jpg";
import { Link } from "react-router-dom";
import 'animate.css';


interface Props{
    site:SiteModel
}
export const Site = (props: Props) =>{

    const {site} = props;

    return (
        <>
            <div className="site">
                <div className="image animate__animated animate__fadeInLeft">
                    <img src={logo} alt={site.name} />
                </div>
                <div className="data">
                    <h1 className="title">{site.name}</h1>
                    <div className="description">Descripción: {site.description}</div>
                    <div className="link">Visita la web: <a href={site.path}>{site.path}</a></div>
                    
                </div>    
            </div>  
        </>
    );

}