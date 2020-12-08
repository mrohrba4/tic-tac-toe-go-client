
const signUpSuccess = function (reponse) {
  $('#message').text('Signed Up Successfully!')
  console.log('Success!')
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Sign Up Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
