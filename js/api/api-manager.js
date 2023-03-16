export const getFeedBacksList = () => {
    //имимтация запроса, для получение отзывов        
    const url_feedback = '../img/feedback_image.png';
    return [url_feedback, url_feedback, url_feedback, url_feedback, url_feedback];
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

export const getProjectsList = () => {
     //имимтация запроса, для получение проектов

     return [
        {
            title: "название проекта 2",
            description: "Очень много текста примерно "
                +"на три строчки, ибо больше"
                +"никто читать не будет.",
            date: "12/2020",
            image: "../img/project_two_image.png"
        },
        {
            title: "название проекта 1",
            description: "Очень много текста примерно "
                +"на три строчки, ибо больше"
                +"никто читать не будет.",
            date: "12/2020",
            image: "../img/project_one_image.png"
        }
     ]
}

export const getNewsList = () => {
    //имимтация запроса, для получение новостей

    const newsMock = {
        title: "важная Новость",
        date: "12/2020",
        description: "Очень много текста примерно "
        +"на три строчки, ибо больше " 
        +"никто читать не будет."
    }

    return [
        newsMock, newsMock, newsMock 
    ]

}