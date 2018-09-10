import axios from 'axios'
import Qs from 'qs'

var instance = axios.create({
    // 默认方法设置
    method : 'POST',
    //返回数据的格式
    //其可选项是arraybuffer,blob,document,json,text,stream
    responseType : 'json',
    xsrfCookieName : 'XSRF-TOKEN',
    // 返回数据设置，有data和headers两个参数
    transformRequest : [function (data) {
        // TODO处理请求参数
        data = Qs.stringify(data);
        return data;
    }],
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    // 请求超时设置
    timeout : 3000,
  
});
// response处理
instance.interceptors.response.use(
    (response) => response.data,
    (error)        => Promise.reject(error)
);

export default {
    instance
}
