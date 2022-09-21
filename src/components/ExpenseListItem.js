import React from "react";
import { Link } from "react-router-dom";
export const ExpenseListItem=({id,description,amount,createdAt})=>(
    <div>
        <Link to={`/edit/${id}`}><p>{description}</p></Link>
        <p>{amount} - {createdAt}</p>
        
    </div>
);
export default ExpenseListItem;
//kad je prva zagrada prazna oonda se uzima samo dispatch() iz store-a
