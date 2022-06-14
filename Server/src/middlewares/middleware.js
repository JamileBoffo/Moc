export const TestaCPF= (req, res, next) => {
  const create = req.body
  const strCpf = create.cpf

  var cpf = strCpf.toString();

  cpf = cpf.replace(/[.\-_]/g, "");

  if (cpf == "" || cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) {
    res.send({
      message: 'CPF inválido',
    });		
  } else {
    var amount = 0;

    for (let i = 1; i <= 9; i++) {
      amount += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    var validateFirstDigit = (amount * 10) % 11;

    validateFirstDigit = validateFirstDigit >= 10 ? 0 : validateFirstDigit;

    if (validateFirstDigit != parseInt(cpf.substring(9, 10))) {
      res.send({
        message: 'CPF inválido',
      });		
    } else {
      amount = 0;

      for (let i = 1; i <= 10; i++) {
        amount += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }

      var validateSecondDigit = (amount * 10) % 11;

      validateSecondDigit = validateSecondDigit >= 10 ? 0 : validateSecondDigit;

      const compareElement = validateSecondDigit != parseInt(cpf.substring(10, 11)) ? false : true;

      if (compareElement == true) {
        res.send({
          message: 'CPF válido',
        });	
        next()	
      } {
        res.send({
          message: 'CPF inválido',
        });		
      }
      
    }
  }
  
}
