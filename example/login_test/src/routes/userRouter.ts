import type { Database } from '@cloudflare/d1'
import { renderToString } from 'react-dom/server';
import LibHttp from '../lib/LibHttp';
//import LoadList from './post/LoadList';
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from 'hono/cookie'
const retObj = {ret: "NG", data: [], message: "Error, Internal Server Error"};

//
const Router = { 
  /**
   * 
   * @param
   *
   * @return
   */    
  login: async function(c: any) :any
  {
    const retObj = {ret: 500, message: ""};
    try{    
      const body = await c.req.json();
console.log(body);
console.log("VITE_APP_NAME=" , import.meta.env.VITE_APP_NAME);
console.log("VITE_AUTH_USER_ID=" , import.meta.env.VITE_AUTH_USER_ID);
console.log("VITE_AUTH_USER_MAIL= ", import.meta.env.VITE_AUTH_USER_MAIL);
//console.log("VITE_AUTH_PASSWORD= ", import.meta.env.VITE_AUTH_PASSWORD);
      if(!body){
        throw new Error("nothing, body");
      }
      if(import.meta.env.VITE_AUTH_USER_MAIL === body.email
        && import.meta.env.VITE_AUTH_PASSWORD === body.password
      ) {
        const key = import.meta.env.VITE_APP_NAME + "_auth"
        setCookie(c, key, import.meta.env.VITE_AUTH_USER_ID, 
        {
          maxAge: 60 * 60 * 12,
          httpOnly: true,       // JavaScriptからアクセス不可にしてセキュリティ向上
          secure: true,         // HTTPSのみで送信
          sameSite: 'Strict',   // クロスサイトリクエストを防ぐ
        });
        retObj.ret = 200;
        return retObj;
      }
      retObj.ret = 400;
      return retObj;
    } catch (e) {
      console.error(e);
      return retObj;
    } 
  },
  /**
   * 
   * @param
   *
   * @return
   */
  logout: async function(c: any) :any
  {
    const retObj = {ret: 500, message: ""};
    try{    
      const body = await c.req.json();
console.log(body);
      if(!body){
        throw new Error("nothing, body");
      }
      const key = import.meta.env.VITE_APP_NAME + "_auth"
      deleteCookie(c, key);

      retObj.ret = 200;
      return retObj;
    } catch (e) {
      console.error(e);
      return retObj;
    } 
  },
}
export default Router;