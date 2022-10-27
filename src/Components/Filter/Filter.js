import React, { PureComponent } from 'react'
import "./Filter.css"

export default class Filter extends PureComponent {
  render() {
    return (
      <div className='filter-main'>
        <div className="filter-comp">
            <h3>Location</h3>
            <input type="text" name="Location" value="" placeholder='New York, USA' style={{width:"140px"}}/>
        </div>
        <div className="filter-comp">
            <h3>Date</h3>
            <input type="date" name="Date" value=""/>     
        </div>
        <div className="filter-comp">
            <h3>Price</h3>
            <select>
                <option value="1" selected>$500-$2500</option>
                <option value="2">$2500-$3500</option>
                <option value="3">$3500-$4500</option>
                <option value="4">$4500-$5500</option>
            </select>
        </div>    
        <div className="filter-comp">
            <h3>Property type</h3>
            <select>
                <option value="1" selected>House</option>
                <option value="2">Flat</option>
                <option value="3">Villa</option>
            </select>
        </div>
        <div className="filter-comp">
            <button className="search-btn" type='button'>Search</button>
        </div>
      </div>
    )
  }
}
