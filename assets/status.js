//login

function statusLOG() {
    const status = localStorage.getItem('status')
    if(!status) {
        location.href = 'index.html'
    } else {
        console.log('a')
    }
}

statusLOG()

$(document).ready(function() {
    
    if (localStorage.getItem('status') == 'on') {
        $('#passcode').hide()
    }
})