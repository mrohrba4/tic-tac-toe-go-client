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
  $('#message').text('')
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

// Keeps turn count.
let turnCount = 0
// stores player variable
let player = 'X'
// store cells
let cells = ['', '', '', '', '', '', '', '']
// game over
let gOver = false

// create game function
const onGameCreate = function (event) {
  event.preventDefault()
  $('#lw').hide()
  turnCount = 0
  $('#turn-alert').text('Player X turn')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// decides current turn
const currentTurn = function () {
  // stores player variable
  player = 'X'
  // adds to the turn count
  turnCount++
  // deciding which token logic
  if (turnCount % 2 === 0) {
    player = 'O'
    $('#turn-alert').text('Player X turn')
  } else {
    player = 'X'
    $('#turn-alert').text('Player O turn')
  }
}

// on click space function
const onClickSpace = function (event) {
  event.preventDefault()
  currentTurn()
  const index = event.target.id
  // index of the cells.
  cells[index] = player
  // deciding the winner.
  const win = function () {
    // across ################
    if (cells[index] === cells[0] && cells[index] === cells[1] && cells[index] === cells[2]) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text(`${player} Has won the game.`)
      gOver = true
      // freezes game board.
      $('#game-board').css('pointer-events', 'none')
      // reset cell array
      cells = ['', '', '', '', '', '', '', '']
    } else if (cells[index] === cells[3] && cells[index] === cells[4] && cells[index] === cells[5]) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text(`${player} Has won the game.`)
      gOver = true
      $('#game-board').css('pointer-events', 'none')
      cells = ['', '', '', '', '', '', '', '']
    } else if (cells[index] === cells[6] && cells[index] === cells[7] && cells[index] === cells[8]) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text(`${player} Has won the game.`)
      gOver = true
      $('#game-board').css('pointer-events', 'none')
      cells = ['', '', '', '', '', '', '', '']
      // down ################
    } else if (cells[index] === cells[0] && cells[index] === cells[3] && cells[index] === cells[6]) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text(`${player} Has won the game.`)
      gOver = true
      $('#game-board').css('pointer-events', 'none')
      cells = ['', '', '', '', '', '', '', '']
    } else if (cells[index] === cells[1] && cells[index] === cells[4] && cells[index] === cells[7]) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text(`${player} Has won the game.`)
      gOver = true
      $('#game-board').css('pointer-events', 'none')
      cells = ['', '', '', '', '', '', '', '']
    } else if (cells[index] === cells[2] && cells[index] === cells[5] && cells[index] === cells[8]) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text(`${player} Has won the game.`)
      gOver = true
      $('#game-board').css('pointer-events', 'none')
      cells = ['', '', '', '', '', '', '', '']
      // Diagonal ####################
    } else if (cells[index] === cells[0] && cells[index] === cells[4] && cells[index] === cells[8]) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text(`${player} Has won the game.`)
      gOver = true
      $('#game-board').css('pointer-events', 'none')
      cells = ['', '', '', '', '', '', '', '']
    } else if (cells[index] === cells[2] && cells[index] === cells[4] && cells[index] === cells[6]) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text(`${player} Has won the game.`)
      gOver = true
      $('#game-board').css('pointer-events', 'none')
      cells = ['', '', '', '', '', '', '', '']
      // Tie ###################
    } else if (!cells.includes('')) {
      $('#turn-alert').hide()
      $('#lw').show()
      $('#lw').text('Tie!')
      gOver = true
      $('#game-board').css('pointer-events', 'none')
      cells = ['', '', '', '', '', '', '', '']
    }
  }
  // calling the win decider.
  win(cells)

  // updateGame, valid move.
  if ($(event.target).text().length === 0) {
    $(event.target).text(player)
    const value = $(event.target).text()
    api.updateGame(index, value, player, gOver)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else {
    // invalid move.
    $(currentTurn).off()
    $('#message').text('Invalid Move')
  }
}
// previous games function
const onPreviousGames = function () {
  api.previousGames()
    .then(ui.previousGamesSuccess)
    .catch(ui.previousGameFailure)
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
  turnCount,
  onPreviousGames
}
