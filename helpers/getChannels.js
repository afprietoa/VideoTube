export const getChannels = async(API_KEY, CHANNEL_URL, video_data) =>{
    try {
        const params ={
            key: API_KEY,
            part: 'snippet',
            id: video_data.snippet.channelId
        }
        const response = await fetch(CHANNEL_URL + new URLSearchParams(params));
        const data = await response.json();
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        return video_data;
    } catch (error) {
        console.log(error);
    }
};