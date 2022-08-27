
let displays=document.querySelector('.inputtext')
let allbuttons = Array.from(document.getElementsByTagName('button'));


allbuttons.forEach(function(button) {
    // console.log('clicked');
    
    button.addEventListener('click',calculate)

});


function calculate(e){
    // console.log(e.target.value);
    const pressbutton=e.target.value;
    if(pressbutton==="="){
        if(displays.value!==''){
            displays.value=eval(displays.value)
        }
    }
    else if(pressbutton==="C"){
        displays.value='';
    }
    else{
        displays.value += pressbutton;
        // console.log(displays.value);
    }
}