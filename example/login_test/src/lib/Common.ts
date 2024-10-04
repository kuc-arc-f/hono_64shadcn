

import axios from 'axios';
import buildCommon from './buildCommon';
import path from 'path';
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from 'hono/cookie'
//
const Common = {
  /**
  *
  * @param
  *
  * @return: false= NG
  */   
  validUser: async function (c: any): any
  {
    try{
      let ret = false;
      // 除外処理 : login etc
      console.log('Requested path:', c.req.path);
      //c.req.method === 'GET'
      if (c.req.method !== 'GET') {
        return true;
      }
      if(c.req.path === "/login"){
        return true;
      }
      const key = import.meta.env.VITE_APP_NAME + "_auth";
      const cookieUser = getCookie(c, key);
console.log("cookieUser=", cookieUser);
      if(cookieUser){
        return true;
      }
      return ret;
    } catch (e) {
      console.error(e);
    }    
  },  
  /**
  *
  * @param
  *
  * @return: false= NG
  */   
  validApiKey: function (body: any): any
  {
    try{
    } catch (e) {
      console.error(e);
    }    
  },
}
export default Common;
