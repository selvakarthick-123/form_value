import React from 'react'
import './App.css'
const Name =({searchChangeFirstName,searchChangeLastName,searchChangeemail,searchChangeDOB,searchChangeinitial,onMouseLeave})=>{
    return(
        <div>
        <div className="flex ">
            <p className="pa3 grow">First Name:<input type ='text' onChange={searchChangeFirstName} placeholder="Enter First Name"/></p>
            <p className="pa3 grow">Last Name:<input type ='text' onChange={searchChangeLastName} placeholder="Enter Last Name"/></p>
            <p className="pa3 grow">Initial:<input type ='text' onChange={searchChangeinitial} placeholder="Enter Last Name"/></p>

        </div>
        <nav className="flex_2">
             <p className="  pa3 f5">Birthday:<input type="date" min="1950-01-01" max="2020-01-01" className="pointer" onChange={searchChangeDOB} required/></p>
             <p className="  pa3 f5">email:<input type="email" onChange={searchChangeemail} onMouseLeave={onMouseLeave} required placeholder="enter mail here"/></p>
        </nav>
        </div>
    )

}





export default Name;