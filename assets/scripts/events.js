'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

// sign up function
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// sign in function
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// change password button
const onCpbutton = function (event) {
  $('#message').hide()
  $('#change-password').show()
  $('#cancelcp').show()
  $('#changepw').hide()
  $('#new-game').hide()
}

// cancel changing password button.
const onCpcancel = function (event) {
  $('#new-game').show()
  $('#changepw').show()
  $('#change-password').hide()
  $('#cancelcp').hide()
  $('.unauth').hide()
}

// change password function
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// sign out function
const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// create game function
const onGameCreate = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// Keeps turn count.
let turnCount = 0
// stores player variable
let player = 'X'

// initializing player moves storage arrays
const xTrack = []
const oTrack = []

// decides current turn
const currentTurn = function () {
  // stores player variable
  player = 'X'
  // adds to the turn count
  turnCount++
  // deciding which token logic
  if (turnCount % 2 === 0) {
    player = 'O'
  } else {
    player = 'X'
  }
}

// on click space function
const onClickSpace = function (event) {
  currentTurn()
  // const inArray = []
  const index = event.target.id
  // if ($(event.target).text(player) === 'X') {
  //   const xTrack = inArray + upIndex
  //   console.log(xTrack)
  // } else if ($(event.target).text(player) === 'O') {
  //   const oTrack = inArray + upIndex
  //   console.log(oTrack)
  // } else {
  //   console.log('error')
  // }

  // updateGame, valid move.
  if ($(event.target).text().length === 0) {
    // winning combinations.
    const winCombo = ['012', '345', '678', '036', '147', '258', '048', '246']
    const move = 'Valid'

    console.log(move)
    $(event.target).text(player)
    const value = $(event.target).text()
    console.log(xTrack, oTrack, winCombo)
    // const newArr = []
    // const upIndex = newArr.push(index + '')
    // console.log(upIndex, newArr)
    api.updateGame(index, value, winCombo, xTrack, oTrack)
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
  onCpcancel,
  xTrack,
  oTrack
}
