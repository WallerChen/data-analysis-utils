const readline = require('readline');
const fs = require('fs');


const rl = readline.createInterface({
    input: fs.createReadStream('./test_tow.json')
});
rl.on('line', (line) => {
    let timeLine = JSON.parse(line);
    timeLine['publishTime'] = Date.now() + '';
    timeLine['updateTime'] = Date.now() + '';
    // console.log('line:' + line._id);
    console.log(JSON.stringify(timeLine));
    // console.log(line)
});
        
rl.on('close', ()=> {
    console.log('closed')
});