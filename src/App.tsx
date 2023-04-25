import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./Components/NewComponent";

export type FilterType = 'ALL' | 'RUB' | 'Dollars'

export type MoneyType = {
    banknotes: string
    value: number
    number: string
}

function App() {

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUB', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUB', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUB', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState('all')

    let currentMoney = money

    if (filter === 'RUB') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'RUB')
    } else if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <NewComponent onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
        // <>
        //     <ul>
        //         {currentMoney.map((objFromMoneyArr, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span>{objFromMoneyArr.banknots}</span>
        //                     <span>{objFromMoneyArr.value}</span>
        //                     <span>{objFromMoneyArr.number}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft: '35px'}}>
        //         <button onClick={() => onClickFilterHandler('ALL')}>ALL</button>
        //         <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
        //         <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
        //     </div>
        // </>


    )
}

export default App;
