const email = document.getElementById("email");
const pass = document.getElementById("pass");
let user;

function login(){
    console.log(email.value)
    db.collection("users").where("email", "==", email.value)
    .get()
    .then((res) => {
        res.forEach((doc) => {
            console.log("user")
            user = {
                id: doc.id,
                ...doc.data()
            }
            console.log(user)
        });
    })
}