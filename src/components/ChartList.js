import React from "react";
import SongItem from "./SongItem";

const ChartList = ({songs}) => {

    const songItems = songs.map(song => {
        return(
            <SongItem title={song['title']['label']} key={song['id']['attributes']['im:id']}/>
        )
    })

    return (
        <div className="class-list">
            <ol>
                {songItems}
            </ol>
        </div>
    )
}

export default ChartList;