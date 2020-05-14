import React, { Component } from 'react';
import moment from 'moment';

import '../Sass/MyCalendar.scss';

class MyCalendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dateContext: moment(),
            today: moment(),
            showMonthPopup: false,
            showYearPopup: false,
        }

        this.year = () => this.state.dateContext.format('Y');

        this.month = () => this.state.dateContext.format('MMMM');

        this.monthNumber = () => this.state.dateContext.format('M');

        this.daysInMonth = () => this.state.dateContext.daysInMonth();

        this.currentDate = () => this.state.dateContext.get('date');

        this.currentDay = () => this.state.dateContext.format('D');

        this.firstDayOfMonth = () => moment(this.state.dateContext).startOf('month').format('d');

        this.weekdays = moment.weekdays();

        this.weekdaysShort = moment.weekdaysShort();

        this.months = moment.months();
    }

    render() {

        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className='week-day'>{day}</td>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(
                <td key={i * 80} className='emptySlot'>
                    {""}
                </td>
            );
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? 'day current-day' : 'day');
            var tooltiptext = null;
            let tasks = [];
            if (this.props.tasks) {
                this.props.tasks.map((task, i) => {
                    if (task.date) {
                        if (task.date.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
                            if (task.date.split('/')[0] == d && task.date.split('/')[1] == this.monthNumber() && task.date.split('/')[2] == this.year()) {
                                if(!className.includes(' taskday')){
                                    className += ' taskday'
                                }
                                tasks.push(task.texto);
                                tooltiptext = <span className='tooltiptext'>{tasks.map((task) => {
                                    return task + ' | ';
                                })}</span>
                            }
                        }
                    }
                });
            }
            daysInMonth.push(
                <td key={d} className={className}>
                    {className == 'day current-day taskday' || className == 'day taskday' ? tooltiptext : <span className='tooltiptext'>Nothing for this day</span>}
                    <span>{d}</span>
                </td>
            );
        }

        var totalSlots = [...blanks, ...daysInMonth]
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
                if (i === totalSlots.length - 1) {
                    let insertRow = cells.slice();
                    rows.push(insertRow);
                }
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <tr key={i * 100}>
                    {d}
                </tr>
            )
        });

        return (
            <div className='calendar-container'>
                <table className='calendar'>
                    <thead>
                        <tr className='calendar-header'>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyCalendar;