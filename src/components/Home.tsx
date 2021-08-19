import React, {useState} from 'react';
import Recipes from "./Recipes";

const Home = () => {
    const [data, setData] = useState({
        text: 'text',
        newText: 'neWtext',
        a: 10
    })
    return (
        <div>
            {Object.entries(data).map((item: any, index) => {

                return (
                    <div key={index} style={{
                        display: "flex",
                        width: '50%',
                        justifyContent: 'space-between'
                    }}>

                        <div>
                            {item[0]}
                        </div>
                        <div>
                            {item[1]}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Home;