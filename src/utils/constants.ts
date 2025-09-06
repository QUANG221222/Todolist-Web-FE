let apiRoot: string = ''
if (process.env.BUILD_MODE === 'production') {
  apiRoot = 'https://todolist-web-api.onrender.com'
} else {
  apiRoot = 'http://localhost:8017'
}
export const API_URL = apiRoot
