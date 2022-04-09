import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function LoginPage() {
  return (
    <>
      <h1>로그인</h1>
      <div>
        <form id="login-form">
          <ul className="login-items">
            <li>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="입력하세요"
                className="login-class"
              />
            </li>
            <li>
              <label htmlFor="password">비밀번호 </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="입력하세요"
                className="login-class"
              />
            </li>
            <li>
              <button type="submit" className="primary">
                로그인
              </button>
              <Link href="/register" passHref>
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
  );
}
