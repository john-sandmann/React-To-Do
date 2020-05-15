import React, { Component } from 'react';
import { ListGroup, Button, FormControl } from 'react-bootstrap';

import MyCalendar from './MyCalendar';

class MyTodos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        }

        this.allStorage = this.allStorage.bind(this);
        this.renderTodo = this.renderTodo.bind(this);
        this.download = this.download.bind(this);
    }

    allStorage() {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            try {
                let obj = JSON.parse(localStorage.getItem(keys[i]));
                values.push({ id: keys[i], texto: obj.texto, status: obj.status, date: obj.date });
            }
            catch {
                try {
                    let obj = JSON.parse(localStorage.getItem(keys[i]));
                    values.push({ id: keys[i], texto: obj.texto, status: obj.status, date: obj.date });
                } catch (e) {
                    let texto = localStorage.getItem(keys[i]);
                    values.push({ id: keys[i], texto: texto });
                }
            }
        }

        return values;
    }

    numberOfTasks = () => Object.keys(localStorage).length;

    componentDidMount() {
        if (localStorage) {
            this.setState({
                todos: this.allStorage(),
            });
        }
    }

    del(id) {
        localStorage.removeItem(id);

        window.location.reload();
    }

    changeStatus(id, newStatus) {
        let item = JSON.parse(localStorage.getItem(id));
        item.status = newStatus;
        item = JSON.stringify(item);
        localStorage.setItem(id, item);
    }

    download = () => {

        let todos = [];
        let keys = Object.keys(localStorage);
        let i = keys.length;

        while(i--) {
            todos.push(JSON.parse(localStorage.getItem(keys[i])));
            console.log(todos);
        }

        const htmlBlob = new Blob([JSON.stringify(todos)], { type: 'text/plain;charset=utf-8' });
        const url = window.URL.createObjectURL(htmlBlob);

        const a = document.createElement("a");
        a.style = "display: none";
        a.href = url;
        a.download = 'json.txt';
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
    }

    renderTodo = (todo, index) => {

        var renderText = (texto, date) => {
            if (date) {
                return `${texto} (${date})`;
            }
            else {
                return texto;
            }
        }

        var renderStatus = (status) => {
            switch (status) {
                case 'urgent':
                    return <div style={{ 'marginLeft': '30px', 'backgroundColor': 'rgb(179, 0, 0)', 'width': '30px', 'height': '30px', 'borderRadius': '50%' }}></div>
                case 'medium':
                    return <div style={{ 'marginLeft': '30px', 'backgroundColor': 'rgb(209, 209, 0)', 'width': '30px', 'height': '30px', 'borderRadius': '50%' }}></div>
                case 'noturgent':
                    return <div style={{ 'marginLeft': '30px', 'backgroundColor': 'rgb(5, 160, 44)', 'width': '30px', 'height': '30px', 'borderRadius': '50%' }}></div>
            }
        }

        var renderSelect = (status) => {
            switch (status) {
                case 'urgent':
                    return <FormControl style={{ 'width': '100px', 'marginLeft': '30px' }} as="select" custom onChange={(event) => { this.changeStatus(todo.id, event.target.value); window.location.reload() }}>
                        <option selected id="urgent" value="urgent" >Urgent</option>
                        <option id="medium" value="medium" >Medium</option>
                        <option id="noturgent" value="noturgent" >Not urgent</option>
                    </FormControl>
                case 'medium':
                    return <FormControl style={{ 'width': '100px', 'marginLeft': '30px' }} as="select" custom onChange={(event) => { this.changeStatus(todo.id, event.target.value); window.location.reload() }}>
                        <option id="urgent" value="urgent" >Urgent</option>
                        <option selected id="medium" value="medium" >Medium</option>
                        <option id="noturgent" value="noturgent" >Not urgent</option>
                    </FormControl>
                case 'noturgent':
                    return <FormControl style={{ 'width': '100px', 'marginLeft': '30px' }} as="select" custom onChange={(event) => { this.changeStatus(todo.id, event.target.value); window.location.reload() }}>
                        <option id="urgent" value="urgent" >Urgent</option>
                        <option id="medium" value="medium" >Medium</option>
                        <option selected id="noturgent" value="noturgent" >Not urgent</option>
                    </FormControl>
            }
        }

        if (todo.status) {
            return <ListGroup.Item key={index}>

                <div style={{ 'display': 'flex', 'flexDirection': 'row' }} className="align">
                    {renderText(todo.texto, todo.date)}
                    {renderStatus(todo.status)}
                    {renderSelect(todo.status)}
                </div>

                <Button
                    className='delete_button'
                    variant='danger'
                    style={{
                        'float': 'right'
                    }}
                    onClick={() => { this.del(todo.id) }}
                >
                    X
                </Button>

            </ListGroup.Item>
        }
        else {
            return <ListGroup.Item key={index}>
                {todo.texto}

                <Button
                    className='delete_button'
                    variant='danger'
                    style={{
                        'float': 'right'
                    }}
                    onClick={() => { this.del(todo.id) }}
                >
                    X
        </Button>

            </ListGroup.Item>
        }
    }

    render() {
        return (
            <div className="todos">
                <div style={{
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'flexDirection': 'column',
                    'textAlign': 'center',
                    'alignItems': 'center',
                }} className="center">
                    <h3 style={{ 'padding': '20px' }}>{this.numberOfTasks()} tasks ramaining</h3>
                    <MyCalendar tasks={this.state.todos} />
                    <button onClick={this.download}>Download your to-dos to use them in another device</button>
                </div>
                <ListGroup>
                    {this.state.todos.map((todo, index) => {
                        return this.renderTodo(todo, index);
                    })}
                </ListGroup>
            </div >
        );
    }
}

export default MyTodos;
