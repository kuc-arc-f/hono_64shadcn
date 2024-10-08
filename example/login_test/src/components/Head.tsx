//import {Link } from 'react-router-dom';
import ClientUtil from '../client/lib/ClientUtil';
import HttpCommon from "../client/lib/HttpCommon";

//
function Page() {
  //
  const procLogout = async function(){
    try {
      console.log("#procLogout");
      const json = await HttpCommon.post({}, "/api/user/logout");
      console.log(json);
      if(json.ret !== 200){
        alert("Error, Logout");
      }else{
        alert("OK, Logout");
        location.href = '/';
      }
    } catch (e) {
      console.error(e);
    } 
  }
  //
  return (
  <div>
    <a href="/">[ Home ]</a>
    <button onClick={()=>procLogout()} className="ms-2">[ Logout ]</button>
    <hr />
  </div>
  );
}
export default Page;
/*
<Link to="/">[ Home ]</Link>
*/