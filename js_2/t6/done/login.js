function login() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    db.collection('users')
    .where('email', '==', email.value)
    .get()
    .then((res)=>{
          let logged = false;
          res.forEach(doc => {
               let user  = {
                    id: doc.id,
                    ...doc.data()
               }
               console.log(user)
               if(user.password == password.value){
                    logged = true;
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.href = 'index.html';
               }
          })
          if (logged == false){
               alert('Невірний логін або пароль')
          }
    });
}
function checkUser() {
    const user = localStorage.getItem('user');
    console.log(user)
    if(user != null || user != ''){
         window.location.href = 'index.html';
    }
}