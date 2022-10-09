import React from "react";
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList=(props)=>(
    <div className="content-container">
    <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
    </div> 
    <div className="list-body">
    {
        props.expenses.length===0?(
            <div className="list-item list-item__message">
                <span>No expenses</span>
            </div>
            ):(props.expenses.map((expense)=>{
        //{...expense} ovo kad se ne naglasava sta je podrazumijeva se da je props objekat
        //zato je odradjeno destrukturiranje u expenseItem
        
     return <ExpenseListItem key={expense.id} {...expense}/>
        })
        )
    }
    </div>
        
    </div>
);
//connect je u sustini f-ja koja vraca HOC ali komponenta
//mu se proslijedi poslije 'connect()(komponenta)'
//na ovaj nacin se exportuje HOC a on je u sustini ista 
//komponenta koja ima pristup store-u 
//tacnije ovo sto vraca connect je props komponente
const mapStateToProps=(state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    }
};


//prva zagrada uz connect definisemo sta zelimo iz store-a
//druga zagrada od koje komponente zelimo da napravimo HOC
//odnosno kojoj komponenti zelimo te stvari iz store-a
//da proslijedimo kao props
//OBAVEZNO SE CONNECT FUNKCIJA EXPORTUJE JER ONA PRAVI HOC!

export default connect(mapStateToProps)(ExpenseList);

