import expensesReducer from "../../reducers/expenses";
import moment from "moment";
const expenses=[{
    id:1,
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0
},{
    id:2,
    description:'Rent',
    note:'',
    amount:190005,
    //subtract je metoda koja omogucuje oduzimanje minuta, sati, dana na odredjeni momenat
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:3,
    description:'Credit card',
    note:'',
    amount:4500,
    //daje rez u milisec
    createdAt:moment(0).add(4,'days').valueOf()
}]

test('should setup defualt state',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});
test('should edit expense',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{description:'Zvezda'}
    }
    const state=expensesReducer(expenses,action);
    expect(state[1].description).toBe('Zvezda');
});
test('should not edit expense if not found id of expense',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:-2,
        updates:{description:'Zvezda'}
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});
test('should add expense',()=>{
    const expense={
        id:'250',
        description:'Srbija',
        note:'',
        amount:300,
        createdAt:1000
    };
    const action={
        
        type:'ADD_EXPENSE',
        expense
        
        
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});
