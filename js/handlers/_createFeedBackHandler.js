export const createFeedBackHandler = (link) => {
    let div = document.createElement('div');
    div.className="main-feedback__content-list__element";

    let image = document.createElement('img');
    image.src = link;
    image.title = "FeedBack";

    div.insertAdjacentElement("afterbegin", image);
    
    return div;
} 