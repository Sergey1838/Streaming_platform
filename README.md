# Streaming platform
> Note: I developed this project following the tutorial. I do not reference tutorial, because tutorial is lost.

This project is a streaming platform. **User can actually stream** using [OBS: Open Broadcaster Software](https://obsproject.com/), 
and other people within same network can watch the stream. User can authorize using Google authorization API. User can create,update and delete his streams.


Backend is simulated using "json-server".<br>
Frontend technologies/libraries: axios, flv.js, lodash, react, react-router, redux, redux-form, redux-thunk.<br>
Rtmpserver: node-media-server.

#### Important: to enable Google authentification feature and fully enjoy the app, please do next:

1. For basic information about OAuth 2.0 read [this](https://developers.google.com/identity/protocols/OAuth2)
2. Follow step №1 from the link above - [Obtain OAuth 2.0 credentials from the Google API Console.](https://developers.google.com/identity/protocols/OAuth2#1.-obtain-oauth-2.0-credentials-from-the-google-api-console.)
to get "client ID"
3. In the project, set a value in the file(line 13): root->client->src->components->GoogleAuth.js (Beginning of the class and the function,
where you should change the value is below)

```javascript
class GoogleAuth extends React.Component{

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        //Read README.md to set a value below!!!!!
        clientId: 'you want a real value here!',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
```
**Why did not I do this?** I did, but I was not sure whether I should share my credentials with public.

---
How to run the project(node should be installed):
1. Type "npm run start" in terminal in "api" folder
2. Type "npm run start" in the other terminal in "client" folder
3. In case of streaming, you also should run rtmp server
---
You have to set up OBS to stream. I don't describe set up process here.
