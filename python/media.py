#as entradas são as notas dos alunos
nota1 = int(input("Digite a nota do 1º semestre: "))
nota2 = int(input("Digite a nota do 2º semestre: "))
nota3 = int(input("Digite a nota do 3º semestre: "))
nota4 = int(input("Digite a nota do 4º semestre: "))

print("\nAs notas dos alunos são: ", nota1, nota2, nota3, nota4)

#calculo de media
media = ((nota1 + nota2 + nota3 + nota4) / 4)

print("\nA média do aluno é: ", media)

#condição de aprovação do aluno
if media >= 5:
    print("\nAluno aprovado!")
else:
    print("\nAluno reprovado!")