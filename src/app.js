import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';





const store=configureStore();



const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
let hasRendered=false;
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered=true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));



//provjeraa da li je korisnik ulogovan ili ne
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        //login smjesten tu da bi se svaki put provjeravalo da je neko ulogovan ili ne
        //a ne samo kad se eksplicitno ulogujes ili izlogujes
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname==='/'){
        history.push('/dashboard');
      
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
        
    }
})




