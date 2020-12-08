
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
  $('.unauth').hide()
  $('.auth').show()
}
const signInFailure = function (error) {
  $('#message').text('Sign In Failed' + error)
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
}
const changePasswordFailure = function (error) {
  $('#message').text('Change Password Failed' + error.responseJSON.message )
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
