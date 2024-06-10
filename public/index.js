const button = document.getElementById('authLink'); // Replace with your button's ID
const button1 = document.getElementById('authLink1');
const button2 = document.getElementById('authLink2');
const button3 = document.getElementById('authLink3');
const button4 = document.getElementById('authLink4');
const button5 = document.getElementById('authLink5');
const clientId = 'f8326ff9-0b4f-410b-bf29-1d6e27f382d3'; // Replace with your client ID
const state = 'qwertyio'; // Replace with your desired state value
const redirectUri = 'https://votingapp-v2.vercel.app/voting'; // Replace with your redirect URI
const scope_face = 'openid phone first_name last_name birth_date iin'; 
const scope = 'openid phone first_name last_name birth_date'; 

button.addEventListener('click', () => {
  const authUrl = new URL('https://passport.test.supreme-team.tech/oauth2/auth');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', scope);

  window.location.href = authUrl.toString();
});

button1.addEventListener('click', () => {
  const authUrl = new URL('https://passport.test.supreme-team.tech/oauth2/auth');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', scope);

  window.location.href = authUrl.toString();
});
button2.addEventListener('click', () => {
  const authUrl = new URL('https://passport.test.supreme-team.tech/oauth2/auth');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', scope);

  window.location.href = authUrl.toString();
});
button3.addEventListener('click', () => {
  const authUrl = new URL('https://passport.test.supreme-team.tech/oauth2/auth');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', scope);

  window.location.href = authUrl.toString();
});
button4.addEventListener('click', () => {
  const authUrl = new URL('https://passport.test.supreme-team.tech/oauth2/auth');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', scope);

  window.location.href = authUrl.toString();
});
button5.addEventListener('click', () => {
  const authUrl = new URL('https://passport.test.supreme-team.tech/oauth2/auth');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', scope);

  window.location.href = authUrl.toString();
});

$('#myCarousel').carousel({
   interval: 3000,
})
const recaptchaWidget = document.getElementById('recaptcha-widget');
const recaptchaForm = document.getElementById('recaptcha-form');

$(document).ready(function() {
  $.ajax({
    url: 'https://api.geoapify.com/v1/ipinfo?&apiKey=4fe4a28671bf4a2b855282eafedad6c5', 
    dataType: 'json', 
    success: function(data) {
      if (data.country.iso_code === 'KZ') {
        $("#page-content").show(); 
      } else {
        $("#blocked-message").show(); 
        console.log("Blocked country:", data.country.iso_code); 
      }
    },
    error: function(error) {
      console.error("Error fetching geolocation data:", error);
    }
  });
});

// Initialize reCAPTCHA
grecaptcha.ready(function() { 
grecaptcha.render('recaptcha-widget', {
  'sitekey': '6Ld7LeYpAAAAADdMlwK6QZwn5vsHcsZ5SMgxNEH4',
  'size': 'invisible', // You can choose the size (invisible, normal, compact)
  'callback': () => {
    // Called when the user successfully solves the reCAPTCHA
    submitButton.disabled = false;
  }
});
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