import request from '@/utils/request'
export default {
      //用户注册
    submitRegister(userInfo) {
        return request({
            url: `/ucenterservice/apimember/register`,
            method: 'post',
            data:userInfo
        })
  },
    //根据手机号码发送短信
    getPhoneMessge(phone){
        return request({
            url: `/msm/send/${phone}`,
            method: 'get',
        })
    }
}