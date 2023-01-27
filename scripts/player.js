import { getChannels } from "../helpers/getChannels.js";
import { getVideos } from "../helpers/getVideos.js";
import { printListCards } from "../modules/printListCards.js";

const videoContainer = document.querySelector('.video-container');
const videoTitle = document.querySelector('.video-title');
const publisher = document.querySelector('.publisher');
const videoDescription = document.querySelector('.video-description__text');
const videoList = document.getElementById('videoList')

const API_KEY = 'AIzaSyD_Gv4ChgpdorbRnYgD52_KX8HoIxw8W0E';
const VIDEO_HTTP = 'https://www.googleapis.com/youtube/v3/videos?';
const CHANNEL_HTTP = 'https://www.googleapis.com/youtube/v3/channels?';

const videos = [];

const video = JSON.parse(sessionStorage.getItem('video'));

console.log(video)
document.addEventListener('DOMContentLoaded', async () =>{
    try {
        const data = [...await getVideos(API_KEY ,VIDEO_HTTP)];
        console.log(data)
        data.forEach( async (item) => {
            let video = await getChannels(API_KEY, CHANNEL_HTTP, item);
            videos.push(video);
        });
        setTimeout(() => {            
            printListCards(videoList, videos);
        }, 1000);
        
    } catch (error) {
        console.log(error);
    }

    videoTitle.innerText = `${video.snippet.title}`;
    videoContainer.innerHTML = `
    <iframe 
        class="video__iframe" 
        src="https://www.youtube.com/embed/${video.id}" 
        title="${video.snippet.title}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        >
    </iframe>
    `
    publisher.innerHTML = `
        <img class="publisher__img" src="${video.channelThumbnail}" alt="avatar">
        <div class="publisher_info">
            <h3 class="publisher-info__channel-name">${video.snippet.channelTitle}</h3>
            <p class="publisher-info__subscribers">500k Subscribers</p>
        </div>
        <button class="subscribe-button">
            Subscribe
        </button>
    `
    videoDescription.innerText = `${video.snippet.description}`;

});