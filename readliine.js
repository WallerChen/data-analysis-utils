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
    openid: '',
    created_at: '',
    updated_at: ''
}

const rl = readline.createInterface({
    input: fs.createReadStream('./database_export-AnEVXYZYQfOf.json')
});
rl.on('line', (line) => {
    let timeLine = JSON.parse(line);
    // 获取所有keys
    let objKeys = Object.keys(defaultObj);
    for (const key of objKeys) {
        if(key == 'avatar_url') {
            timeLine['avatar_url'] = defaultObj['avatarUrl'];
        } else if (key == 'nick_name') {
            timeLine['avatar_url'] = defaultObj['nickName'];
        } else {
            timeLine[key] ? null : timeLine[key] = defaultObj[key];
        }
    }
    // timeLine['publishTime'] = Date.now() + '';
    // timeLine['updateTime'] = Date.now() + '';
    // console.log('line:' + line._id);
    console.log(JSON.stringify(timeLine));
    // console.log(line)
});
        
rl.on('close', ()=> {
    console.log('closed')
});