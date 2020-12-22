
const store = require('./store')

// sign up success & failure.
const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Sign Up Failed')
  $('form').trigger('reset')
}

// sign in success & failure.
const signInSuccess = function (response) {
  $('#message').text('Signed In Successfully!')
  store.user = response.user
  $('.unauth').hide()
  $('.auth').show()
  $('#changepw').show()
  $('form').trigger('reset')
}
const signInFailure = function () {
  $('#message').text('Sign In Failed')
  $('form').trigger('reset')
}

// Change password success & faillure
const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Change Password Failed')
  $('form').trigger('reset')
}

// Sign out success & failure
const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('form').trigger('reset')
  $('.auth').hide()
  $('#game-board').hide()
  $('.unauth').show()
  $('#gpnum').hide()
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('sign out failed')
  $('form').trigger('reset')
}

// create new game success & failure
const newGameSuccess = function (response) {
  $('#message').text('New Game Made')
  store.game = response.game
  $('#game-board').show()
  $('.unauth').hide()
  $('#changepw').hide()
  $('#sign-out').show()
  $('#gpnum').show()
  $('.box').text('')
}
const newGameFailure = function () {
  $('#message').text('New game failed')
}

const gameWin = function (win1) {
  const win2 = win1
  console.log(win2)
  if (win2 === 'X') {
    $('#message').text('X Wins!')
  } else if (win2 === 'O') {
    $('#message').text('O Wins!')
  } else {
    console.log('no winner yet')
  }
}
// update game success & failure.
const updateGameSuccess = function (event) {
  // const gameData = event.game
  const winner = gameWin()
  console.log(winner)
}
const updateGameFailure = function () {
  $('#message').text('Failed to update')
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
  updateGameFailure,
  gameWin
}
