import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import expenses from "../fixtures/expenses";
import ExpenseForm from "../../components/ExpenseForm";


test('should render ExpenseForm correctly',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change',()=>{
    const value='New description';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
});
test('should set note on textarea change',()=>{
    const value='New note';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid setup',()=>{
    const value='23.50';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe(value);
});


test('should set amount if invalid setup',()=>{
    const value='12.122';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe("");
});

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy=jest.fn();
   const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
   wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
});
expect(wrapper.state('error')).toBe('');
expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description:expenses[0].description,
    amount:expenses[0].amount,
    note:expenses[0].note,
    createdAt:expenses[0].createdAt
});
});

test('should set new date on date change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    //sa .prop pristupio sam f-ji a poslije mu je proslijedjen arg (moment())
    wrapper.find('SingleDatePicker').prop("onDateChange")(moment());
    expect(wrapper.state('createdAt')).toEqual(moment());
});

test('should set focus on focus change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const focused=true;
    wrapper.find('SingleDatePicker').prop("onFocusChange")({focused});
    expect(wrapper.state('calendarFocused')).toEqual(true);
});
