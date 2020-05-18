import React, { Component } from 'react';
import { ListGroup, Button, FormControl, Alert } from 'react-bootstrap';

import MyCalendar from './MyCalendar';

class MyTodos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],

            applyFilter: false,
            filterDate: '',
            allDates: this.allDates(),
        }

        this.allStorage = this.allStorage.bind(this);
        this.renderTodo = this.renderTodo.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.allDates = this.allDates.bind(this);
        this.wrapURLs = this.wrapURLs.bind(this);
    }

    allDates = () => {
        var dates = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            try {
                let obj = JSON.parse(localStorage[keys[i]]);
                if (obj.date) {
                    dates.push(obj.date);
                }
            } catch (e) { }
        }

        return dates;
    }

    allStorage() {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            try {
                let obj = JSON.parse(localStorage.getItem(keys[i]));
                if (this.state.applyFilter) {
                    if (this.state.filterDate == obj.date) {
                        values.push({ id: keys[i], texto: obj.texto, status: obj.status, date: obj.date });
                    }
                }
                else {
                    values.push({ id: keys[i], texto: obj.texto, status: obj.status, date: obj.date });
                }
            }
            catch {
                try {
                    let obj = JSON.parse(localStorage.getItem(keys[i]));
                    if (this.state.applyFilter) {
                        if (this.state.filterDate == obj.date) {
                            values.push({ id: keys[i], texto: obj.texto, status: obj.status, date: obj.date });
                        }
                    }
                    else {
                        values.push({ id: keys[i], texto: obj.texto, status: obj.status, date: obj.date });
                    }
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

    wrapURLs = (text, new_window) => {
        var url_pattern = /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/ig;
        var target = (new_window === true || new_window == null) ? '_blank' : '';

        return text.replace(url_pattern, function (url) {
            var protocol_pattern = /^(?:(?:https?|ftp):\/\/)/i;
            var href = protocol_pattern.test(url) ? url : 'http://' + url;
            return '<a href="' + href + '" target="' + target + '">' + url + '</a>';
        });
    };

    renderTodo = (todo, index) => {

        var renderText = (texto, date) => {
            if (date) {
                return this.wrapURLs(texto) + `(${date})`;
            }
            else {
                return this.wrapURLs(texto);
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
                    <span dangerouslySetInnerHTML={{ __html:renderText(todo.texto, todo.date)}}></span>
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
                <span dangerouslySetInnerHTML={{ __html:renderText(todo.texto, todo.date)}}></span>

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

    applyFilter = (date) => {
        if (date == this.state.filterDate) {
            this.setState({
                filterDate: date,
                applyFilter: false
            }, () => {
                this.setState({ todos: this.allStorage() });
            });
        }
        else {
            this.setState({
                filterDate: date,
                applyFilter: true
            }, () => {
                this.setState({ todos: this.allStorage() });
            });
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
                    <h6 style={{ 'padding': '20px' }}>Any doubts or suggestions please contact <span style={{ 'fontWeight': '900' }}>potato.clicker28@gmail.com</span></h6>
                    <h3 style={{ 'padding': '20px' }}>{this.numberOfTasks()} tasks ramaining</h3>
                    <MyCalendar tasks={this.state.allDates} onClickDay={this.applyFilter} />
                    <Alert variant="info">
                        UPDATE: Now if you click on a day, instead of showing a tooltip, it filters all tasks by date
                    </Alert>
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
