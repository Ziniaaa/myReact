import { useNavigate } from "react-router-dom"
import { auth,provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
    // 登入成功後，使用此hook可以切換到指定頁
    const navigate = useNavigate();

    const login=async()=>{

        const result=await signInWithPopup(auth,provide);
        console.log(result);
        // 登入成功後。切換到首頁
        // navigate("/");
        // 登入成功後。切換到會員頁
        navigate("/USER");
    }

    return (
        <div>
            <button onClick={login}>登入</button>

        </div>
    )
}