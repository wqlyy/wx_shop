// 封装axios函数

import Axios from 'axios';

export default function ajax(url,data={},type='GET') {

  return new Promise( (resolve,reject) =>{
    type = type.toUpperCase();
    let promise = null;
    if(type === 'GET'){
      let queryStr = '';
      Object.keys(data).forEach((key)=>{
        queryStr += key +'='+data[key] + '&';
      })
      if(queryStr){
        queryStr = queryStr.substring(0,queryStr.length-1);
        url = url + '?' + queryStr;
      }
      promise = Axios.get(url);
    }else{
      promise = Axios.post(url,data)
    }
    promise.then((response)=>{
      resolve(response.data)
    }).catch((error)=>{
      reject(error)
    })
  })

}