import React, { Component } from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';

class MyNavbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_to_add: '',
            status: 'urgent',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeid = this.makeid.bind(this);
    }

    async add(texto, status) {
        if(localStorage){
            localStorage.setItem(this.makeid(10), JSON.stringify({texto: texto, status: status}));
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

    handleSubmit(texto, status, event) {
        event.preventDefault();
        if (texto !== undefined && texto.length !== 0) {
            this.add(texto, status);
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
                    <FormControl as="select" custom onChange={(event) => { this.setState({status: event.target.value}); }}>
                        <option id="urgent" value="urgent" >Urgent</option>
                        <option id="medium" value="medium" >Medium</option>
                        <option id="noturgent" value="noturgent" >Not urgent</option>
                    </FormControl>
                    <Button style={{ marginLeft: "10px"}} variant="outline-success" onClick={(event) => { this.handleSubmit(this.state.todo_to_add, this.state.status, event); }}>Add To-do</Button>
                </Form>
            </Navbar>
        );
    }
}

export default MyNavbar;
