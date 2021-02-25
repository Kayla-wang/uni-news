//把配置项单独处理
import urls from '../baseUrl.js'; 
function service(options = {}) {
       options.url = `${urls.baseUrl}${options.url}`;
          //配置请求头
        options.header = {
        'content-type': 'application/x-www-form-urlencoded'
    };

    return new Promise((resolved, rejected) => {
        //成功
        options.success = (res) => {
            resolved(res);
        }
        //错误
        options.fail = (err) => {
            rejected(err); //错误
        }
        uni.request(options);

    });
}
export default service;