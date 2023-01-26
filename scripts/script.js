import { getChannels } from "../helpers/getChannels.js";
import { getVideos } from "../helpers/getVideos.js";
import { printCards } from "../modules/printCards.js";

const container = document.querySelector('.container');
const hamburgerButton = document.getElementById('hamburgerButton');
const videoContainer = document.querySelector('.video-container')

const API_KEY = 'AIzaSyD_Gv4ChgpdorbRnYgD52_KX8HoIxw8W0E';
const VIDEO_HTTP = 'https://www.googleapis.com/youtube/v3/videos?';
const CHANNEL_HTTP = 'https://www.googleapis.com/youtube/v3/channels?';

const videos = [];
hamburgerButton.addEventListener('click', () => {
    container.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', async ()=>{
    try {
        const data = [...await getVideos(API_KEY ,VIDEO_HTTP)];
        console.log(data)
        data.forEach( async (item) => {
            let video = await getChannels(API_KEY, CHANNEL_HTTP, item);
            videos.push(video);
        });
        setTimeout(() => {            
            printCards(videoContainer, videos);
        }, 1000);
        
    } catch (error) {
        console.log(error);
    }
    
});