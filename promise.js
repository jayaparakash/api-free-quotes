// console.log('task1');
// setTimeout(()=>{
//     console.log('task2');
// },2000)

// console.log('task3');
// console.log('task4');

// function register(){
// setTimeout(()=>{
// console.log('register sucessed');
// },2000)

// }
function sendEmail() {
  console.log("Email send");
}

// register()
// sendEmail()

let btn = document.getElementById('regist')

btn.addEventListener('click', function regist(){

let newregister = new Promise ((reslove, reject) => {
    console.log('registration processing');
  setTimeout(() => {
    console.log("register sucessed");
    reslove();
  }, 2000);
});

newregister.then(() => {
  sendEmail();
});

})