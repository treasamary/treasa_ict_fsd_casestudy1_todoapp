
     let username = document.getElementById("username");
     let error= document.getElementById("error");
     let password=document.getElementById("password");
     function formvalidate(){
     if(username.value=="admin"&&password.value=="12345"){
        
         username.style.border="5px solid green";
         password.style.border="5px solid green";
         
         alert("Thank you for logging in ")
          alert("You are now directed to home page of TO DO App ")
          return true;
     }
    
     else if(username.value=="")
              {
              alert("username cannot be empty");
              username.style.border="5px solid red";
              return false;
     
              }
         else if(password.value==""){
              alert("password cannot be empty");
              password.style.border="5px solid red";
              return false;
     
              }

     else{
         alert("wrong username or password");
         username.style.border="5px solid red";
         password.style.border="5px solid red";
         return false;
     }
     }






