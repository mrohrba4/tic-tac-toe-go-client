'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onCpbutton = function (event) {
  $('#message').hide()
  $('#change-password').show()
  $('#cancelcp').show()
  $('#changepw').hide()
  $('#new-game').hide()
}
const onCpcancel = function (event) {
  $('#new-game').show()
  $('#changepw').show()
  $('#change-password').hide()
  $('#cancelcp').hide()
  $('.unauth').hide()
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onGameCreate = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
const onClickSpace = function (event) {
  const position = event.target.id
  if ($(event.target).text().length === 0) {
    console.log('valid')
    $(event.target).text('X')
  } else {
    console.log('Invalid')
  }
  console.log(position)
}

module.exports = {
  onSignUp,
  onSignIn,
  onCpbutton,
  onChangePassword,
  onSignOut,
  onGameCreate,
  onClickSpace,
  onCpcancel
}
