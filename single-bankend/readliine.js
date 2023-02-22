const readline = require('readline');
const fs = require('fs');

// name: STRING(30),
// nick_name: STRING(30),
// class: STRING(30),
// class_type: INTEGER,
// collection: STRING(30),
// avatar_url: STRING(2048),
// age: INTEGER,
// sex: STRING(30),
// wxcode: STRING(30),
// image_list: TEXT,
// desc: TEXT,
// openid: STRING,
// created_at: DATE,
// updated_at: DATE,

// 单身同学录用户字段默认值
let defaultObj = {
    name: '',
    nick_name: '',
    class: '',
    class_type: 0,
    collection: '',
    avatar_url: '',
    age: 0,
    sex: '',
    wxcode: '',
    image_list: '',
    desc: '',
    openid: ''
}

const rl = readline.createInterface({
    input: fs.createReadStream('./database_export-AnEVXYZYQfOf.json')
});
// 定义map去重
const map = {};
// 用户总量
const userList = [];
rl.on('line', (line) => {
    let timeLine = JSON.parse(line);
    let newObj = {};
    // 获取所有keys
    if(map[timeLine.openid]) {
        return;
    }
    map[timeLine.openid] = 1;
    let objKeys = Object.keys(defaultObj);
    for (const key of objKeys) {
        if(key == 'avatar_url') {
            newObj['avatar_url'] = timeLine['avatarUrl'];
        } else if (key == 'nick_name') {
            newObj['nick_name'] = timeLine['nickName'];
        } else {
            timeLine[key] ? newObj[key] = timeLine[key] :  newObj[key] = defaultObj[key];
        }
    }
    console.log('newObj:' + newObj.class);
    console.log('timeLine:' + timeLine.class)

    userList.push(newObj);
    // timeLine['publishTime'] = Date.now() + '';
    // timeLine['updateTime'] = Date.now() + '';
    // console.log('line:' + line._id);
    // console.log(JSON.stringify(newObj));
    // console.log(line)
});

rl.on('close', ()=> {
    // console.log(JSON.stringify(userList));
    console.log(userList.length);   
    fs.writeFileSync('userList.js', JSON.stringify(userList));
    console.log('closed');
});