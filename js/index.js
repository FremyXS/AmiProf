import { getFeedBacksList, getUsefulArticlesList, getProjectsList, getNewsList } from './api/api-manager.js';
import { createNewsHandler } from './handlers/_createNewsHandler.js';
import { createFeedBackHandler } from './handlers/_createFeedBackHandler.js';
import { createNewProject } from './handlers/_createNewProject.js';

function getListFeedBack(){

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
        document.getElementById("feedbacks_list").insertAdjacentElement("afterbegin", createFeedBackHandler(el));
    })

    getUsefulArticlesList().map((el) => {
        document.getElementById("articles_list").insertAdjacentElement("afterbegin", getOneUsefulArticles(el));
    })

    getProjectsList().map((el) => {
        document.getElementById("list-projects").insertAdjacentElement("afterbegin", createNewProject(el));
    })

    getNewsList().map((el, index) => {
        document.getElementById( index > 0? "news_list" : "first_news")
        .insertAdjacentElement("afterbegin", 
            createNewsHandler(el)
        );
    })

    getFeedBacksList().map((el)=>{
        document.getElementById("certificates_list").insertAdjacentElement("afterbegin", createFeedBackHandler(el));
    })

}

getListFeedBack();