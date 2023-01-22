import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { SitesEntity } from "../sites.vm";
import defaultImage from "@/assets/img/atresmedia.png";
import "./list.scss";

interface Props {
    name: string;
}

export const MyCard = (props: Props) => {

    const { name } = props;
    return (
        <>
            <Card sx={{ minWidth: 345 }}>
        <CardHeader
            
            title={name}
            
        />
        <div className="cardmedia">
        <CardMedia
            component="img"
            image={defaultImage}
            alt={name}
        />
        </div>
                
        <CardActions disableSpacing>
            <IconButton aria-label="Editar">
            <EditIcon />
            </IconButton>
            <IconButton aria-label="share">
            <DeleteIcon />
            </IconButton>
        </CardActions> 
        </Card>
        </>
    );
    
}