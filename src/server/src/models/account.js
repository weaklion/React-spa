const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const { generateToken } = require('lib/token');

function hash(password){
    return crypto.createHmac('sha256',process.env.SECRET_KEY).update(password)
    .digest('hex');
}


const Account = new Schema({
    profile: {
        username: String
    },
    email: { type: String },
    //소셜 계정으로 가입시 각 서비스에서 제공되는 id와 accesstoken으로 저장
    social :{
        facebook: {
            id: String,
            accessToken : String
        },
        google : {
            id : String,
            accessToken : String
        }
    },
    password : String, //로컬 계정의 경우 비밀번호를 해싱해서 저장
    thoughtCount : { type : Number , default : 0}, // 게시글 작성시마다 1씩 올라감.
    createdAt : { type : Date , default : Date.now} //계정이 생성된 시간 .
});

//모델 메소드 생성
Account.statics.findByUsername = function(username) {
    //객체에 내장되어있는 값을 사용할 시 객체명.키 형식으로 쿼리 하면된다.
    return this.findOne({'profile.username' : username}).exec();   

};

Account.statics.findByEmail = function(email) {
    return this.findOne({email}).exec();
    

};

Account.statics.findByEmailOrUsername =function({username,email}) {
    return this.findOne({
        //$or 연산자를 통해 둘중에 하나를 만족하는 데이터를 찾는다.
        $or : [
            { 'profile.username' : username },
            { email}
        ]
    }).exec();
};

Account.statics.localRegister = function({username,email,password}) {
    //데이터를 생성 할 때는 new this를 사용
    const account = new this({
        profile: {
            username
        },
        email,
        password:hash(password)
    });


    return account.save();
};

Account.methods.validatePassword = function(password) {
    const hashed = hash(password);

    
    return this.password === hashed;
};
Account.methods.generateToken = function(){
    //jwt에 담을 내용
    const payload = {
        _id : this._id,
        profile: this.profile
    };
    return generateToken(payload,'account');
}



module.exports = mongoose.model('Account',Account);