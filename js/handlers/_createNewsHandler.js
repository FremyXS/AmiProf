const newsClasses = {
    div: 'main-news__in-content__element',
    title: 'main-news__in-content__element-title',
    date: 'main-news__in-content__element-date',
    description: 'main-news__in-content__element-description',
    button: 'main-news__in-content__element-button',
}

export const createNewsHandler = (newsBody) => {
    let newsDiv = document.createElement("div");
    newsDiv.className = newsClasses.div;

    let newsTitle = document.createElement('h3');
    newsTitle.insertAdjacentText("afterbegin", newsBody.title);
    newsTitle.className = newsClasses.title;

    let newsDate = document.createElement('p');
    newsDate.insertAdjacentText("afterbegin", newsBody.date);
    newsDate.className = newsClasses.date;

    let newsDescription = document.createElement('p');
    newsDescription.insertAdjacentText("afterbegin", newsBody.description);
    newsDescription.className = newsClasses.description;
    
    let button = document.createElement('button');
    button.type='button';
    button.className = "btn_arrow-brown " + newsClasses.button;
    let icon_arrow = document.createElement('img');
    icon_arrow.src='../img/icons/arrow_right_black_icon.svg';
    button.insertAdjacentElement('afterbegin', icon_arrow);

    newsDiv.insertAdjacentElement('afterbegin', button);
    newsDiv.insertAdjacentElement('afterbegin', newsDescription);
    newsDiv.insertAdjacentElement('afterbegin', newsDate);
    newsDiv.insertAdjacentElement('afterbegin', newsTitle);

    return newsDiv;
}