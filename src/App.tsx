import React from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button3Foo = () => {
        console.log("I'm stupid button")
    }

    // const myFirstSubscriber = () => {
    //     console.log("Hello I'm Vasya!")
    // }
    //
    // const mySecondSubscriber = () => {
    //     console.log("Hello, I'm Ivan!")
    // }

    // const onClickHandler=(name: string) => {
    //     console.log("Hello, " + name)
    // }

    // const foo1 = () => {
    //     //ничего не передавать, но в консоли 100200
    //     console.log(100200)
    // }
    //
    // const foo2=(num: number) => {
    //     //передать цифру 100200
    //     console.log(num)
    // }
    return (

        <div className={"App"}>
            {/*<button onClick={(event) => {console.log("Hello!")}}> MyYouTubeChanel-1</button>*/}
            {/*<button onClick={()=>onClickHandler("Vasya")}> MyYouTubeChanel-2</button>*/}
            {/*<button onClick={()=>onClickHandler("Ivan")}> MyYouTubeChanel-3</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=>foo2(100200)}>2</button>*/}

            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("i'm Vasya", 21, "live in Minsk")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("i'm Ivan", 23)}/>
            <Button name={"MyYouTubeChanel-3"} callBack={Button3Foo}/>

        </div>
    )
}

export default App;
