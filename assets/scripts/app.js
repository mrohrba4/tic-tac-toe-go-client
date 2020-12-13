'use strict'

const events = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // hide Authorized
  $('.auth').hide()
  // hide game-board
  $('#game-board').hide()
  // sign up function
  $('#sign-up').on('submit', events.onSignUp)
  // sign in function
  $('#sign-in').on('submit', events.onSignIn)
  // show unauthorized
  $('.unauth').show()
  // hide change password form.
  $('#change-password').hide()
  // change password function
  $('#change-password').on('submit', events.onChangePassword)
  // Show change password form.
  $('#changepw').show()
  // change password button function
  $('#changepw').on('click', events.onCpbutton)
  // hide cancel password change button
  $('#cancelcp').hide()
  // cancel change password function
  $('#cancelcp').on('click', events.onCpcancel)
  // sign out function
  $('#sign-out').on('click', events.onSignOut)
  // new game function
  $('#new-game').on('click', events.onGameCreate)
  // on click space function/checker
  $('.box').on('click', events.onClickSpace)
})
