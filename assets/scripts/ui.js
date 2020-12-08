
const store = require('./store')

const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Sign Up Failed')
}

const signInSuccess = function (response) {
  $('#message').text('Signed In Successfully!')
  store.user = response.user
  console.log(store)
}
const signInFailure = function (error) {
  $('#message').text('Sign In Failed' + error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
