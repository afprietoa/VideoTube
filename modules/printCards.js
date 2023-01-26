export const printCards = (containerCards, arrayCards) => {
    console.log(arrayCards.length)
    containerCards.innerHTML = '';
    arrayCards.forEach((card) => {
        const video = document.createElement('div');
        video.classList.add('video');
        video.innerHTML = `
            <img class="video__img" src="${card.snippet.thumbnails.high.url}" alt="${card.snippet.title}" id="${card.id}">
    
            <div class="video-content">
                <img class="video-content__img" src="${card.channelThumbnail}" alt="">
                <div class="video-info">
                    <h4 class="video-info__title">${card.snippet.title}</h4>
                    <p class="video-info__channel-name">${card.snippet.channelTitle}</p>
                </div>
            </div>
        `;
        containerCards.appendChild(video);
    });
}