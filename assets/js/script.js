// TODO: Create an array with five question objects
var question = [
    {q: ' If you add the two numbers on the opposite sides of dice together, the answer is always 7.', a: 'T' },
    {q: ' You can sneeze during sleep.', a: 'F' },
    {q: ' A double rainbow is a mirror image of the first rainbow.', a: 'T' },
    {q: ' Bats always turn right when leaving a cave.', a: 'F' },
    {q: ' You get a new top layer of skin (epidermis) every 7 days.', a: 'F' },
    {q: ' Bananas grow upside down.', a: 'T' }
];

//console.log(question)

// TODO: Create a variable to keep track of the score
var score = 0;

// TODO: Iterate over the questions array and display each question in a confirmation box
for (var i = 0; i < question.length; i++)
{
    var ans = confirm(question[i].q);
    //console.log(ans)

    // TODO: Check the user's answer against the correct answer
    if ((ans === true && question[i].a === 'T') || 
        (ans === true && question[i].a === 'F'))
    {
        // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
        score++;
        alert('Correct');
    }
    else
    {
        // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
        alert('Incorrect');
    }
    
}
// TODO: At the end of the game, alert the user with the final score
alert('GAME IS OVER !' + '\nYour final score is ' + score + ' out of ' + question.length);



