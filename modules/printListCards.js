export const printListCards = (containerCards, arrayCards) => {
    console.log(arrayCards.length)
    containerCards.innerHTML = '';
    arrayCards.forEach((card) => {
        const video = document.createElement('div');
        video.classList.add('video');
        video.innerHTML = `
            <a href="" class="video__small-thumbnail">
                <img class="video__img" src="${card.snippet.thumbnails.standard.url}" alt="${card.snippet.title}">
            </a>

            <div class="video-info">
                <h4 class="video-info__title">${card.snippet.title}</h4>
                <p class="video-info__channel-name">${card.snippet.channelTitle}</p>
                <p class="video-info__publisher-info">15k Views 2days</p>
            </div>
        `;
        containerCards.appendChild(video);
    });
}