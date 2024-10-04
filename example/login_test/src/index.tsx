import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from 'hono/cookie'
import Common from './lib/Common';
//
// router
import userRouter from './routes/userRouter';
//
const app = new Hono();
console.log("VITE_APP_NAME=" , import.meta.env.VITE_APP_NAME);
console.log("VITE_AUTH_USER_ID=" , import.meta.env.VITE_AUTH_USER_ID);

//Middleware-auth
app.use("/*", async (c, next) => {
  const key = import.meta.env.VITE_APP_NAME + "_auth";
  const valid = await Common.validUser(c);
  if(!valid) {
    console.log("nothing, user-cookie");
    return c.redirect('/login');
    //await next();
  } else {
    await next();
  }
});

// API
app.post('/api/user/login', async (c) => { 
  const body = await c.req.json();
  const resulte = await userRouter.login(c);
  return c.json(resulte);
});
app.post('/api/user/logout', async (c) => { 
  const body = await c.req.json();
  const resulte = await userRouter.logout(c);
  return c.json(resulte);
});

//
app.get('*', (c) => {
  return c.html(
    renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          {import.meta.env.PROD ? (
            <link href="/static/style.css" rel="stylesheet" />
          ) : null}
        </head>
        <body>
          <div id="app"></div>
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js"></script>
          ) : (
            <script type="module" src="/src/client.tsx"></script>
          )}
        </body>
      </html>
    )
  )
})

export default app
