import React,{Component} from 'react';
import {Link} from "react-router-dom";
import ViewAdd from '../../form_selector';

export  default  class View extends Component{
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    render(){
        return(
            <div>

                <Link to="/preview">
                <button >Preview</button>
                </Link>


                <button onClick={() => this.showAddItemModal()}>+</button>



                {this.props.state.map(item=>
                    <div> <input type={item.type}></input>
                    <button onClick={() => {this.props.onDeleteItem(item.id)}}>delete</button>
                    </div>

                )}

                {
                    this.state.show ? <ViewAdd closeModal={() => this.closeAddItemModal()}/> : null
                }
            </div>
        )

    }
    showAddItemModal() {
        this.setState({show: true});
    }
    closeAddItemModal() {
        this.setState({show: false});
    }

}