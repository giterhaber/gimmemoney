//login

function statusLOG() {
    // const status = localStorage.getItem('status')
    const status = getCookie('status')
    if(!status) {
        location.href = 'index.html'
    } else {
        console.log('a')
    }
}

statusLOG()

$(document).ready(function() {
    
    if (getCookie('status') == 'on') {
        $('#passcode').hide()
    }
})


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

console.log(getCookie('status'));
