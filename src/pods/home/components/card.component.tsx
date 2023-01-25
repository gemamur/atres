import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import defaultImage from "@/assets/img/atresmedia.png";
import "./list.scss";
import { Link } from "react-router-dom";

interface Props {
    name: string;
    id: string;
    onEdit: (id:string)=>void;
    onDelete: (id:string)=>void;
}

export const MyCard = (props: Props) => {

    const { name, id, onEdit, onDelete  } = props;


    return (
        <>
        <Card sx={{ minWidth: 345 }}>
            <Link to={`/site/${id}`}>
            <CardContent>
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
            </CardContent>
            </Link>
            
                    
            <CardActions disableSpacing>
                <IconButton aria-label="Editar" onClick={()=>onEdit(id)}>
                <EditIcon />
                </IconButton>
                <IconButton aria-label="Eliminar" onClick={()=>onDelete(id)}>
                <DeleteIcon />
                </IconButton>
            </CardActions> 
        </Card>
        </>
    );
    
}