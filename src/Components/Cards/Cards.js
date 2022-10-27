import React, { PureComponent } from 'react'
import "./Cards.css"

export default class Cards extends PureComponent {
  render() {
    return (
      <div className='card-mainbox'>
        <div className="card">
            <div className="card-img">
                <img src='.\images\344344.jpg'  />
            </div>
            <div className="card-body">
                <ul>
                <li style={{margin:"0px", fontSize:"18px", fontWeight:"bolder", color:"#8177B2", marginBottom:"10px"}}>&2,095<spam style={{ fontSize: "small", fontWeight: "normal", color:"Grey"}}>/month</spam></li>
                <li style={{margin:"0px", fontSize:"18px", fontWeight:"bolder", color:"Black"}}>Palm Harbor</li>
                <li style={{margin:"0px", color:"Grey"}}>2699 Green Valley, Highland Lake, FL</li>
                </ul>
            </div>
            <div className='bolltom-line'></div>
            <div className="card-foot">
                <ul>
                    <li><img src='.\Icons\bed.svg' /></li>
                    <li><img src='.\Icons\bathroom.svg' /></li>
                    <li><img src='.\Icons\area.svg' /></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
