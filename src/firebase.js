import { initializeApp } from 'firebase-admin/app';
import Admin,{credential} from 'firebase-admin';


export const firebaseApp = () =>
{
    const config = require('../key/hardworking-8888-51ff8e59a547.json');

    const c = credential.cert(config)

    const app = initializeApp({
        credential: c,
        authDomain: "hardworking-8888.firebaseapp.com",
        databaseURL: `https://hardworking-8888.firebaseio.com`,
        projectId: "hardworking-8888"
    });
    return app;
}

export const Firebase = ()=>{
    // Admin.initializeApp();

    const Auth = Admin.auth();
    return Auth;
}