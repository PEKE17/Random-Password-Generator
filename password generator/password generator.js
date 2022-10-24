
function randomBtn(){

  const randoms = 'abcdefghinopqrstuvwxyz1234567890ADGJMPQRSTUVWXTZ!@#$%^&*('
  const passwordLenght = 12
  let passWordResult = ''
  
for( i = 0; i < passwordLenght; i++){
  let randomNumber = Math.floor(Math.random()*randoms.length)
  passWordResult += randoms.substring(randomNumber,randomNumber+1)
}
document.getElementById('input').value = passWordResult
}


