let postData = ()=>{
    let name = document.getElementById('name').value
    let mobile = document.getElementById('mobile').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
   

    
    axios.post('https://64058341eed195a99f849851.mockapi.io/r1/sid',{name:name,mobile:mobile,email:email,password:password})
    .then((res)=>{
        console.log(res.data);
        console.log("User registered successfully");
        alert("User registered successfully")
    })
    .catch((err)=>{
        console.log(err);
    })


}

let getData = ()=>{
    let email =  document.getElementById('email').value;
    let password = document.getElementById('password').value;
    axios.get(`https://64058341eed195a99f849851.mockapi.io/r1/sid`)
    .then((res)=>{
        console.log(res.data);
        var success = false;
      console.log(res.data.length);
      console.log(res);
      for (var i = 0; i < res.data.length; i++) {
        if (
          res.data[i].email == email &&
          res.data[i].password == password
        ) {
          success = true;
          break;
        }
      }

      if (success) {
        
        window.location.href = "weather.html";
      } else {
        alert("Invalid User")
      }
    })
    .catch((err)=>{
        console.log(err);

    })}
    



    
