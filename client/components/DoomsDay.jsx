import React, { Component } from 'react';
import axios from 'axios';

import NearEarthObject from './NearEarthObject';

class DoomsDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nearEarth: [],
            numberOfDays: 0
        };
    }

    componentDidMount() {
        axios.get('/api/incoming')
            .then(response => {
                const {data : { near_earth_objects }} = response;
                this.setState({
                    nearEarth: near_earth_objects,
                    numberOfDays: Object.keys(near_earth_objects).length
                });
            })
            .catch(err => {
                console.error(err.message);
            });
    }

    showNumberOfDays(amount) {
        this.setState({numberOfDays : amount });
    }

    render() {
        const { nearEarth, numberOfDays } = this.state;
        return (
            <div>
                <select name="amountOfDays" id="amountOfDays" onChange={(e) => {this.showNumberOfDays(e.target.value)}}>
                    <option value="" disabled selected>Please Select number of days</option>
                    {[...Array(Object.keys(nearEarth).length).keys()].map(op => {
                        return (
                            <option selected value={op}>{op+1}</option>
                        )
                    })}
                </select>
                <ul>
                    {
                        Object.keys(nearEarth).filter((neo, idx) => {
                            if (idx <= numberOfDays) {return neo;}
                        }).map(neo => {
                            return (
                                <div>
                                    <h3 style={{'color': 'green'}}>Date: {neo}</h3>
                                    <NearEarthObject entry={nearEarth[neo]} />
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default DoomsDay;
