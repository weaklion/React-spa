const jwtSecret = "USER_JSON_WEB_TOKEN_KEY_!@#$";
const jwt = require('jsonwebtoken');
//토큰생성
//@params {any } payload
//@returns { string } token

//jwt.sign(토큰에 넣을 데이터, 비밀키, 옵션,콜백함수 )
//토큰은 만들어지고 난후 7일동안 유효함
function generateToken(payload){
    return new Promise(
        (resolve,reject) => {
            jwt.sign(
                payload,
                jwtSecret,
                {
                    expiresIn: '7d'
                }, (error,token) => {
                    if(error) reject(error);
                    resolve(token);
                }
            );
        }
    );
};
function decodeToken(token) {
    return new Promise(
        (resolve,reject) => {
            jwt.verify(token,jwtSecret,(error,decoded)=>{
                if(error) reject(error);
                resolve(decoded);
            });
        }
    );
}
exports.jwtMiddleware = async (ctx,next ) => {
    const token = ctx.cookies.get('access_token'); //ctx에서 access_token 을 읽어온다.
    if(!token) return next(); 

    try{
        const decoded = await decodeToken(token); //토큰 디코딩

        //토큰 만료일이 하루밖에 안남을시 토큰 재발급
        if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24 ) {
            //하루가 지날시 갱신
            const {_id ,profile } = decoded;
            const freshToken = await generateToken({_id,profile}, 'account');
            ctx.cookies.set('access_token',freshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7, //7일
                httpOnly: true
            });
        }
        //ctx.request.user 에 디코딩된 값을 넣어 준다.
        ctx.request.user=decoded;

 } catch(e){
        //token validate 실패
        ctx.request.user = null;
    }

    return next();
};
exports.generateToken = generateToken;