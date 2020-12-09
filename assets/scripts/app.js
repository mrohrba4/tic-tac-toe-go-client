'use strict'

const events = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.auth').hide()
  $('#game-board').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('.unauth').show()
  $('#change-password').hide()
  $('#change-password').on('submit', events.onChangePassword)
  $('#changepw').on('click', events.onCpbutton)
  $('#sign-out').on('click', events.onSignOut)
  $('#new-game').on('click', events.onGameCreate)
  $('.box').on('click', events.onClickSpace)
})
