let songs = ['https://open.spotify.com/track/3Z8FwOEN59mRMxDCtb8N0A?si=d49fd6a42bbe45e4','https://open.spotify.com/track/5RwV8BvLfX5injfqYodke9?si=540358ade85c41d5'];

let Form = document.getElementById("form");

function getSong() {

    let RanNum = Math.floor(Math.random() * songs.length);

    Form.setAttribute("action", songs[RanNum]);

}