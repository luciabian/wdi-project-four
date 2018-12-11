export function saveToken(token) {
  localStorage.setItem('album-token', token);
}

export function getToken() {
  return localStorage.getItem('album-token');
}

export function decodeToken() {
  const token = getToken();
  if (!token) return {};
  const decoded = JSON.parse(atob(token.split('.')[1]));
  return decoded;
}

export function getHeader() {
  return { headers: { Authorization: `Bearer ${getToken()}`}};
}

export function currentUserId() {
  return decodeToken().sub;
}

export function deleteToken() {
  localStorage.removeItem('album-token');
}

export function isAuthenticated() {
  return !!getToken();
}

export function tokenUsername() {
  return decodeToken().username;
}
