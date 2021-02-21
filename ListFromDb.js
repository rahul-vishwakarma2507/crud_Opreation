import React from 'react'
import './ListFromDb.css'

function ListFromDb() {
    return (
<div className='listM'>
<div className='ListFromDb'>
        
 <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">Company Name</th>
      <th scope="col">Company Description</th>
      <th scope="col">Contact</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Iconnect</td>
      <td>Information technology company</td>
      <td>+348238488434</td>
      <td>maharashtra</td>
      <td>turbhe</td>
    </tr>
    
  </tbody>
</table>
</div>
<button className='formButtonAdd'>Add New Company</button>
<br/>
 </div>
 
    )
}

export default ListFromDb
