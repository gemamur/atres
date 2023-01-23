import React from "react";
import { Grid, Button } from "@mui/material";

interface Props {
    onCreateSite: () => void;
  }

export const CreateSite = (props:Props) => {
    
    const {onCreateSite} = props;
    
    return (
        <>
        <div className="">
            <Grid padding="20px">
                <Button variant="contained" onClick={onCreateSite}>Añadir nuevo sitio</Button>
            </Grid>
        </div>
        </>
    );
}