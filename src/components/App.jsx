
import '../style/index.scss'
import {useState} from "react";
import Recipes from "./Recipes";
import '../style/_hero.scss'
import woman from '../assets/people.png'
const App = () => {
    const [count,setCount] = useState(0)
    return (
        <section>
            <main>
                <img src={woman} alt=""/>
                <section>
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <h1>{count} </h1>
                </section>
            </main>
            <Recipes/>
        </section>
    )
}

export default App