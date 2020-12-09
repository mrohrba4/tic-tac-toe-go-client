
const store = require('./store')

const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
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
  $('form').trigger('reset')
}
const signInFailure = function (error) {
  $('#message').text('Sign In Failed' + error)
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
  $('form').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('#message').text('Change Password Failed' + error.responseJSON.message)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')

  $('.auth').hide()
  $('.unauth').show()

  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function (error) {
  $('#message').text('sign out failure' + error)
}
const newGameSuccess = function (event) {
  $('#message').text('success')
  const gameData = event.game
  console.log(gameData._id, gameData.cells)
  $('.auth').show()
  $('.unauth').hide()
}
const newGameFailure = function (error) {
  $('#message').text('New game failed' + error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure
}
