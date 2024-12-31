import { auth } from "../config/firebase";

export default function User() {
    console.log(auth);
    return (
        <div>
            <h3>User Page</h3>
            {/* 帶出使用者資訊 */}
            <p>{auth.currentUser.displayName}</p>
            <p>{auth.currentUser.email}</p>
            <img src={auth.currentUser.photoURL}></img>
            
            </div>
        
    )
}