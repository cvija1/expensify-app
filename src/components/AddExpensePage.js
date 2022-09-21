import { connect } from "react-redux";
import React from "react";
import ExpenseForm from './ExpenseForm';
import { addExpense } from "../actions/expenses";
const AddExpensePage=(props)=>(
    <div>
        <h1>Add expense</h1>
       <ExpenseForm 
       onSubmit={(expense)=>{
        props.dispatch(addExpense(expense));
        //svaka komponenta zahvaljujuci routeru ima u propsu neke metode koje omogucujue
        //laksi prelazak na drugu stranu
        props.history.push("/");
       }}/>
    </div>
);
export default connect()(AddExpensePage);