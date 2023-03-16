import { getFeedBacksList, getUsefulArticlesList, getProjectsList, getNewsList } from './api/api-manager.js';
import { createNewsHandler } from './handlers/_createNewsHandler.js';
import { createFeedBackHandler } from './handlers/_createFeedBackHandler.js';
import { createProjectHandler } from './handlers/_createProjectHandler.js';
import { createUsefulArticlesHandler } from './handlers/_createUsefulArticlesHandler.js'; 

 window.onload = function(){

    getFeedBacksList().map((el)=>{
        document.getElementById("feedbacks_list").insertAdjacentElement("afterbegin", createFeedBackHandler(el, "feedback"));
    })

    getUsefulArticlesList().map((el) => {
        document.getElementById("articles_list").insertAdjacentElement("afterbegin", createUsefulArticlesHandler(el));
    })

    getProjectsList().map((el) => {
        document.getElementById("list-projects").insertAdjacentElement("afterbegin", createProjectHandler(el));
    })

    getNewsList().map((el, index) => {
        document.getElementById( index > 0? "news_list" : "first_news")
        .insertAdjacentElement("afterbegin", 
            createNewsHandler(el)
        );
    })

    getFeedBacksList().map((el)=>{
        document.getElementById("certificates_list").insertAdjacentElement("afterbegin", createFeedBackHandler(el, "certificates"));
    })
}