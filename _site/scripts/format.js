function format() {
    var lines = document.body.innerHTML.split('\n');

    for (let i = 0; i < lines.length; i++) {
        lines[i] = checkRow(lines[i]);
        lines[i] = checkColumn(lines[i]);
    }

    let inner = '';

    for (let j = 0; j < lines.length; j++) {
        inner += lines[j] + '\n';
    }

    document.body.innerHTML = inner;
}

let isRow;

function checkRow(line) {
    let strippedLine = stripPTags(line);

    if (strippedLine === '{row}' && !isRow) {
        isRow = true;
        return '<div class="flex row">';
    }
    else if (strippedLine === '{row}' && isRow) {
        isRow = false;
        return '</div>';
    }
    else if (isRow) return '<p>' + line + '</p>';
    else return line;
}

let isColumn;

function checkColumn(line) {
    let strippedLine = stripPTags(line);

    if (strippedLine === '{column}' && !isColumn) {
        isColumn = true;
        return '<div class="flex column">';
    }
    else if (strippedLine === '{column}' && isColumn) {
        isColumn = false;
        return '</div>';
    }
    else if (isColumn) return '<p>' + line + '</p>';
    else return line;
}

function stripPTags(line) {
    return line.replace('<p>', '').replace('</p>', '');
}