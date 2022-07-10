import request from '@/utils/request'
export default {
    //课程列表
    getPageList(page,limit,searchObj) {
        return request({
            url: `/eduservice/coursefront/${page}/${limit}`,
            method: 'post',
            data:searchObj
        })
    },
      // 获取课程二级分类
  getNestedTreeList() {
    return request({
      url: `/eduservice/subject/`,
      method: 'get'
    })
  },

  //查询课程信息和讲师信息章节信息
  getById(courseId) {
    return request({
        url: `eduservice/coursefront/${courseId}`,
        method: 'get'
    })
}
}   