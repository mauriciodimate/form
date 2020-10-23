const forms = [
    `<form id='thank-you-form'>
    <p>who do you wish to thank?</p>
    <input type='text' name='recipient'>
    <button type 'submit'>send</button>
    </form>
    
    `
    ,
    `<form id='invitation'>
    <p>who do you wish to thank?</p>
    <input type='text' name='recipient'>
    <button type 'submit'>send</button>
    </form>
    `
]
const cards = [
`<h1> Thank you card</h1>
<p> Thank you!<span id='name'></P>`,
`<h1> Invitation Carf</h1>
<p> Hey<span id='name'>, you are invited</P>`
]

function addForm(type){
    
    if(type === 'thankYou'){
    document.getElementById('form-container').innerHTML = forms[0]

    let $form = document.getElementById('thank-you-form')

    $form.addEventListener('submit', function(event){
        console.log('thank you card submitted')
     

     document.getElementById('card-container').innerHTML = cards[0]

    document.getElementById('name').textContent = $form.elements[0].value

        event.preventDefault()
    })
} else if(type === 'invitation'){
    document.getElementById('form-container').innerHTML = forms[1]

    let $form = document.getElementById('invitaion-form')

    $form.addEventListener('submit', function(event){
      
     document.getElementById('card-container').innerHTML = cards[0]

      document.getElementById('name').textContent = $form.elements[0].value

       event.preventDefault()

})

}
}

document.getElementById('thankyou').addEventListener('click',
function () {
       addForm('thankYou')
})

document.getElementById('invitation').addEventListener(
'click', function (){
    addForm('invitation')
})