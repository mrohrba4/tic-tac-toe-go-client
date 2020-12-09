'use strict'

const authEvents = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.auth').hide()
  $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.unauth').show()
  $('#change-password').hide()
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#changepw').on('click', authEvents.onCpbutton)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', authEvents.onGameCreate)
  $('.gamerows').on('click', authEvents.onGameClick)
})
