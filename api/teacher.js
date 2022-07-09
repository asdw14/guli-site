import request from '@/utils/request'
export default {
    //教师列表
    getPageList(page,limit) {
        return request({
            url: `/eduservice/teacherfront/${page}/${limit}`,
            method: 'get',
        })
    },

    //教师信息和教师课程
    getById(id) {
        return request({
            url: `/eduservice/teacherfront/${id}`,
            method: 'get',
        })
    },
}