import { connect } from 'react-redux';
import React from 'react';
import { startEditExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense } from '../actions/expenses';
const EditExpensePage=(props)=>(
        <div>
        <div className="page-header">
                     <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">
        <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
            props.dispatch(startEditExpense(props.expense.id,expense));
            props.history.push("/");
        }}/>
        
        <button className='button button--remove' onClick={()=>{
            props.dispatch(startRemoveExpense({id:props.expense.id}));
            props.history.push("/");
        }}>Remove Expense</button>
            </div>

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