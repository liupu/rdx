import React, { Component } from 'react';
class Header extends Component{
    addTodo(){
        const txtValue = this.refs.txt.value;
        txtValue ? this.props.actions.addFun(txtValue):'';
        this.refs.txt.value='';
    }
    handleKeyDown(event){
        if(event.keyCode===13){
            this.addTodo();
        }
    }
    render(){
        return (
            <div>
                <input type='text' ref='txt' onKeyDown={this.handleKeyDown.bind(this)}/>
                {" "}
                <input type='button' value='添加待做事项' onClick={this.addTodo.bind(this)}/>
            </div>
        )
    }
}


export default Header;