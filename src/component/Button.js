import React, { useState, useRef } from 'react';
import './Form.css'

function Button({ title, menus, type, setTypeData, typeData}) {
    const rangeRef = useRef();
    const [rangeValue, setRangeValue] = useState(2);
    const [isActive, setActive] = useState(0);
    const [btnName, setBtnName] = useState(title);
    const [isHover, setHover] = useState(false);
    
    const btnHover = (e) => {
        setHover(true);
        setBtnName(e.target.name);
    }
    
    return (
        <div className="button-container">
            <h4>{isHover ? btnName : title}</h4>
            {
                type === 'radio' ?
                    <div className="btns-container">
                        {menus.map((menu, i) => {
                            const btnClick = (e) => {
                                setActive(i);
                                typeData[title.toLowerCase()] = menu[e.target.name];
                                setTypeData({
                                    ...typeData
                                });
                                console.log(typeData)
                            }
                            return ([
                                <button name={Object.keys(menu)} 
                                className={`btn-round ${isActive === i && "active"}`} 
                                onClick={btnClick}
                                onMouseEnter={btnHover}
                                onMouseLeave={() => {
                                    setHover(false);
                                }}
                                ></button>,
                                (menus[i + 1] && <hr />)
                            ])
                        })}
                    </div>
                : type === 'checkbox' ?
                    <input 
                    type="checkbox"
                    name="italic" 
                    onChange={() => {
                        typeData.italic = !typeData.italic;
                        setTypeData({
                            ...typeData
                        });
                    }}
                    />
                : type === 'range' &&
                    <input 
                    ref={rangeRef} 
                    type={type}
                    name={title} 
                    value={rangeValue}
                    min={2} 
                    max={5} 
                    step={.1}
                    onChange={(e) => {
                        setRangeValue(e.target.value);
                        setBtnName(e.target.value);
                        typeData.size = e.target.value;
                        setTypeData({
                            ...typeData
                        });
                    }}
                    onMouseEnter={btnHover}
                    onMouseLeave={() => {
                        setHover(false);
                    }}
                    />
            }
        </div>
    )
};

export default Button;