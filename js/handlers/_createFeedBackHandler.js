export const createFeedBackHandler = (link, name_Querue) => {
    let div = document.createElement('div');
    div.className=`main-${name_Querue}__in-content__list-element`;

    let image = document.createElement('img');
    image.src = link;
    image.title = "FeedBack";

    div.insertAdjacentElement("afterbegin", image);
    
    return div;
} 