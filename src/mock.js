import mock from 'mockjs';

/**
 * 公共请求返回配置
 * @param {Number} errcode 接口请求状态
 */
const schema = (errcode = 0) => {
    let returnData = null;
    errcode === 0 ? returnData = {
        'errcode' : 0,
        'errmsg' : '成功',
    } : returnData = {
        'errcode' : 1,
        'errmsg' : '失败',
    };
    return returnData;
}

// 3个参数分别为
// 请求地址：/course/getRecommendOnAirLiveList
// 请求方式：get
// 请求返回：
/**
 * getRecommendOnAirLiveList请求返回配置
 * @param {Object} parames 接口请求参数
 */
mock.mock(/\/course\/getRecommendOnAirLiveList/g, 'get', {
    ...schema(),
    'data' : {
        'list|2-10' : [
            {
                'id|+1' : 0,
                'name|4-8' : ' name ',
                'age' : 28
            }
        ]
    }
});
