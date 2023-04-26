import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./Components/NewComponent";
import {Button} from "./Components/Button";

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
    const onClickFilterAll = () => {
        onClickFilterHandler('ALL')
    }
    const onClickFilterRUB = () => {
        onClickFilterHandler('RUB')
    }
    const onClickFilterDollars = () => {
        onClickFilterHandler('Dollars')
    }

    return (
        <>
            <NewComponent onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
            <div style={{marginLeft: '35px'}}>
                <Button name={'ALL'} callBack={onClickFilterAll}/>
                <Button name={'RUB'} callBack={onClickFilterRUB}/>
                <Button name={'Dollars'} callBack={onClickFilterDollars}/>
            </div>

        </>

    )
}

export default App;
