import React from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';


const authenticationReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN" :
            return action.isSucceed
        default:
            return state;
    }
};

const store = createStore(combineReducers({
    isAuthenticated: authenticationReducer
}));

const Home = () => (<div>Home Home</div>);
const Aboutus = () => (<div>About us</div>);//记忆一下，这里如果是花括号就需要return，如果是()就不需要return。
const ClassList = ({logged}) => (
    <div>classList
</div>
);
const Login = ({onLoggin, logged}) => (
    <div style={{margin: `20%`}}>
        {
            !logged && <div>
                <label for="username">Username</label>
                <input ref={(ref) => this.username = ref} id="username"/>
                <label for="password">password</label>
                <input type="password" ref={(ref) => this.password = ref} id="password"/>
                <button onClick={() => {
                    if (this.username.value === 'tw' && this.password.value === 'tw') {
                        // debugger;
                        onLoggin();
                    }
                }}>ok
                </button>
            </div>
        }
        {
            logged && <Redirect to="/ClassList" />
        }
    </div>
);
const mapStateToProps = ({isAuthenticated}) => ({
    logged: isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    onLoggin: () => dispatch({type: 'LOGIN', isSucceed: true})
});


const withAuthentication = (WrappedComponent)=>{
    const View =(props) =>{
        const { logged,...rest } =props;
        return(
            <div>
                {!logged && <Redirect to="/Login"/>}
                {logged && <WrappedComponent {...rest}/>}
            </div>
        )
    }

    return connect(mapStateToProps)(View);
    }


const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
const ConnectedClassList =withAuthentication(ClassList);


export default () => (
    <Provider store={store}>
        {/*这个provider存在感很低，就是直接使用这个store*/}
        <BrowserRouter>
            <div>
                <Link to="/" style={{margin: 20}}>Home</Link>
                <Link to="/Aboutus" style={{margin: 20}}>About Us</Link>
                <Link to="/ClassList" style={{margin: 20}}>ClassList</Link>
                <Link to="/Login" style={{margin: 20}}>Login</Link>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Aboutus' component={Aboutus}/>
                    <Route exact path='/ClassList' component={ConnectedClassList}/>
                    <Route exact path='/Login' component={ConnectedLogin}/>

                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
)