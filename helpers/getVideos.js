

export const getVideos = async(API_KEY, VIDEO_URL) =>{
    try {
        const params ={
            key: API_KEY,
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 16,
            regionCode: 'US'
        }
        const response = await fetch(VIDEO_URL + new URLSearchParams(params));
        const data = await response.json();
        return data.items;
        
    } catch (error) {
        console.log(error);
    }
};