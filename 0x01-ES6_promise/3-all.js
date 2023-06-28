import { createUser, uploadPhoto } from './utils.js';

function handleProfileSignup() {
    return Promise.all([createUser(), uploadPhoto()]).then((data) => {
        console.log(`${data[1].body} ${data[0].firstName} ${data[0].lastName}`);
    },)
        .catch(() => console.log('Signup system offline'));
}


handleProfileSignup();
