var password=document.getElementById("password"); //FROM TAG
    var flag=1;
    function show(ele){
        var type=password.getAttribute('type'); //PWD

        //CHANGING BUTTON TEXT & CHANING TYPE NUM --> TEXT
        if(type === 'password'){
            password.setAttribute('type','text');
            ele.innerText='Hide Password';
        }
        else{
            password.setAttribute('type','password');
            ele.innerText='Show Password';
        }
    }

    // BOTH ARE EQUAL OR NOT
    function check(elem){
        if(elem.value.length>0){
            if(elem.value != password.value){
                document.getElementById("alert").innerText="Enter Correct Password";
                flag=0;
            }else{
                document.getElementById("alert").innerText="";
                flag=1;
            }
        }else{
            document.getElementById("alert").innerText="Please enter confirm password";
            flag=0;
        }
    }
    // VALIDATION
    function validate(){
        if(flag==1){
            return true;
        }else{
            return false;
        }
    }