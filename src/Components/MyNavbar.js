import React, { Component } from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';

class MyNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_to_add: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeid = this.makeid.bind(this);
    }

    async add(texto) {
        if(localStorage){
            localStorage.setItem(this.makeid(10), texto);
            window.location.reload();
        }
        else{
            alert('Your browser does not support localStorage');
        }
    }

    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    handleSubmit(texto, event) {
        event.preventDefault();
        if (texto !== undefined && texto.length !== 0) {
            this.add(texto);
        }
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    React To-do List
                </Navbar.Brand>
                <Form inline>
                    <FormControl onChange={(event) => this.setState({ todo_to_add: event.target.value })} type="text" placeholder="Write here" className="mr-sm-2" />
                    <Button variant="outline-success" onClick={(event) => { this.handleSubmit(this.state.todo_to_add, event); }}>Add To-do</Button>
                </Form>
            </Navbar>
        );
    }
}

export default MyNavbar;
