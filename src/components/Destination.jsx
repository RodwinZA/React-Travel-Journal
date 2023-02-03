import React from "react";
import LocationMarker from "../images/marker.png"
import MountFuji from "../images/mount-fuji.png"

export default function Destination(props){
    return (
        <div className="card">
            <img className="card--img" src={props.imageUrl} alt="Mount Fuji" />
            <div className="card--text">
                <div className="card--location-details">
                    <img className="card--marker" src={LocationMarker} alt="" />
                    <p className="card--country">{props.country}
                        <span className="card--map">
                            <a href={props.mapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                        </span>
                    </p>
                </div>

                <h1 className="card--destination">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}