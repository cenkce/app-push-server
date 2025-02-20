export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  githubOAuthUrl: () => `${import.meta.env.VITE_API_URL}/auth/github/login?redirect_to=${window.location.href}`,
  logoutUrl: `${import.meta.env.VITE_API_URL}/auth/logout`,
} as const;
