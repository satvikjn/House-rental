import React, { PureComponent } from 'react'
import "./Navbar.css"

export default class Navbar extends PureComponent {
  render() {
    return (
      <div className='nav-main-box'>
        <div className="left-nav">
            <ul>
                <li style={{fontWeight : "bolder"}} type="Button">Logo</li>
                <li><button type='button'>Rent</button></li>
                <li><button type='button'>Buy</button></li>
                <li><button type='button'>Sell</button></li>
                <li className='select-tag'>Mange Property<select/></li>
                <li className='select-tag'>Resources<select/></li>
            </ul>
        </div>
        <div className="right-nav">
          <ul>
            <li><button type='button' style={{color : "#7065ED" , border:"solid", borderWidth:"1px"}}>Login</button></li>
            <li><button type='button' style={{backgroundColor : "#7065ED" , color :"white" }}>Sign Up</button></li>
          </ul>
        </div>
      </div>
    )
  }
}
