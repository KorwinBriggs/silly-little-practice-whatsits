
//Eloquent Javascript, page 37, make a silly little triangle:

function printTriangle(numLines) {
    thisLine = '';
    for (let line = 0; line < numLines; line++){
        thisLine += '#';
        console.log(thisLine);
    }
}

function printTriangle2(numLines) {
    thisLine = '';
    while (thisLine.length < numLines) {
        thisLine += '#';
        console.log(thisLine);
    }
}

printTriangle2(7);