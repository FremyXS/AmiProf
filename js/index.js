import { getFeedBacksList, getUsefulArticlesList, getProjectsList, getNewsList } from './api/api-manager.js';
import { createNewsHandler } from './handlers/_createNewsHandler.js';
import { createFeedBackHandler } from './handlers/_createFeedBackHandler.js'


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

    function getOneProject(projectBody){
        const CLASS_NAME = "main-projects__in-content";
        let projectDiv = document.createElement('div');
        projectDiv.className = CLASS_NAME + "__project";

        let project_left = document.createElement('div');
        project_left.className = projectDiv.className + "-left"
        let project_right = document.createElement('div');
        project_right.className = projectDiv.className + "-right"
        let project_center = document.createElement('div');
        project_center.className = projectDiv.className + "-center"

        let project_name = document.createElement('h1');
        project_name.insertAdjacentText('afterbegin', projectBody.title);

        let project_date = document.createElement('p');
        project_date.insertAdjacentText('afterbegin', projectBody.date);
        project_date.className = projectDiv.className + "-date"

        let project_description = document.createElement('p');
        project_description.insertAdjacentText('afterbegin', projectBody.description);
        project_description.className = projectDiv.className + "-description";

        let project_image = document.createElement('img');
        project_image.src = projectBody.image;

        let button = document.createElement('button');
        button.type='button';
        button.className = "btn_arrow-brown " + projectDiv.className + "-button";
        let icon_arrow = document.createElement('img');
        icon_arrow.src='../img/icons/arrow_right_black_icon.svg';
        button.insertAdjacentElement('afterbegin', icon_arrow);

        project_center.insertAdjacentElement('afterbegin', project_image);

        project_left.insertAdjacentElement('afterbegin', project_date);
        project_left.insertAdjacentElement('afterbegin', project_name);

        project_right.insertAdjacentElement('afterbegin', button);
        project_right.insertAdjacentElement('afterbegin', project_description);

        projectDiv.insertAdjacentElement('afterbegin', project_right);
        projectDiv.insertAdjacentElement('afterbegin', project_center);
        projectDiv.insertAdjacentElement('afterbegin', project_left);

        return projectDiv;

    }

    getFeedBacksList().map((el)=>{
        document.getElementById("feedbacks_list").insertAdjacentElement("afterbegin", createFeedBackHandler(el));
    })

    getUsefulArticlesList().map((el) => {
        document.getElementById("articles_list").insertAdjacentElement("afterbegin", getOneUsefulArticles(el));
    })

    getProjectsList().map((el) => {
        document.getElementById("list-projects").insertAdjacentElement("afterbegin", getOneProject(el));
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