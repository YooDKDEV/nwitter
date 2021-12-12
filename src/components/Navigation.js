import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈화면</Link>
        </li>
        <li>
          <Link to="/profile">나의 프로필(현재 로그아웃 버튼 페이지 이동 전용)</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;