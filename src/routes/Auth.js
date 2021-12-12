import { authService, firebaseInstance } from "fbase";
import { useState } from "react";


const Auth=()=>{
    const[email, setEamil]=useState("");
    const[password, setPassword]=useState("");
    const[newAccount, setNewAccount]=useState(true);
    const[error,setError]=useState("")

    const onChange=(event)=>{
        const{
            target: {name, value},

        }= event;
        if (name==="email"){
            setEamil(value);

        }else if (name==="password"){
            setPassword(value);
        }
    };
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                data=await authService.createUserWithEmailAndPassword(email,password);
                // create
            } else{
                data=await authService.signInWithEmailAndPassword(email, password);
                //login
            }
            console.log(data);
        }catch(error){
            setError(error.message);

        }
        // try catch 
        
    }
    const toggleAccount=()=>setNewAccount((prev)=>!prev);
    
    const onSocialClick=async(event)=>{
        const{
            target:{name},
        }=event;
        let provider;
        if(name==="google"){
            provider=new firebaseInstance.auth.GoogleAuthProvider();

        }else if(name==="github"){
            provider=new firebaseInstance.auth.GithubAuthProvider();
        }
        const data=await authService.signInWithPopup(provider);
        console.log(data);
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="이메일을 입력하세요" required value={email} onChange={onChange}/>
                <input name ="password" type="password" placeholder="비밀번호를 입력하세요" required value={password} onChange={onChange}/>
                <input type="submit" value={newAccount ? "계정 생성하기":"로그인"} />
                {error}
                    
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "로그인 모드 전환(클릭)": "신규계정 생성하기 모드 전환(클릭)"}</span>

            <div>
                <button onClick={onSocialClick} name="google">Google로 로그인하기 </button>
                </div><div>
                <button onClick={onSocialClick} name="github">github계정으로 로그인하기</button>

            </div>
        </div>
    )
}
export default  Auth;
