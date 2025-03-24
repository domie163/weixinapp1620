const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2axo8/",
            name: "springboot2axo8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2axo8/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的周边美食推荐系统"
        } 
    }
}
export default base
