#! / usr / bin / env python
# - * - codificação: utf-8 - * -
#Twitter: @ 021_l
# Script para puxar dados pelo CPF usando API do sus, Dev arthur:)
 
__author__  =   "Medir o progresso da programação por linhas de código é como medir o progresso da construção de aeronaves em termos de peso dev arthur =)"

 solicitações de importação , json , sys , os , comandos


# Cores
PURPLE  =  ' \ 033 [95m'
CYAN  =  ' \ 033 [96m'
DARKCYAN  =  ' \ 033 [36m'
AZUL  =  ' \ 033 [94m'
VERDE  =  ' \ 033 [92m'
AMARELO  =  ' \ 033 [93m'
VERMELHO  =  ' \ 033 [91m'
BOLD  =  ' \ 033 [1m'
UNDERLINE  =  ' \ 033 [4m'
END  =  ' \ 033 [0m'
RESET = ' \ 033 [1; 00m'


# BANNER

imprimir  "" " \ 033 [91m
   ___ ___ ___ _____ ___ _ 
  / __ | | _ \ | __ | | _ \ \ / / \ | |
| (__ | _ / | _ | | _ / \ \ / \ / / | .` |
  \ ___ | | _ | | _ | | _ | \ _ / \ _ / | _ | \ _ |
\ 033 [0m "" "

cpf  =  raw_input ( ' \ 033 [93mCPF da vitima: \ 033 [93m' )

# API
req  =  solicitações . get ( "http://dabsistemas.saude.gov.br/sistemas/sadab/js/buscar_cpf_dbpessoa.json.php?cpf=" + str ( cpf ))
dados  =  json . carrega ( req . conteúdo )


# VAZAR

imprimir  "" " \ 033 [91m
   ___ ___ ___ _____ ___ _ 
  / __ | | _ \ | __ | | _ \ \ / / \ | |
| (__ | _ / | _ | | _ / \ \ / \ / / | .` |
  \ ___ | | _ | | _ | | _ | \ _ / \ _ / | _ | \ _ |
\ 033 [0m "" "
                                       
imprimir ( "" " \ 033 [92m
┌═════════════════════════════════════════════════ ════════════════════════════┐
█ █
█ CPF requisitado por dev arthur/maiki:) █ 
█ █
└═════════════════════════════════════════════════ ════════════════════════════┘     
\ 033 [0m "" " )
imprimir  " \ 033 [91m ================================================== = \ 033 [91m "
imprimir  'CPF:' , dados [ 'NU_CPF' ]
imprimir  'Nome Completo:' , dados [ 'NO_PESSOA_FISICA' ]
imprimir  'Data de Nascimento:' , dados [ 'DT_NASCIMENTO' ]
imprimir  'Sexo:' , dados [ 'CO_SEXO' ]
imprimir  'Nome da Mãe:' , dados [ 'NO_MAE' ]
imprimir  " \ 033 [91m ================================================== = \ 033 [91m "