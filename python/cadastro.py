cadastro = []

cadastroNome1 = str(input("Qual o seu nome? "))
cadastroIdade1 = int(input("Qual a sua idade? "))

pessoa1 = []
pessoa1.append(cadastroNome1)
pessoa1.append(cadastroIdade1)

cadastro.append(pessoa1)
print("\nPessoa cadastrada com sucesso!\n")

cadastroNome2 = str(input("Qual o seu nome? "))
cadastroIdade2 = int(input("Qual a sua idade? "))

pessoa2 = []
pessoa2.append(cadastroNome2)
pessoa2.append(cadastroIdade2)

cadastro.append(pessoa2)
print("\nPessoa cadastrada com sucesso!\n")

cadastroNome3 = str(input("Qual o seu nome? "))
cadastroIdade3 = int(input("Qual a sua idade? "))

pessoa3 = []
pessoa3.append(cadastroNome3)
pessoa3.append(cadastroIdade3)

cadastro.append(pessoa3)
print("\nPessoa cadastrada com sucesso!\n")

cadastroNome4 = str(input("Qual o seu nome? "))
cadastroIdade4 = int(input("Qual a sua idade? "))

pessoa4 = []
pessoa4.append(cadastroNome4)
pessoa4.append(cadastroIdade4)

cadastro.append(pessoa4)
print("\nPessoa cadastrada com sucesso!\n")

cadastroNome5 = str(input("Qual o seu nome? "))
cadastroIdade5 = int(input("Qual a sua idade? "))

pessoa5 = []
pessoa5.append(cadastroNome5)
pessoa5.append(cadastroIdade5)

cadastro.append(pessoa5)
print("\nPessoa cadastrada com sucesso!\n")

print("Essas são as pessoas cadastradas: \n")

for i in range(len(cadastro)):
    print("\n", cadastro[i])