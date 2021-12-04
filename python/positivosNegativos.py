#variavel que recebe um inteiro
numero = int(input("Digite um número inteiro: "))

#condições para verificar se o numero é positivo ou negativo
#se for maior que zero é positivo
if numero > 0:
    print(numero, "é um número positivo")
#se for menor que zero é negativo
if numero < 0:
    print(numero, "é um numero negativo")
#caso o usuario digite 0
if numero == 0:
    print("Você digitou zero")


