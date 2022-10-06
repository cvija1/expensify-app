import { connect } from "react-redux";
import React from "react";
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from "../actions/expenses";
export class AddExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.startAddExpense(expense);
        //svaka komponenta zahvaljujuci routeru ima u propsu neke metode koje omogucujue
        //laksi prelazak na drugu stranu
        this.props.history.push("/");
       };
       render(){
        return ( 
            
            <div>
            <h1>Add expense</h1>
           <ExpenseForm
           onSubmit={this.onSubmit} />
        </div>)
       }
   


    }
const mapDispatchtoProps=(dispatch)=>({
    startAddExpense: (expense)=>dispatch(startAddExpense(expense))
});
export default connect(undefined,mapDispatchtoProps)(AddExpensePage);