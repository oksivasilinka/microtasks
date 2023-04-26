import React from "react";
import {FilterType, MoneyType} from "../App";


type PropsType = {
    onClickFilterHandler: (nameButton: FilterType) => void
    currentMoney: MoneyType[]
}
export const NewComponent = (props: PropsType) => {
    return (
        <ul>
            {props.currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknotes}</span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
    )

}
