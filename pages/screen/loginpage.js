import Link from "next/Link"
import styles from "../../styles/Home.module.css";


export default function LoginPage(){
    return(
        <>
        <h1>로그인</h1>
        <div>
        <form id="login-form">
                <ul class="login-items">
                <li>
                <label for="email">Email </label>
                    <input type="email" name="email" id="email" placeholder="입력하세요" className="login-class"/>
                    </li>
                    <li>
                <label for="password">비밀번호 </label>
                    <input type="password" name="password" id="password" placeholder="입력하세요" className="login-class"/>
                    </li>
                    <li>
                    <button type="submit" class="primary">로그인</button>
                    <Link href="registerpage">
                    <button>회원가입</button>
                    </Link>
                  </li>
                </ul>
                </form>
                </div>
        <h2 className={styles.title}>
        <Link href="/">
          <a>메인으로</a>
        </Link>
        </h2>
        </>
    )
}