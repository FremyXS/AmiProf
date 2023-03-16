const projectClasses = {
    div: "main-projects__in-content__project",
    left: "main-projects__in-content__project-left",
    right: "main-projects__in-content__project-right",
    center: "main-projects__in-content__project-center",
    date: "main-projects__in-content__project-date",
    description: "main-projects__in-content__project-description",
    button: "main-projects__in-content__project-button",
}

export const createProjectHandler = (projectBody) => {
    let projectDiv = document.createElement('div');
    projectDiv.className = projectClasses.div;

    let project_left = document.createElement('div');
    project_left.className = projectClasses.left;
    let project_right = document.createElement('div');
    project_right.className = projectClasses.right;
    let project_center = document.createElement('div');
    project_center.className = projectClasses.center;

    let project_name = document.createElement('h1');
    project_name.insertAdjacentText('afterbegin', projectBody.title);

    let project_date = document.createElement('p');
    project_date.insertAdjacentText('afterbegin', projectBody.date);
    project_date.className = projectClasses.date;

    let project_description = document.createElement('p');
    project_description.insertAdjacentText('afterbegin', projectBody.description);
    project_description.className = projectClasses.description;

    let project_image = document.createElement('img');
    project_image.src = projectBody.image;

    let button = document.createElement('button');
    button.type='button';
    button.className = "btn_arrow-brown " + projectClasses.button;
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