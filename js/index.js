function getListFeedBack(){

    function getFeedBacks(){
        //имимтация запроса, для получение отзывов        
        const url_feedback = 'img/feedback_image.png'
        return [url_feedback, url_feedback, url_feedback];
    }

    function getOneFeedBack(link){
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.src = link;
        image.title = "FeedBack";
        div.className="main-feedback__content-list__element";
        div.insertAdjacentElement("afterbegin", image);
        return div;
    }

    getFeedBacks().map((el)=>{
        document.getElementById("feedbacks_list").insertAdjacentElement("afterbegin", getOneFeedBack(el));
    })

}

getListFeedBack();