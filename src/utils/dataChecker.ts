
const dataChecker = {

    _cpfChecker(cpf: string): boolean {
        if (cpf == null)
            return false;
        if (cpf.length != 11)
            return false;
        if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999'))
            return false;

        let number: number = 0;
        let caracter: string = '';
        let numbers: string = '0123456789';
        let j: number = 10;
        let sum: number = 0;
        let rest: number = 0;
        let digito1: number = 0;
        let digito2: number = 0;
        let cpfAux: string = '';
        cpfAux = cpf.substring(0, 9);
        for (let i: number = 0; i < 9; i++) {
            caracter = cpfAux.charAt(i);
            if (numbers.search(caracter) == -1) {
                return false;
            }
            number = Number(caracter);
            sum = sum + (number * j);
            j--;
        }
        rest = sum % 11;
        digito1 = 11 - rest;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        sum = 0;
        cpfAux = cpfAux + digito1;
        for (let i: number = 0; i < 10; i++) {
            caracter = cpfAux.charAt(i);
            number = Number(caracter);
            sum = sum + (number * j);
            j--;
        }
        rest = sum % 11;
        digito2 = 11 - rest;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2;
        if (cpf != cpfAux) {
            return false;
        }
        else {
            return true;
        }
    }
};
export default dataChecker;
