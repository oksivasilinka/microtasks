import {useState} from "react";

export type NewComponentType = {
    students: Array<StudentType>
}

export type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentsArray, index) => {
                return (
                    <li key={objectFromStudentsArray.id}>
                        <span>{objectFromStudentsArray.name}</span>
                        <span>{objectFromStudentsArray.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}
type NewTopCarsType = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const TopCars = (props: NewTopCarsType) => {
    return (
        <table>
            <tr>
                <th>number</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                    <tr>
                        <td></td>
                        <td>{objectFromTopCarsArray.manufacturer}</td>
                        <td>{objectFromTopCarsArray.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}

