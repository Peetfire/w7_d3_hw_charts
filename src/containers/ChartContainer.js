import React, {useState, useEffect} from "react";
import ChartList from "../components/ChartList";

const ChartContainer = () => {

    const[songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs()
    })

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry));
    }

    return ( 
        <div className="chart-container">
            <h1>I am Charticus...container</h1>
            <ChartList songs={songs}/>
        </div>
    )
}

export default ChartContainer;