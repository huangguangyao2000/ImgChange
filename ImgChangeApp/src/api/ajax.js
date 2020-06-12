import axios from 'axios'
import fs from 'fs'
import {
    message
} from 'antd'

export default function ajax(url, data = {}, type = 'GET',config={}) {

    return new Promise((resolve, reject) => {
        let promise
        // 1. 执行异步ajax请求
        if (type === 'GET') { // 发GET请求
            promise = axios.get(url, { // 配置对象
                params: data // 指定请求参数
            })
        } else { // 发POST请求
            promise = axios.post(url, data,config)
        }
        // 2. 如果成功了, 调用resolve(value)
        promise.then(response => {
            console.log(response);
            resolve(response)
            // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
        }).catch(error => {
            reject(error)
            message.error('请求出错了: ' + error)
        })
    })
}

