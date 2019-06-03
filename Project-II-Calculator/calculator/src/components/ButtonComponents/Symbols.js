import React from 'react'
const symbols = [
    {
        symbol: '/'
    },
    {
        symbol: 'X'
    },
    {
        symbol: '-'
    },
    {
        symbol: '+'
    },
    {
        symbol: '='
    }

]


function Symbols(){                                                                                                                                                                                                                                                                                                                      
    return (
        symbols.map(symbol=> {
            return <button className="symbols">{symbol.symbol}</button>;
        })
    

    );
}
     export default Symbols;
     