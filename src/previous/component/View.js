import React,{Component} from 'react';
import {Link} from "react-router-dom";




export  default  class View extends Component{
    render(){
        return(
            <div>
                <Link to="/">
                    <button >Edit</button>
                </Link>

                {this.props.state.map(item=>
                    <div> <input type={item.type} readOnly={true} style={{color:'#C0C0C0'}}></input></div>
                )}
            </div>
        )

    }
}