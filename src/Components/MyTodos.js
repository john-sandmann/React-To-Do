import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

class MyTodos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.allStorage = this.allStorage.bind(this);

    }

    allStorage() {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push({ id: keys[i], texto: [localStorage.getItem(keys[i])]});
        }

        return values;
    }

    async componentDidMount() {
        if(localStorage){
            this.setState({
                todos: this.allStorage(),
            });
        }
    }

    async del(id) {
        localStorage.removeItem(id);

        window.location.reload();
    }

    render() {
        return (
            <ListGroup>
                {this.state.todos.map((todo, index) => {
                    return <ListGroup.Item key={index}>
                        {todo.texto}

                        <Button
                            className='delete_button'
                            variant='success'
                            style={{
                                'float': 'right'
                            }}
                            onClick={() => { this.del(todo.id) }}
                        >
                            X
                        </Button>

                    </ListGroup.Item>
                })}
            </ListGroup>
        );
    }
}

export default MyTodos;
