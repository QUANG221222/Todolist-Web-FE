let apiRoot: string = ''
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8017'
} else {
  apiRoot = 'https://todolist-web-api.onrender.com'
}
console.log('API Root:', apiRoot)
export const API_URL = apiRoot
