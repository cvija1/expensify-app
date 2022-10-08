import { connect } from 'react-redux';
import React from 'react';
import { startEditExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense } from '../actions/expenses';
const EditExpensePage=(props)=>(
        <div>
        <h1>Edit expense</h1>
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
            props.dispatch(startEditExpense(props.expense.id,expense));
            props.history.push("/");
        }}/>
        <button onClick={()=>{
            props.dispatch(startRemoveExpense({id:props.expense.id}));
            props.history.push("/");
        }}>Remove</button>
    </div>
);
//ovaj props pristupa istom propsu kao i EditExpensePage
const mapStateToProps=(state,props)=>{
    return{
        expense:state.expenses.find((expense)=>{
            return expense.id===props.match.params.id;
        })
    }
};
export default connect(mapStateToProps)(EditExpensePage);