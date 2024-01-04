export const LoginStart=()=>({type:"LoginStart"});


export const LoginSuccess=(user)=>({type:"LoginSuccess",palyload:user});
export const LoginFail=(err)=>({type:"LoginFail",palyload:err});