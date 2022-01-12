import React from "react";

const SongItem = ({title}) => {
    return (
        <div className="song-item">
            <li>{title}</li>
        </div>
    )
}

export default SongItem;