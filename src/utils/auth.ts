// TODO: DB 연결 시 세션스토리지 대신 서버에서 발급받은 JWT 토큰을 사용하도록 변경
// 현재는 개발 편의를 위한 임시 구현입니다.

export const isAuthenticated = (): boolean => {
  // TODO: 실제 구현 시 쿠키의 JWT 토큰을 검증하는 로직으로 변경
  return sessionStorage.getItem("isLoggedIn") === "true";
};

export const login = (): void => {
  // TODO: 실제 구현 시 서버 API 호출 후 받은 토큰을 쿠키에 저장하는 로직으로 변경
  sessionStorage.setItem("isLoggedIn", "true");
};

export const logout = (): void => {
  // TODO: 실제 구현 시 서버에 로그아웃 요청 + 쿠키의 토큰 제거하는 로직으로 변경
  sessionStorage.removeItem("isLoggedIn");
};
