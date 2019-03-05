//全局reducer
const init_state = {
    loginInfo:{},
    loading_login:false,
}

const globalreducers = {
    loginInfo:function(state=init_state.loginInfo,action={}){
        const {type,payload} = action;
        switch(type){
            // 登录
            case 'LOGIN_SUCCESS':
                return Object.assign({},state,{isLogin:true,token:payload.token});
            case "LOGIN_FAILED":
                return Object.assign({},state);
            default:
                return state;
        }
    },
    loading_login:function(state=init_state.loading_login,action={}){
        const {type,payload} = action;
        switch(type){
            // 登录loading
            case 'LOGIN_PENDING':
                return true;
            case 'LOGIN_SUCCESS':
                return false;
            case "LOGIN_FAILED":
                return false;
            default:
                return state;
        }
    },
}

export default globalreducers;