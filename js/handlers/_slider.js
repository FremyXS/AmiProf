const itemsSliders = {
    feedback: "main-feedback__in-content__list-element",
    certificates: "main-certificates__in-content__list-element"
}

let feedbackSlideIndex = [0, 1, 2];
let certificatesSlideIndex = [0, 1, 2];

function nextSlideFeedback() {
    feedbackSlideIndex = feedbackSlideIndex.map(num => num + 1);
    document.getElementById('btn-prev-feedback').className="btn_arrow-brown";
    if(!showSlides(feedbackSlideIndex, itemsSliders.feedback)){
        feedbackSlideIndex = feedbackSlideIndex.map(num => num - 1);
        document.getElementById('btn-next-feedback').className="btn_arrow-gray";
    }
}

function previousSlideFeedback() {
    feedbackSlideIndex = feedbackSlideIndex.map(num => num - 1);
    document.getElementById('btn-next-feedback').className="btn_arrow-brown";
    if(!showSlides(feedbackSlideIndex, itemsSliders.feedback)){
        document.getElementById('btn-prev-feedback').className="btn_arrow-gray";
        feedbackSlideIndex = feedbackSlideIndex.map(num => num + 1);
    }
}

function nextSlideSertificates() {
    certificatesSlideIndex = certificatesSlideIndex.map(num => num + 1);
    document.getElementById('btn-prev-certificates').className="btn_arrow-brown";
    if(!showSlides(certificatesSlideIndex, itemsSliders.certificates)){
        document.getElementById('btn-next-certificates').className="btn_arrow-gray";
        certificatesSlideIndex = certificatesSlideIndex.map(num => num - 1);
    }
}

function previousSlideSertificates() {
    certificatesSlideIndex = certificatesSlideIndex.map(num => num - 1);
    document.getElementById('btn-next-certificates').className="btn_arrow-brown";
    if(!showSlides(certificatesSlideIndex, itemsSliders.certificates)){
        document.getElementById('btn-prev-certificates').className="btn_arrow-gray";
        certificatesSlideIndex = certificatesSlideIndex.map(num => num + 1);
    }
}

const showSlides = (slideIndex, item) => {
    let slides = document.getElementsByClassName(item);

    if (slideIndex[0] < 0 || slideIndex[2] >= slides.length) {  
        console.log(slideIndex);
        return false;
    }
 
    console.log(slideIndex);
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slideIndex.map((el) => (slides[el]).style.display = "block");
    return true;
}


showSlides(feedbackSlideIndex, itemsSliders.feedback);
showSlides(certificatesSlideIndex, itemsSliders.certificates);
