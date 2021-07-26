import React, {useState, useRef, useEffect} from 'react';
import './Form.css';
import Button from './Button';

const Form = () => {
    const align = [
        {'Center': 'center'}, 
        {'Left': 'left'}
    ];
    const cases = [
        {'Normal': 'none'},
        {'Camel': 'capitalize'},
        {'All Caps': 'uppercase'}, 
        {'Small Caps': 'lowercase'}
    ];
    const [isFocus, setFocus] = useState(false);
    const [typeData, setTypeData] = useState({
        size: 2,
        align: 'center',
        italic: false,
        cases: 'none'
    });
    const headerRef = useRef();
    const formRef = useRef();
    const textRef = useRef();

    const textFocus = (e) => {
        setFocus(true);
    }
    
    const textBlur = (e) => {
        setFocus(false);
        textRef.current.blur();
    }

    return (
        <div className="form-container" 
        onMouseDown={textFocus}
        onKeyDown={(e) => {
            if(e.key === 'Escape') {
                textBlur();
            }
        }}
        ref={formRef}
        >
            <header 
            ref={headerRef} 
            className={isFocus && 'show'}
            // onClick={textBlur}
            >
                <Button title="Size" type="range" setTypeData={setTypeData} typeData={typeData}/>
                <Button title="Align" menus={align} type="radio" setTypeData={setTypeData} typeData={typeData}/>
                <Button title="Italic" type="checkbox" setTypeData={setTypeData} typeData={typeData}/>
                <Button title="Cases" menus={cases} type="radio" setTypeData={setTypeData} typeData={typeData}/>
                <button className="close-btn" onClick={textBlur}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="19" y1="5" x2="5" y2="19" fill="#fff" stroke="#000" stroke-miterlimit="10"/><line x1="5" y1="5" x2="19" y2="19" fill="#fff" stroke="#000" stroke-miterlimit="10"/></svg>
                </button>
            </header>
            <h1 contentEditable="true" suppressContentEditableWarning="true" 
            ref={textRef} 
            spellCheck="false" 
            className={isFocus ? 'active' : ''}
            style={{
                fontSize:`${typeData.size}rem`,
                textAlign: typeData.align,
                textTransform: typeData.cases,
                fontStyle: typeData.italic ? 'italic' : 'normal'
            }}
            >Almost before we knew it, we had left the ground.</h1>
        </div>
    )
};

export default Form;
