module.exports = `

.react-jinke-music-player-main svg:active, .react-jinke-music-player-main svg:hover {
    color: #aac6f8
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle, .react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track {
    background-color: #7aa0ec
}

.react-jinke-music-player-main ::-webkit-scrollbar-thumb {
    background-color: #7aa0ec;
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
    box-shadow: 0 0 2px #7aa0ec
}

.react-jinke-music-player-main .audio-item.playing svg {
    color: #7aa0ec
}

.react-jinke-music-player-main .audio-item.playing .player-singer {
    color: #7aa0ec !important
}

.react-jinke-music-player-main .music-player-panel {
    background-color: #2b3142;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
}

.audio-lists-panel {
    background-color: #2b3142;
    border-radius: .625rem;
    bottom: 6rem;
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
}

.audio-lists-panel-content .audio-item.playing {
    background-color: rgba(0, 0, 0, 0);
}

.audio-lists-panel-content .audio-item:nth-child(2n+1) {
    background-color: rgba(0, 0, 0, 0);
}

.audio-lists-panel-content .audio-item:active,
.audio-lists-panel-content .audio-item:hover {
    background-color:rgba(255, 255, 255, 0.08);
}

.audio-lists-panel-header {
    border-bottom:1px solid #242936;
}

.react-jinke-music-player-main .music-player-panel .panel-content .player-content .audio-lists-btn {
    background-color:rgba(0,0,0,0);
    box-shadow:0 0 0 0;
}


.audio-lists-panel-content .audio-item {
    line-height: 32px;
    padding: 4px 20px;
    border-radius: .5rem;
    margin: 3px;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-content {
    border-radius: .5rem;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-rotate {
    animation: none;
}

.react-jinke-music-player-main .music-player-panel .panel-content .img-content {
    box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
}




.audio-lists-panel-content .audio-item.playing, .audio-lists-panel-content .audio-item.playing svg {
    color: #7aa0ec
}
.audio-lists-panel-content .audio-item:active .group:not([class=".player-delete"]) svg, .audio-lists-panel-content .audio-item:hover .group:not([class=".player-delete"]) svg {
    color: #7aa0ec
}

`
