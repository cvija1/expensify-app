import { randomUUID } from 'crypto';
import {addExpense,editExpense,removeExpense} from '../../actions/expenses';
import uuid from 'uuid';

test('should setup remove expense action object',()=>{
    const action=removeExpense({id:'123abc'});
    //mora toEqual jer sa toBe on provjerava vrijednost a {}==={}
    // uviijek vraca false
        expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});

test('should setup edit expense action object',()=>{
    const action=editExpense('123abc',{amount:500,description:'Water bill'});
    //mora toEqual jer sa toBe on provjerava vrijednost a {}==={}
    // uviijek vraca false
        expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{amount:500,description:'Water bill'}
    })
});

test('should setup add expense action object with provided values',()=>{
    const action=addExpense({description:'srbija',amount:500,note:"zvezda",createdAt:1000});
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:
        {
        
        description:'srbija',
        amount:500,
        createdAt:1000,
        note:'zvezda'}
    })
});

test('should setup add expense action object with default values',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:undefined
    });
});