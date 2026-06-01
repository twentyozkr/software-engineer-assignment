/**
 * 시작점입니다. 여기서부터 라우팅, 로그인 페이지, 관리 화면을 구성하세요.
 *
 * 참고 흐름: 로그인 → JWT 저장 → 보호 라우트 → 역할(role)에 따른 메뉴 렌더링
 */
export function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>사용자 / 권한 / 메뉴 관리</h1>
      <p>이 스타터를 기반으로 과제를 시작하세요. 자세한 요구사항은 과제 README를 확인하세요.</p>
    </div>
  )
}
