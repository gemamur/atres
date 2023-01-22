import React from "react";
import "./header.layout.scss";
import logo from "@/assets/img/atresmedia.png";
import { Link } from "react-router-dom";
import { SwitchRoutes }  from "@/core/router/routes";

export const HeaderLayout = () => {
    return (
        <>
            <header>
                <Link to={SwitchRoutes.root}><img src={logo} alt="logo atresmedia" /></Link>
            </header>
        </>
    );
}