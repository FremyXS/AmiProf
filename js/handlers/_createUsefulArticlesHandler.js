const articleClasses = {
    article: "main-usefularticles__in-content__element",
    title: "main-usefularticles__in-content__element-title",
    date: "main-usefularticles__in-content__element-date",
    description: "main-usefularticles__in-content__element-description",
}

export const createUsefulArticlesHandler = (articleBody) => {
    let article = document.createElement('div');
    article.className = articleClasses.article;

    let article_title = document.createElement('div');
    article_title.className = articleClasses.title;

    let article_title_content = document.createElement('h4');
    article_title_content.insertAdjacentText("afterbegin", articleBody.title);
    article_title.insertAdjacentElement('afterbegin', article_title_content);
    
    let article_date = document.createElement('div');
    article_date.className = articleClasses.date;
    let article_date_content = document.createElement('p');
    article_date_content.insertAdjacentText("afterbegin", articleBody.date);
    article_date.insertAdjacentElement("afterbegin", article_date_content);

    let article_description = document.createElement('div');
    article_description.className = articleClasses.description;
    let article_description_content = document.createElement('p');
    article_description_content.insertAdjacentText('afterbegin', articleBody.description);
    article_description.insertAdjacentElement('afterbegin',article_description_content);

    article.insertAdjacentElement('afterbegin', article_description);
    article.insertAdjacentElement('afterbegin', article_date);
    article.insertAdjacentElement('afterbegin', article_title);

    return article;
}