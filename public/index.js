$('#myCarousel').carousel({
   interval: 3000,
})

const button = document.getElementById('authButton'); // Replace with your button's ID
const clientId = 'f8326ff9-0b4f-410b-bf29-1d6e27f382d3'; // Replace with your client ID
const state = 'qwertyio'; // Replace with your desired state value
const redirectUri = 'https://votingapp-v2.vercel.app/voting'; // Replace with your redirect URI
const scope = 'openid%20phone%20first_name%20last_name%20birth_date'; // Replace with your desired scopes

authLink.addEventListener('click', () => {
  const authUrl = new URL('https://passport.test.supreme-team.tech/oauth2/auth');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', scope);

  window.location.href = authUrl.toString();
});

// function generateRandomString() {
//     const array = new Uint32Array(28);
//     window.crypto.getRandomValues(array);
//     return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join(''); 
// }

// function generateAuthUrl(...scopes) {
//     const clientId = "f8326ff9-0b4f-410b-bf29-1d6e27f382d3";
//     const redirectUri = "https://votingapp-v2.vercel.app/voting"
//     return new Promise((resolve, reject) => {
//         const authUrl = `https://passport.test.supreme-team.tech/oauth2/auth?` +
//         `&response_type=code` +
//         `client_id=${clientId}` +
//         `&state=${generateRandomString()}` +
//         `&redirect_uri=${encodeURIComponent(redirectUri)}` +
//         `&scope=${scopes.join("%20")}` /* + 
//         `&code_challenge_method=S256`*/;
//         console.log("Constructed authorization URL:", authUrl);
//         // return authUrl;
//         resolve(authUrl);
//     });
// }

// const authLink = document.getElementById("authLink")

// authLink.addEventListener('click', () => {
//     function generateAuthUrl(...scopes) {
//         const clientId = "f8326ff9-0b4f-410b-bf29-1d6e27f382d3";
//         const redirectUri = "https://votingapp-v2.vercel.app/voting"
//         return new Promise((resolve, reject) => {
//             const authUrl = `https://passport.test.supreme-team.tech/oauth2/auth?` +
//             `&response_type=code` +
//             `client_id=${clientId}` +
//             `&state=${"quertyio"}` +
//             `&scope=${scopes.join("%20")}` /* + 
//             `&code_challenge_method=S256`*/;
//             console.log("Constructed authorization URL:", authUrl);
//             // return authUrl;
//             resolve(authUrl);
            
//         });
//     }
//     generateAuthUrl("openid", "first_name")
//       .then(authUrl => {
//         window.location.href = authUrl; 
//       })
//     //   .catch(error => {
//     //     console.error("Error generating authorization URL:", error);
//     //     // Handle the error
//     //     });
// });