
const soma = (num1, num2) => num1 + num2;
const subtrai = (num1, num2) => num1 - num2;
const multiplica = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const mostraResultado = (num1, num2) => {
  console.log(`A soma] entre ${num1} e ${num2}:`, soma(num1, num2));
  console.log(`A subtração entre ${num1} e ${num2}:`, subtrai(num1, num2));
  console.log(`A multiplicação entre ${num1} e ${num2}:`, multiplica(num1, num2));
  console.log(`A divisão entre ${num1} e ${num2}:`, divide(num1, num2));
  
};

mostraResultado(10, 5);
