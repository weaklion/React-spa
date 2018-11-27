const Joi = require('joi');
const Account = require('models/Account');

exports.localRegister = async (ctx) => {
    //데이터 검증 
        const schema = Joi.object().keys({
        username:Joi.string().alphanum().min(4).max(15).required(), //4~15 영문자
        email: Joi.string().email().required(), //이메일은 이메일 형식 
        password: Joi.string().required().min(6) //최소 6자
    });

    const result = Joi.validate(ctx.request.body, schema);

    //스키마 에러
    if(result.error) {
        ctx.status = 400;
        return ;
    };
//아이디 /이메일 중복 체크
    let existsing = null;
try{
    existsing = await Account.findByEmailOrUsername(ctx.request.body);
}catch(e){
    ctx.throw(500,e);
}

if(existsing){
    //중복일시
    ctx.status = 409; 
    ctx.body = {
        key : existsing.email === ctx.request.body.email ? 'email' : 'username'
    };
    return ;
}

//계정 생성
let account = null;
try{
    account = await Account.localRegister(ctx.request.body);
}catch(e){
    ctx.throw(500,e);
}

let token = null;
try{
    token = await account.generateToken();
} catch(e){
    ctx.throw(500,e);
}
//ctx.cookies.set('이름,'값',설정);
ctx.cookies.set('access_token',token,{httponly:true, maxAge: 1000* 60 * 60 * 24 * 7});
ctx.body = account.profile; //프로필 정보로 응답

};
exports.localLogin = async (ctx) => {
    //데이터 검증
    const scehma = Joi.object().keys({
        email: Joi.string().email().required(),
        password:Joi.string().required()
    });
    const result = Joi.validate(ctx.request.body,scehma);
if(result.error){
    ctx.status = 400;
    return ;
}

const { email, password } = ctx.request.body;

let account=null;
try{
    //이메일로 계정찾기
    account = await Account.findByEmail(email);
}catch(e){
    ctx.throw(500,e);
}

if(!account) {
    ctx.status= 402; //id forbidden
    return ;
}

if(!account.validatePassword(password)) {
    ctx.status = 403; // password forbidden
        return ;
}

let token = null;
try{
    token = await account.generateToken();
} catch(e){
    ctx.throw(500,e);
   

    
}
ctx.cookies.set('access_token',token,{httpOnly: true, maxAge: 1000* 60 * 60 * 24 * 7});
ctx.body = account.profile;
};

//이메일 / 아이디 존재 유무 확인 
exports.exists = async (ctx) => {
    const {key, value} = ctx.params;
    let account =null;

    try{
        account = await (key == 'email ' ? Account.findByEmail(value) : Account.findByUsername(value));
    } catch(e){
        ctx.throw(500,e);
    };

ctx.body={
    exists: account !==null
};

};

exports.logout = async (ctx) => {
   ctx.cookies.set('access_token',null,{
       maxAge :0,
       httponly:true
   });
   ctx.status = 204;
};
exports.check = (ctx) => {
    const { user } = ctx.request;

if(!user) {
    ctx.status = 403;
    return ;
}
ctx.body= user.profile;

}