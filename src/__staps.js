/* 
==============projects setup==============
1. firebase auth
2. npx create-router-app auth-router-context
3. npm i firebase
4. npm i react-router-dom
5. tailwind setup
6. daisy ui setup
*/

/* 
=============basic context api setup==============
1. context api: share auth state with other components (across the application)
2. create an UserContext
3. ContextProvider with pass children
4. set the UserContext in the index.js
5. now to consume the context: export AuthContext from UserContext
6. now at header or anywhere else: use useContext hook to get the info from the context
*/

/* 
Auth integration
1. use getAuth by passing the app from firebase config
2. create a function name createUser to return createUserWithEmailAndPassword
*/


/* 
auth state change howar cause:
1. new user hisebe create korle 
2. puran user login korle
3. logout korle
*/