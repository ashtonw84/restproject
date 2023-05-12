

/*sign up function*/
function register(e){
    let formData= {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
}
localStorage.setItem('formData', JSON.stringify(formData));
welcome();
};

function welcome(){
    let {name,email,password}=JSON.parse(localStorage.getItem('formData'));
    var output=document.getElementById('output');
    alert(`Welcome ${name}`)
};

/*log in function*/
$('#pwd').change(function(){
    var a= $("#eml").val();
    var b= $("#pwd").val();
    if(a =="shams@stevenscollege.edu"&& b =="pncrocks"){
        window.location.href = "../manager_page/manager.html"; 
        console.log(action)
    } else{
        console.log("your momma")
    };
    
})