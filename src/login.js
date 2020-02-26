import React from 'react';
import {useState} from 'react'; 


export default function Login(){
    let intialstate='anbu';
    // let [user, setUser] = useState(intialstate);
    // console.log(user);

    let [user, setUser] = useState({
        userName:'',
        passWord:'',
        // userNameIsInvalid:true,
        // passwordIsInvalid:true
        userNameIsInvalid:false,
        passwordIsInvalid:false
    });
    

    function updateUserName(event){
        let userName = event.target.value;
       
        if(userName == ""){
            setUser({...user, userName:event.target.value,userNameIsInvalid:true});
        }
        else{
            setUser({...user, userName:event.target.value,userNameIsInvalid:false});
        }      
    }
    
    function updatePassword(event){
        let passWord = event.target.value;
        // setUser({...user,passWord:event.target.value});

         if(passWord == ""){
            setUser({...user, passWord:event.target.value,passwordIsInvalid:true});
        }
        else{
            setUser({...user, passWord:event.target.value,passwordIsInvalid:false});
        }  
    }
    
    return (   
        <form>
        <div className="form-group">
            <label htmlFor="userId">user id</label>
            <input type="email" class="form-control" id="userId"  value={user.userName||''} onChange={updateUserName} width="50px" height="50px"/> 
            <br></br>
                {(user.userNameIsInvalid == true) && 
                <div class="alert alert-danger" >
                Username is required
                </div>}

            <label htmlFor="password">Password</label>
            <input type="text" class="form-control" id="password"  value={user.passWord||''} onChange={updatePassword}/> 
            <br></br>
                {(user.passwordIsInvalid == true) && 
                <div class="alert alert-danger" >
                Password is required
                </div>}
            <div> userName is : {user.userName}</div>
            <div> password is : {user.passWord}</div><br></br>
            <div> user state  is {JSON.stringify(user)}</div>
            {/* <div>  userNameIsValid : {userNameIsInvalid.toString()} </div> */}
        </div>
         <input type="submit" name="button1" className="btn btn-primary" value="login" />
    </form>
    )
}