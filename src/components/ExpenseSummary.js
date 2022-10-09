import getVisibleExpenses from "../selectors/expenses";
import getExpenseTotal from "../selectors/expense-total";
import numeral from "numeral";
import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
const ExpenseSummary=({expenseCount,expensesTotal})=>{
    const expenseWord=expenseCount===1?'expense':'expenses';
    return(
        <div className="page-header">
             <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{numeral(expensesTotal/100).format('$0,0.00')}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add expense</Link>
                </div>
            </div>
        </div>
    )
};
    

const mapStateToProps=(state)=>{
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    return{
        expenseCount:visibleExpenses.length,
        expensesTotal:getExpenseTotal(visibleExpenses)
    };  
}
export default connect(mapStateToProps)(ExpenseSummary);
