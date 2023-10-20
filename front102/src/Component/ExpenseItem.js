import React from 'react';
import './ExpenseItem.css';
function ExpenseItem(props) {

    // let title='Car Insurencess'
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const year=props.date.getFullYear();
    const day=props.toLocaleString('en-US',{day:'2-digit'});
        return (
            <div className='expense-item'>
                {/* <div>{props.date.toISOString()}</div> */}
                <div>
                    <div>
                        {year}
                    </div>
                    <div>
                        {month}
                    </div>
                    <div>
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