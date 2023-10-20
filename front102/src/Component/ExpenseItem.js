import React from 'react';
import './ExpenseItem.css';
import './ExpenseDate.css';
function ExpenseItem(props) {

    // let title='Car Insurencess'
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
        return (
            <div className='expense-item'>
                {/* <div>{props.date.toISOString()}</div> */}
                <div className='expense-date'>
                    <div className='expense-date__year'>
                        {year}
                    </div>
                    <div className='expense-date__month'>
                        {month}
                    </div>
                    <div className='expense-date__day'>
                        {day}
                    </div>
                </div>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>
                        ${props.amount}
                    </div>
                </div>
            </div>
        );
}

export default ExpenseItem;