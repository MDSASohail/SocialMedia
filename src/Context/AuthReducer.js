const reducer=(state,action)=>{
    switch(action.type)
    {
        case "LoginStart":
        return {user:null,isFetching:true,error:false};
    

        case 'LoginSuccess':
            return {user:action.payload,isFetching:false,error:false};
        
        case "LoginFail":
            return {user:null,isFetching:false,error:true};
        

        default:
            return state;
    }

    
}


export default reducer;