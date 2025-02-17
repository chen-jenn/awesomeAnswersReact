// const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsImZpcnN0X25hbWUiOiJKb24iLCJsYXN0X25hbWUiOiJTbm93In0.cYLaAStDMy7y13fKuYBDypq4FRrJRfeNcsMidb7UoUA';
const DOMAIN = 'localhost:3000';
const API_PATH = '/api/v1';
const BASE_URL = `http://${DOMAIN}${API_PATH}`

//get the unique token per user so it is not hard-coded in
function getJWT(){
  return localStorage.getItem('JWT');
}

// REQUEST METHODS
export const Question = { //can also export on the same line
  one(id) {
    return fetch(
      `${BASE_URL}/questions/${id}`,
      { headers: { 'Authorization' : getJWT() } }
    ).then(response => response.json())
  },
  all(queryParams) {
    return fetch(
      `${BASE_URL}/questions?${new URLSearchParams(queryParams).toString()}`,
      {
        headers: { 'Authorization' : getJWT() }
      }
    ).then(response => response.json())
  },
  create(params) {
    return fetch(
      `${BASE_URL}/questions`,
      {
        method: 'POST',
        headers: {
          'Authorization' : getJWT(),
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(response => response.json())
  }
}
