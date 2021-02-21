import React from 'react';
import './FormField.css';

function FormField() {
    return (
        <div className="Forms">
            <form className='formMain'>
                <label>Company Name: </label><input type='text'></input>
                <label>Company Description: </label><input type='text'></input>
                 <label>Contact: </label><input type='text'></input>
              <label>State</label>  <select>
                    <option>up</option>
                    <option>Maharashta</option>
                    <option>Bihar</option>
                </select>
              <label>City</label>  <select>
                    <option>pratapgrah</option>
                    <option>Raigad</option>
                    <option>Patna</option>
                </select><br/>
            <button className='formButton'>Submit</button>
            </form>
            </div>     
  )
}

export default FormField
