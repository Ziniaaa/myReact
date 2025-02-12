import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <ul>
                <li>
                    <Link to='./'>首頁</Link>
                </li>
                <li>
                    <Link to='./about'>關於我</Link>
                </li>
                <li>
                    <Link to='./news'>最新消息</Link>
                </li>

                <li><Link to='/LOGIN'>登入</Link></li>
                <li><Link to='/USER'>會員頁</Link></li>
            </ul>
        </div>
    )
}