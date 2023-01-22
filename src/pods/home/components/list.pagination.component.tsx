import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./list.scss";

interface Props {
    pages: number;
    setCurrentPage: (page:number)=>void;
}

export default function ListPagination(props:Props) {
    const {pages, setCurrentPage} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, page:number) => {
        setCurrentPage(page);
    }
  return (
    <>
      <div className='pagination-custom-style'>
        <Pagination count={pages} onChange={handleChange} color="standard" variant='outlined' />
      </div>
        
    </>
  );
}
