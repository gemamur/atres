import React, {useState} from "react";
import { SitesEntity } from "../sites.vm";
import { MyCard } from "./card.component";
import "./list.scss";
import  ListPagination from "./list.pagination.component";
import { Grid } from "@mui/material";
import  "animate.css";

interface Props {
    sites: SitesEntity[];
    onEdit: (id:string) => void;
    onDelete: (id:string) => void;
}

export const Home = (props:Props) => {
  const {sites, onEdit, onDelete} = props;
  const [totalPages, setTotalPages] = React.useState(1);
  const [itemsPage] = React.useState(8);
  const [currentPage, setCurrentPage] = React.useState(1);
  const lastItemToShow = currentPage * itemsPage;
  const firstItemToShow = lastItemToShow - itemsPage;

  const showItems = sites.slice(firstItemToShow,lastItemToShow);

    React.useEffect(() => {
      setTotalPages(Math.ceil(sites.length/itemsPage));
    }, [sites]);

  return (
    <>
    <div className="grid-content">
        {showItems.map(site=>(
            <div key={site.key} className="item animate__animated animate__fadeIn">

        <MyCard name={site.name} id={site._id} onEdit={onEdit} onDelete={onDelete} />

            </div>
        ))}
    </div>
    <div>
        <Grid container direction="row" justifyContent="center" alignItems="center" padding="1rem">
          <ListPagination pages={totalPages} setCurrentPage={setCurrentPage}/>
        </Grid>
    </div>
    
    </>
    
    
  );
}