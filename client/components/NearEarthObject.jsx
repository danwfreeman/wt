import React, { Component } from 'react';

class NearEarthObject extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { entry } = this.props;
        return (
            <div>
                <ul>
                    {entry.map(neo => {
                        return(
                            <li>
                                <b>Name: {neo.name}</b>
                                <div>

                                    <ul>
                                        {neo.close_approach_data.map(cad => {
                                            return (
                                                <li>
                                                    Miss Distance (miles): {cad.miss_distance.miles} <br/>
                                                    Relative Velocity (KPH): {cad.relative_velocity.kilometers_per_hour}

                                                </li>
                                            );
                                        })}
                                        <li>
                                            Size (meters): { neo.estimated_diameter.meters.estimated_diameter_max }
                                        </li>
                                    </ul>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default NearEarthObject;
