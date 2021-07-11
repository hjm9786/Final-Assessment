function get_number(prompt)
{
    let valid_input = false;
    let range, input;

    while(!valid_input)
    {
        input = window.prompt(prompt);

        range = Number(input);

        if (range != NaN && range > 0)
        {
            valid_input = true;
        }
    }
    return range;
}

let range = get_number("Please enter your play range");

let num = Math.floor(Math.random() * range) + 1;

console.log(num);

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if(guess == num) {
        message.innerHTML = "You got it!";
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
    }
    else {
        message.innerHTML = "No, try a higher number.";
    }
}