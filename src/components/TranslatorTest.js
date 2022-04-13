import React, { useState } from "react";
import rot13 from 'rot-thirteen'


function TranslatorTest() {
    const [ initialText, setInitialText ] = useState('salutations');

    const updateText = (e) => {
        setInitialText(e.target.value)
    }

    return(
        <div>
            <h1>Translator</h1>
            <input type="text" value={initialText} onChange={updateText} />
            <p>{initialText}</p>
            <p>{rot13(initialText)}</p>
        </div>
    )
}

export default TranslatorTest;