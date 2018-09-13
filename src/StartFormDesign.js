import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"
import store from "./store"
import Preview from "./previous"
import FormDesign from "./form_design"

export default class StartFormDesign extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={FormDesign}/>
                        <Route path="/preview" component={Preview}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

