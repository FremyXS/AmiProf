import { getFeedBacksList, getUsefulArticlesList } from './api/api-manager.js';

function getListFeedBack(){

    function getOneFeedBack(link){
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.src = link;
        image.title = "FeedBack";
        div.className="main-feedback__content-list__element";
        div.insertAdjacentElement("afterbegin", image);
        return div;
    }

    function getOneUsefulArticles(articleBody){
        let article = document.createElement('div');
        article.className = "main-usefularticles__in-content__element";

        let article_title = document.createElement('div');
        article_title.className = "main-usefularticles__in-content__element-title";

        let article_title_content = document.createElement('h4');
        article_title_content.insertAdjacentText("afterbegin", articleBody.title);
        article_title.insertAdjacentElement('afterbegin', article_title_content);
        
        let article_date = document.createElement('div');
        article_date.className = 'main-usefularticles__in-content__element-date';
        let article_date_content = document.createElement('p');
        article_date_content.insertAdjacentText("afterbegin", articleBody.date);
        article_date.insertAdjacentElement("afterbegin", article_date_content);

        let article_description = document.createElement('div');
        article_description.className = 'main-usefularticles__in-content__element-description';
        let article_description_content = document.createElement('p');
        article_description_content.insertAdjacentText('afterbegin', articleBody.description);
        article_description.insertAdjacentElement('afterbegin',article_description_content);

        article.insertAdjacentElement('afterbegin', article_description);
        article.insertAdjacentElement('afterbegin', article_date);
        article.insertAdjacentElement('afterbegin', article_title);

        return article;
    }

    getFeedBacksList().map((el)=>{
        document.getElementById("feedbacks_list").insertAdjacentElement("afterbegin", getOneFeedBack(el));
    })

    getUsefulArticlesList().map((el) => {
        document.getElementById("articles_list").insertAdjacentElement("afterbegin", getOneUsefulArticles(el));
    })

}

getListFeedBack();