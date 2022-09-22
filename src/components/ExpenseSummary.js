import getVisibleExpenses from "../selectors/expenses";
import getExpenseTotal from "../selectors/expense-total";
import numeral from "numeral";
import { connect } from "react-redux";
import React from "react";
const ExpenseSummary=({expenseCount,expensesTotal})=>{
    const expenseWord=expenseCount===1?'expense':'expenses';
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {numeral(expensesTotal/100).format('$0,0.00')}</h1>
        </div>
    )
};
    

const mapStateToProps=(state)=>{
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    return{
        expenseCount:visibleExpenses.length,
        expensesTotal:getExpenseTotal(visibleExpenses)
    };  
}
export default connect(mapStateToProps)(ExpenseSummary);
