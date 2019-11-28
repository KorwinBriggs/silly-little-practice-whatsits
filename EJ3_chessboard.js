/*
Eloquent Javascript, page 38, make a silly little chessboard.
(out of hashtags)
(and for personal interest, make the chessboard a varying size and use line breaks)
*/


function chessboard (sideLength) {
    let black = false;
    for (height = 0; height < sideLength; height ++) {
        let line = '';
        for (width = 0; width < sideLength; width ++) {
            line+=(black ? ' ' : '#');
            black = !black;
        }
        console.log(line)
        if (sideLength % 2 === 0) black = !black; //toggling start color on each line for even/odd numbers;
    }
}

chessboard(7)