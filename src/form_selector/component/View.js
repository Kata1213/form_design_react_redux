import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import PropTypes from 'prop-types';


export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {newType: "text"};
    }

    render(){
        const {items, onAddItem, closeModal} = this.props
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>选一个呗</Modal.Title>
                    </Modal.Header>

                    <div onChange={(event) => this.chooseType(event)}>
                        <input type="radio" name="type" value="text" defaultChecked/>文本Text<br/>
                        <input type="radio" name="type" value="date"/>日历Date<br/>
                    </div>

                    <Modal.Footer>

                        <Button onClick={() => {
                            onAddItem(this.getNewItem(items));
                            closeModal()
                        }}>Add</Button>

                        <Button onClick={() => closeModal()}>Close</Button>

                    </Modal.Footer>
                </Modal.Dialog>
            </div>

        )
    }

    chooseType(event) {
        this.setState({newType: event.target.value});
    }

    getNewItem(items) {
        const Id = items.length+1;
        this.setState({show: false});
        return {id:Id, type: this.state.newType}
    }


}


View.propTypes = {
    items: PropTypes.array,
    onAddItem: PropTypes.func,
    closeModal: PropTypes.func,
}