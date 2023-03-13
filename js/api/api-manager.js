export const getFeedBacksList = () => {
    //имимтация запроса, для получение отзывов        
    const url_feedback = '../img/feedback_image.png';
    return [url_feedback, url_feedback, url_feedback];
}

export const getUsefulArticlesList = () => {
    //имимтация запроса, для получение статей
    
    const articleMock = {
        title: "Заголовок",
        date: "12 феврала",
        description: "Тут текст на несколько строк Тут текст " +
        "на несколько строк Тут текст точно " +
        "на несколько строк Тут текст"
    };

    return [articleMock, articleMock, articleMock, articleMock];
}