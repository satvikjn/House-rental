import React, { PureComponent } from 'react'
import Cards from '../Cards/Cards'
import Filter from '../Filter/Filter'
import "./Body.css"

export default class Body extends PureComponent {
  render() {
    return (
    <div className='body-main'>
        <div className="head">
            <h1>Search properties to rent</h1>
            <div className="search-box">
                Search with SearchBar
                <select >
                    
                </select>
            </div>
        </div>
        <Filter/>
        <div className="cards-area">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>


    </div>
    )
  }
}
