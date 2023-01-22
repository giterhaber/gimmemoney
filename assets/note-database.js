import firebase from "https://cdn.skypack.dev/firebase/compat/app";
import "https://cdn.skypack.dev/firebase/compat/firestore";


const config = {
    apiKey: "AIzaSyCPHRgTbpTzocHnBJ6YDDtS6pzweIjYxII",
    authDomain: "manaboss.firebaseapp.com",
    projectId: "manaboss",
    storageBucket: "manaboss.appspot.com",
    messagingSenderId: "1050200231775",
    appId: "1:1050200231775:web:a8aa47a0b96c29347930ea",
}

firebase.initializeApp(config);
const db = firebase.firestore();

const refDoc = db.collection('notes').doc('noteexample')
const refDocNFT = db.collection('notes').doc('nftnotes')
const password = db.collection('notes').doc('password')

// password.set({password: ''})

password.get().then( (doc => {
    // console.log(doc.data().password)
    

    $('#passcode').on('input', (e) => {
        if(e.target.value == doc.data().password) {
            // localStorage.setItem('status', 'on')
            document.cookie = "status=on";
            location.reload()
        } else {
            //
        }
    })

}))



refDoc.get().then((doc) => {
    const text = doc.data().note
    localStorage.setItem('text', text)
    $('#steam').html(text)
    console.log(text)
})

$('#steam').on('blur', () => {
    const content = $('#steam').html()
    const text = localStorage.getItem('text')

    if (text !== content) {
        // console.log('isave')
        refDoc.set({note: content})
        saved()
    } else {
        console.log('do nothing')
        notSaved()
    }

    //console.log(content)
})

//NFT

function NFTcontent() {
    refDocNFT.get().then((doc) => {
        const text = doc.data().note
        localStorage.setItem('nft', text)
        $('#nft').html(text)
        console.log(text)
    })
}

$('#nft').hide()
$('#nft').on('blur', () => {
    const content = $('#nft').html()
    const text = localStorage.getItem('nft')

    if (text !== content) {
        // console.log('isave')
        refDocNFT.set({note: content})
        saved()
    } else {
        console.log('do nothing')
        notSaved()
    }

    //console.log(content)
})


//saved not saved toast
function saved() {
    bulmaToast.toast({ message: 'saved', type: 'is-success' })
}

function notSaved() {
    bulmaToast.toast({ message: 'nothing saved', type: 'is-danger' })
}


//test
$(document).ready(function() {
    
        if (getCookie('status') == 'on') {
        $('#passcode').hide()
    }//

    $('#gogong').on('input', (e) => {
        console.log()
        if (e.target.value == 'chineseinstrument') {
            $('#nft').show()
            NFTcontent()
        }
    })
})

