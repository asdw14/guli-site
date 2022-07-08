import request from '@/utils/request'
export default {
    //用户登录
    submitLogin(loginVo) {
        return request({
            url: `/ucenterservice/apimember/login`,
            method: 'post',
            data:loginVo
        })
  },
    //根据token获取用户信息
    getLoginInfo(){
        return request({
            url: `/ucenterservice/apimember/auth/getLoginInfo`,
            method: 'get',
        })
    }
}