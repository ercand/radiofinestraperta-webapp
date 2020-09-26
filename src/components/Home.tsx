import React, { useEffect, useState } from 'react';
import ShowMoreSpinnerLoad from './ShowMoreSpinnerLoad';


const Home = () => {
    const [useUno, setUseUno] = useState(0);
    const [useDue, setUseDue] = useState<number[]>([]);
    const [maxElement, setMaxElement] = useState(0);
    const [caricamento, setCaricamento] = useState(false);

    useEffect(() => {
        setUseDue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        const caricaLento =  async ()=> {
            
        }
        console.log("use effect 1")
    },[])

/*
    useEffect(() => {
        console.log("use effect 2")
     //   setUseDue(useDue + 1);
    })*/

    const ShowMore = () => {
        setCaricamento(true)
        setTimeout(() => {
            console.log("timer")
            setMaxElement(maxElement + 2);
            setCaricamento(false);
        }, 2000)
    }
    
    return (
        <div className="">
            <h1>Element rendered {maxElement}</h1>
            {useDue.slice(0, maxElement).map((el, idx) => {
                return (
                    <div key={idx}>el</div>
                )
            })}
            <p>{caricamento && "Loading"}</p>
            <p onClick={ShowMore}>Show more</p>
            <ShowMoreSpinnerLoad isLoading={caricamento} loaderSize={3} />
        </div>
    );
}

export default Home;