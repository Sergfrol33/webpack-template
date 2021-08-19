import React, {useEffect, useState} from 'react';
import Recipes from "./Recipes";

const Home = () => {
    const [data,setData] = useState({})
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(res => setData(res))
    },[setData])
    return (
        <div>
            tete
            <Recipes/>
        </div>
    );
};

export default Home;