import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter } from "../actions/filters";
import { sortByDate } from "../actions/filters";
import { sortByAmount } from "../actions/filters";
import { setStartDate } from "../actions/filters";
import { setEndDate } from "../actions/filters";

class ExpenseListFilters extends React.Component{
    //prristupamo propsu zahvaljujuci connect()
        state={
            calendarFocused:null
        };
    
    
    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>(
            {
                calendarFocused
            }
        ))
    };

    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    if(e.target.value==='date'){
                       this.props.dispatch(sortByDate());
                    }else if(e.target.value==='amount'){
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={(day)=>false}
                    displayFormat={'D.M.YYYY'}
                    
                    />
        
            </div>
        
        );
    }
}



const mapStatetoProps=(state)=>{
    return{
        filters:state.filters
    };
};

export default connect(mapStatetoProps)(ExpenseListFilters);