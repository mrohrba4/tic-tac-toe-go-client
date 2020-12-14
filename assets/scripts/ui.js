
const store = require('./store')

// sign up success & failure.
const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
}
const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Sign Up Failed')
}

// sign in success & failure.
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

// Change password success & faillure
const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
  $('form').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('#message').text('Change Password Failed' + error.responseJSON.message)
}

// Sign out success & failure
const signOutSuccess = function () {
  $('#message').text('Signed out successfully')

  $('.auth').hide()
  $('#game-board').hide()
  $('.unauth').show()

  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function (error) {
  $('#message').text('sign out failure' + error)
}

// create new game success & failure
const newGameSuccess = function (response) {
  $('#message').text('success')
  store.game = response.game
  $('#game-board').show()
  $('.unauth').hide()
  $('#changepw').hide()
  $('#sign-out').show()
  $('.box').text('')
}
const newGameFailure = function (error) {
  $('#message').text('New game failed' + error)
}

// update game success & failure.
const updateGameSuccess = function (event, winner) {
  const gameData = event.game

  console.log(gameData.over)
  // console.log(gameData.cells.indexOf('X'))
}
const updateGameFailure = function (error) {
  $('#message').text('Failed' + error)
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
  newGameFailure,
  updateGameSuccess,
  updateGameFailure
}
