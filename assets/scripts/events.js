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

let turnCount = 0
let player = 'X'

const currentTurn = function () {
  player = 'X'
  turnCount++
  if (turnCount % 2 === 0) {
    player = 'O'
  } else {
    player = 'X'
  }
}



const onClickSpace = function (event) {
  const index = event.target.id
  currentTurn()

  // updateGame, valid move.
  if ($(event.target).text().length === 0) {
    // const winCombo = { 1: [0, 1, 2], 2: [3, 4, 5], 3: [6, 7, 8], 4: [0, 3, 6], 5: [1, 4, 7], 6: [2, 5, 8], 7: [0, 4, 8], 8: [2, 4, 6] }
    const move = 'Valid'

    console.log(move)
    $(event.target).text(player)
    const value = $(event.target).text()
    console.log(player)
    api.updateGame(index, value)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else {
    const move = 'Invalid'
    $('#message').text('Invalid Move')
    console.log(move)
  }
  console.log(api.updateGame)
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
