import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";


//const date= new Date();
//const now=moment();
//console.log(now);

export default class ExpenseForm extends React.Component{
 constructor(props){
    super(props);
//ubaceno je u konstruktor da bi mogli da pristupimo propsu
   this.state={
    description:props.expense ? props.expense.description:'',
    note:props.expense ? props.expense.note:'',
    amount:props.expense ? (props.expense.amount/100).toString():'',
    createdAt:props.expense ? moment(props.expense.createdAt ):moment(),
    calendarFocused:false,
    error:''

   };
}

   onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({
        description
        }));
    };
    onNoteChange=(e)=>{
    //Ako pokusas e.target.value direktno u setSTate dolazi do problema
    //ne moze da se uzima vrijednost u callbacku, mora se prije def
        const note=e.target.value;
        this.setState(()=>({
            note
        }))
    };
    onAmountChange=(e)=>{
        const amount=e.target.value;
        
        if(!amount || amount.match( /^\d{1,}(\.\d{0,2})?$/ )){
        this.setState(()=>({amount}));
        }
    };
    onDateChange=(createdAt)=>{
        //da nema ovog if mogao bi se izbrisati date
        if(createdAt){
            this.setState(()=>({createdAt}));
        }
        
    };
    onFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused:focused}));
    };
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'Please provide description and amount!'}));
        }else{
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                //valueOf da se dobije u milisekundama
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    };


    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />

                    <input  type="text" placeholder="Amount" 
                    value={this.state.amount} onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day)=>false}
                    displayFormat={'D.M.YYYY'}
                    />
                    <textarea placeholder="Add a note for your expense (optional)"
                    value={this.state.note} onChange={this.onNoteChange}
                    ></textarea>

                    <button>Add expense</button>
                </form>
            
            </div>
        )
    }
}