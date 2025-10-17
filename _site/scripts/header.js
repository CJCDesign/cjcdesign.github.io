window.onload = function () {
    let headerBar = createElement('div', document.body, 'flex row', '', 'margin-bottom: 40px', true);

    createElement('p', headerBar, 'h0', 'Home');
    createElement('p', headerBar, 'h0', 'Photography');
    createElement('p', headerBar, 'h0', 'Graphics');
    createElement('p', headerBar, 'h0', 'Blog');
}

function createElement(tag, parent, classes = '', inner = '', style = '', before = false) {
    let temp = document.createElement(tag);

    if (parent !== null) {
        if (before) parent.insertBefore(temp, parent.childNodes[0]);
        else parent.appendChild(temp);
    }

    temp.className = classes;
    temp.innerHTML = inner;
    temp.setAttribute('style', style);

    return temp;
}