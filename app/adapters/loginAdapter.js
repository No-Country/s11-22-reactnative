/* This function adapts the login response data to a standardized format for the application to use. 
It extracts the access token, refresh token, user ID, and email from the response and returns them as an object. 
If any of the data is missing or undefined, it will return null or undefined for that property. */

export function loginAdapter(data) {
  return {
    accessToken: data?.session?.access_token,
    refreshToken: data?.session?.refresh_token,
    id: data?.session?.user?.id,
    email: data?.session?.user?.email,
  }
}
