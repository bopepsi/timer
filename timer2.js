// Instead of receiving all the timers ahead of time via process.argv, let's listen for user input and set timers "on demand".
`The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating`
const { write } = require('fs');
const { stdout } = require('process');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sdin = process.stdin;
sdin.setRawMode(true);
sdin.setEncoding('utf8');
const sdout = process.stdout;
const beep = () => {
    process.stdout.write('\x07');
};
sdin.on('data', key => {
    if (key === 'b') {
        beep();
    }
    if (key >= 1 && key <= 9) {
        sdout.write(`\rsetting timer for ${key} seconds..`)
        setTimeout(()=>{
            beep()
        },key*1000);
    }
    if (key === '\u0003') {
        sdout.write(`Thanks for using me, ciao!`);
        process.exit();
    };
})

// const message = () => {
    
//     return setTimeout(() => {
//         console.log('Hello');
//     }, 3000);
    
// }

// const timer = () => {
//     rl.question(message(), (answer) => {
//         // * Force exit - \u0003 maps to ctrl+c input
//         if (answer === '\u0003') {
//             console.log(`Thanks for using me, ciao!`);
//             process.exit();
//         };
//         // * Beep right away
//         if (answer === `\u0062`) {
//             process.stdout.write('\x07');
//         }

//         // * Setup timer
//         else {
//             process.stdout.write(`\rsetting timer for ${answer} seconds..`);
//             ((seconds) => {
//                 if (answer >= `\u0031` && answer <= `\u0039`) {
//                     setTimeout(() => {
//                         process.stdout.write('\x07');
//                     }, seconds * 1000)
//                 }
//             })(answer)
//         }
//         console.log(`\n`);

//         timer();
//     });
// };

// timer();





// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const timer = () => {
//     rl.question(`Set up a timer?   `, (answer) => {
//         // * Force exit - \u0003 maps to ctrl+c input
//         if (answer === '\u0003') {
//             console.log(`Thanks for using me, ciao!`);
//             process.exit();
//         };
//         // * Beep right away
//         if (answer === `\u0062`) {
//             process.stdout.write('\x07');
//         }
//         // * Setup timer
//         else {
//             process.stdout.write(`\rsetting timer for ${answer} seconds..`);
//             ((seconds) => {
//                 if (answer >= `\u0031` && answer <= `\u0039`) {
//                     setTimeout(() => {
//                         process.stdout.write('\x07');
//                     }, seconds * 1000)
//                 }
//             })(answer)
//         }
//         console.log(`\n`)
//         timer();
//     });
// };

// timer();



