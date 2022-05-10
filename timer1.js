// process.stdout.write('\x07')
// console.log('\u0007');

/*
For this app, we can think of at least these three:

No numbers are provided: Easy.It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore / skip any numbers that are negative.We can't schedule anything in the past.
An input is not a number: Ignore / skip these as well, instead of attempting to call setTimeout with a non - number.
*/



const args = process.argv.slice(2);
console.log(args);

const timer = ((arr) => {
    if (!arr || arr.length === 0) return;
    arr.forEach(element => {
        console.log(Number(element));
        if (Number(element) !== NaN && Number(element) > 0) {
            setTimeout(() => {
                process.stdout.write(`\r ${element} seconds...`);
                process.stdout.write('\x07');
            }, element * 1000)
        }
    });
})(args)



// node timer1.js 10 3 5 15 9 