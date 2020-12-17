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

// decides current turn
const currentTurn = function () {
  // stores player variable
  player = 'X'
  // adds to the turn count
  turnCount++
  // deciding which token logic
  if (turnCount % 2 === 0) {
    player = 'O'
    return turnCount
  } else {
    player = 'X'
    return turnCount
  }
}

const xTrack = []
const oTrack = []
let win = ''
// let gameNum = '1'
// winning combinations.
// const winCombo = [
//   // horizontal wins
//   ['0', '1', '2'],
//   ['3', '4', '5'],
//   ['6', '7', '8'],
//   // vertical wins
//   ['0', '3', '6'],
//   ['1', '4', '7'],
//   ['2', '5', '8'],
//   // diagonal wins
//   ['0', '4', '8'],
//   ['2', '4', '6']
// ]
// Checks for winner
let winCheck = null

// on click space function
const onClickSpace = function (event) {
  currentTurn()
  const index = event.target.id
  console.log(turnCount)
  // const test = $('#gpnum').text(gameNum)
  // console.log(test)

  // updateGame, valid move.
  if ($(event.target).text().length === 0) {
    $(event.target).text(player)
    const value = $(event.target).text()
    api.updateGame(index, value, winCheck)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else {
    $('#message').text('Invalid Move')
  }

  if (turnCount % 2 === 0) {
    oTrack.push(index.toString())
  } else {
    xTrack.push(index.toString())
  }
  console.log(xTrack)
  const xTrack2 = xTrack.toString()
  const oTrack2 = oTrack.toString()
  console.log(xTrack2 + '|' + oTrack2)
  // check if X wins
  if (xTrack2.includes('0,1,2') === true || xTrack2.includes('3,4,5') === true || xTrack2.includes('6,7,8') === true) {
    win = 'X'
    // let gameNum = gameNum + 1
    winCheck = true
  } else if (xTrack2.includes('0,3,6') === true || xTrack2.includes('1,4,7') === true || xTrack2.includes('2,5,8') === true) {
    win = 'X'
    // gameNum++
    winCheck = true
  } else if (xTrack2.includes('0,4,8') === true || xTrack2.includes('2,4,6') === true) {
    win = 'X'
    // gameNum++
    winCheck = true
  } else {
    winCheck = false
  }
  console.log(winCheck, win)

  // Check if O wins
  if (oTrack2.includes('0,1,2') === true || oTrack2.includes('3,4,5') === true || oTrack2.includes('6,7,8') === true) {
    win = 'O'
    // gameNum++
    winCheck = true
  } else if (oTrack2.includes('0,3,6') === true || oTrack2.includes('1,4,7') === true || oTrack2.includes('2,5,8') === true) {
    win = 'O'
    // gameNum++
    winCheck = true
  } else if (oTrack2.includes('0,4,8') === true || oTrack2.includes('2,4,6') === true) {
    win = 'O'
    // gameNum++
    winCheck = true
  } else {
    winCheck = false
  }
  console.log(winCheck, win)
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
  turnCount
}
