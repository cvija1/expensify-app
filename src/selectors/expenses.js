import moment from "moment";
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const createdAtMoment=moment(expense.createdAt);
        const startDateMatch=startDate ? startDate.isSameOrBefore(createdAtMoment,'day'):true;
        const endDateMatch=endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true;
        //cak iako proslijedis '' jer prazan skup je podskup svakog skupa!
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase()); 

        return startDateMatch&&endDateMatch&&textMatch;
//sort uporedjuje sve clanove niza, ako f-ja vrati 1 onda je A poslije B, ako -1 onda obrnuto
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1;
        }else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1;
        }
    });

};

export default getVisibleExpenses;