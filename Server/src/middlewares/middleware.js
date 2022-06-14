import mongoose from 'mongoose';

export const validCPF = (req, res, next) => {
  const create = req.body;
  const strCpf = create.cpf;

  var cpf = strCpf.toString();

  cpf = cpf.replace(/[.\-_]/g, '');

  if (cpf == '' || cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) {
    res.locals.cpfValid = 'nao';
  } else {
    var amount = 0;

    for (let i = 1; i <= 9; i++) {
      amount += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    var validateFirstDigit = (amount * 10) % 11;

    validateFirstDigit = validateFirstDigit >= 10 ? 0 : validateFirstDigit;

    if (validateFirstDigit != parseInt(cpf.substring(9, 10))) {
      res.locals.cpfValid = 'nao';
    } else {
      amount = 0;

      for (let i = 1; i <= 10; i++) {
        amount += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }

      var validateSecondDigit = (amount * 10) % 11;

      validateSecondDigit = validateSecondDigit >= 10 ? 0 : validateSecondDigit;

      const compareElement =
        validateSecondDigit != parseInt(cpf.substring(10, 11)) ? false : true;

      if (compareElement == true) {
        res.locals.cpfValid = 'sim';
        next();
      }
      {
        res.locals.cpfValid = 'nao';
      }
    }
  }
};

export const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({
      message: 'ID inválido',
    });
  }
  next();
};
