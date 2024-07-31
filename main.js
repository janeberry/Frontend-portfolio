// About - education & activity
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents"); 

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link")   
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

//google sheet (reference: jamiewilson/form-to-google-sheets)
const scriptURL = 'https://script.google.com/macros/s/AKfycbxMjlMF_caqxKLh6acyqbO6ZHsJRe8eIPDhV-Rc688Sefw1_6emKDYqokeeFGsFJfrxkQ/exec'  
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('success')

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            form.reset();
            msg.style.display = 'block';
            setTimeout(() => {
                msg.style.display = 'none';
            }, 2000);
        })    
        .catch(error => console.error('Error!', error.message))
    }
)




