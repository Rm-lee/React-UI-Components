import React from 'react';
import './Button.css';

const clear = [
    {
        text: '0',
        class: 'zero'
    },
    {
        text: 'clear',
        class: 'clear'
    }
]

function ActionButton() {
    return (
        clear.map(character => {
            return <button className={character.class}>{character.text}</button>;
        })
    

    );
}
export default ActionButton;