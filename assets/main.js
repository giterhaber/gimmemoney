$('.content').prepend(`
<br>
<input type="password" id="passcode" class="input is-small" style="width: 150px;" placeholder="code here">
<br><br>

<button id="smile" class="button">smile</button>

<button id="banana" class="button">banana</button>

<button id="santeria" class="button">santeria</button>

<button id="gimme" class="button">gimme</button>

<button id="android18" class="button">android18</button>

<button id="agarith" class="button">agarith</button> <br> <br> 

<button id="bronze" class="button">bronze</button>

<button id="silver" class="button">silver</button>

<button id="inks" class="button is-small" style="margin-left: 150px">inks</button>
`)

//active status

const test = $('button').each(function() {
    const item = localStorage.getItem('page')

    if (item == $(this).attr('id')) {
        console.log($(this).attr('id'))
        $(this).addClass('is-primary')
    }
})

//button clck
function setItem(item) {
    localStorage.setItem('page', `${item}`)
}

$('#smile').on('click', () => {
    location.href = 'smile.html'
    setItem('smile')
})

$('#banana').on('click', () => {
    location.href = 'banana.html'
    setItem('banana')
})

$('#santeria').on('click', () => {
    location.href = 'santeria.html'
    setItem('santeria')
})

$('#gimme').on('click', () => {
    location.href = 'gimme.html'
    setItem('gimme')
})

$('#android18').on('click', () => {
    location.href = 'android18.html'
    setItem('android18')
})

$('#agarith').on('click', () => {
    location.href = 'agarith.html'
    setItem('agarith')
})

$('#bronze').on('click', () => {
    location.href = 'bronze.html'
    setItem('bronze')
})

$('#silver').on('click', () => {
    location.href = 'silver.html'
    setItem('silver')
})

$('#inks').on('click', () => {
    location.href = 'inks.html'
    setItem('inks')
})



//
$('p').each(function() {
    $(this).on('click', () => {

        console.log('y')
        navigator.clipboard.writeText($(this).html())
        bulmaToast.toast({ message: 'copied', type: 'is-success' })

        $(this).css({"background-color": "#90EE90"})

        setTimeout(() => {
            $(this).css({"background-color": "#292a2d"})
        }, 2000);

    })
})

//logout

$('.content').prepend(`<br>
<button id="out" class="button is-danger is-small">OUT</button><br><br>
`)

$('.content').prepend(`<br>
<button id="out" class="button is-danger is-small">OUT</button><br><br>
`)

$('#out').on('click', () => {
    // localStorage.removeItem('status')
    document.cookie = "status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.href = 'index.html'
})
