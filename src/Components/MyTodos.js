import React, { Component } from 'react';
import { ListGroup, Button, FormControl } from 'react-bootstrap';

class MyTodos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],

            timeout: null,
            shouldSendNotification: false,
        }

        this.allStorage = this.allStorage.bind(this);
        this.renderTodo = this.renderTodo.bind(this);
    }

    allStorage() {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            try {
                let obj = JSON.parse(localStorage.getItem(keys[i]));
                values.push({ id: keys[i], texto: obj.texto, status: obj.status });
            }
            catch {
                let texto = localStorage.getItem(keys[i]);
                values.push({ id: keys[i], texto: texto });
            }
        }

        return values;
    }

    componentDidMount() {
        if (localStorage) {
            this.setState({
                todos: this.allStorage(),
            });
        }

        Notification.requestPermission().then((response) => {
            if ( response === 'granted') {
                this.setState({ timeout: [setTimeout(() => {
                    if(this.state.shouldSendNotification){
                        new Notification("Come here do your todos!")
                    }
                    else{
                        this.setState({
                            shouldSendNotification: true
                        });
                    }
                }, 900000)] });
            }
        });
    }

    componentWillUnmount() {
        if (this.state.timeout) {
            clearTimeout(this.state.timeout);
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

    renderTodo = (todo, index) => {

        var renderStatus = (status) => {
            console.log(status);
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
                    {todo.texto}
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
            <ListGroup>
                {this.state.todos.map((todo, index) => {
                    return this.renderTodo(todo, index);
                })}
            </ListGroup>
        );
    }
}

export default MyTodos;