import Link from "next/Link";
import styles from "../../styles/Home.module.css";

export default function RegisterPage() {
  return (
    <>
      <h1>회원가입</h1>
      <div>
        <form id="register-form">
          <ul className="register-items">
            <li>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <label htmlFor="password">비밀번호 </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <label htmlFor="passwordcheck">비밀번호 확인 </label>
              <input
                type="password"
                name="passwordcheck"
                id="passwordcheck"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <label htmlFor="nickname">닉네임 </label>
              <input
                type="nickname"
                name="nickname"
                id="nickname"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <label htmlFor="academic_background">학력 </label>
              <input
                type="academic_background"
                name="academic_background"
                id="academic_background"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <label htmlFor="contact_information">연락처 </label>
              <input
                type="contact_information"
                name="contact_information"
                id="contact_information"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <label htmlFor="address">주소 </label>
              <input
                type="address"
                name="address"
                id="address"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <label htmlFor="self-introduction">자기소개 </label>
              <input
                type="self-introduction"
                name="self-introduction"
                id="self-introduction"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <label htmlFor="area_of_interest">관심분야 </label>
              <input
                type="area_of_interest"
                name="area_of_interest"
                id="area_of_interest"
                placeholder="입력하세요"
                className="register-class"
              />
            </li>
            <li>
              <button type="submit" className="primary">
                확인
              </button>
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
