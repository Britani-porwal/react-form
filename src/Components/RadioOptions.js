import React from 'react';
const RadioOptions = ({ label, btnList , onChange , value }) => {
    const radioButton = btnList.map((btnName) => {
        return (
            // key is provided to the element at topmost level which is iterated
            <div key={btnName}>
                <label>
                    <input 
                        name={label} 
                        type="radio" 
                        value={btnName}
                        onChange={onChange}
                        checked = {value === btnName} 
                        required/> 
                        {/* checked is a boolean value , true for only one of the radio buttons */}
                    {btnName}
                </label>
            </div>
        )
    })
    return (
        <label>
            {label}{' '}<sup>*</sup> : {' '}
            {radioButton}
        </label>
    )
}
export default RadioOptions