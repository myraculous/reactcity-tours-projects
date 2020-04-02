import React, { Component } from 'react';
import './details.scss'

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "IMAGINARY CITY TOURS",
          about: "This is a simple react application that show cases the most beautiful cities around the globe",
          cities: "New York, London, Tokyo, Paris, Abuja, Port Harcourt, Lagos",
          publishedDate: "2nd April, 2020."
        };
      }
    render() {
        
        const { title, about, cities, publishedDate } = this.state;
    
        return (
            <div className="site-details">
                <h1 className="site-title">{title}</h1>
                
                <p>{about}</p>
                <h4>{cities}</h4>
                <span>{publishedDate}</span>
               
            </div>
        )
    }
}
