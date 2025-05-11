import React, { useEffect, useState } from 'react';

const FlagQuizGame = () => {
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>{
            const valid = data.filter(c=> c.flag?.png && c.name.common)
            setCountry(valid)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default FlagQuizGame;