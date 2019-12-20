/*
Eloquent Javascript, page 165, write a regular expression to change all
single-quotes in a page with doublequotes, while leaving grammatically
correct apostrophes intact.
*/

const quote = 
`   The test read, '1) When did the Pilgrims land at Plymouth Rock?' 
    '1620,' Calvin wrote, 'As you can see, I've memorized this utterly useless fact long enough to pass a test question. I now intend to forget it forever. You've taught me nothing except how to cynically manipulate the system. Congratulations.'    
    He smiled to himself. 
    'They say the satisfaction of teaching makes up for the lousy pay.'`

let revisedQuote = quote.replace(/(^)'|(\s)'|'(\s)|'($)/g, "$1$2\"$3$4")
//dollar signs refer to the things in the parentheticals; four parentheticals, four dollarsigns.
console.log(revisedQuote)
