from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


import sys
import json
url = "https://www.noticiasagricolas.com.br/cotacoes/cafe/indicador-cepea-esalq-cafe-arabica"
url2 = "https://www.noticiasagricolas.com.br/cotacoes/cafe/indicador-cepea-esalq-cafe-conillon"
url3 = "https://www.noticiasagricolas.com.br/cotacoes/cafe/cafe-arabica-4-5-b3-prego-regular"
url4 = "https://www.noticiasagricolas.com.br/cotacoes/amendoim/amendoim-ceasas"
url5 = "https://www.noticiasagricolas.com.br/cotacoes/trigo/trigo-atacado-media-pr"
url6 = "https://www.noticiasagricolas.com.br/cotacoes/trigo/trigo-bolsa-de-chicago-cme-group"
url7 = "https://www.noticiasagricolas.com.br/cotacoes/trigo/trigo-mercado-fisico-ms"
url8 = "https://www.noticiasagricolas.com.br/cotacoes/laranja/laranja-industria"
url9 = "https://www.noticiasagricolas.com.br/cotacoes/laranja/suco-de-laranja-bolsa-de-nova-iorque-nybot"
url10 = "https://www.noticiasagricolas.com.br/cotacoes/laranja/laranja-pera-in-natura"
url11 = "https://www.noticiasagricolas.com.br/cotacoes/milho/indicador-cepea-esalq-milho"
url12 = "https://www.noticiasagricolas.com.br/cotacoes/milho/milho-b3-prego-regular"
url13 = "https://www.noticiasagricolas.com.br/cotacoes/milho/milho-bolsa-de-chicago-cme-group"
url14 = "https://www.noticiasagricolas.com.br/cotacoes/soja/indicador-cepea-esalq-soja-parana"
url15 = "https://www.noticiasagricolas.com.br/cotacoes/soja/soja-bolsa-de-chicago-cme-group"
url16 = "https://www.noticiasagricolas.com.br/cotacoes/soja/soja-b3-pregao-regular"
url17 = "https://www.noticiasagricolas.com.br/cotacoes/algodao/algodao-indicador-cepea-esalq-a-prazo"
url18 = "https://www.noticiasagricolas.com.br/cotacoes/algodao/algodo-em-pluma-ao-produtor"
url19 = "https://www.noticiasagricolas.com.br/cotacoes/algodao/algodao-imea"
url20 = "https://www.noticiasagricolas.com.br/cotacoes/feijao/feijao-carioca-nota-8-5"
url21 = "https://www.noticiasagricolas.com.br/cotacoes/feijao/feijao-carioca-nota-9-9-5"
url22 = "https://www.noticiasagricolas.com.br/cotacoes/feijao/feijao-preto"


s=Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s)
driver.maximize_window()

codigo = str(sys.argv[1])
if (codigo == '1' ):
    driver.get(url)
if (codigo == '2' ):
    driver.get(url2)
if (codigo == '3' ):
    driver.get(url3)
if (codigo == '4' ):
    driver.get(url4)
if (codigo == '5' ):
    driver.get(url5)
if (codigo == '6' ):
    driver.get(url6)
if (codigo == '7' ):
    driver.get(url7)
if (codigo == '8' ):
    driver.get(url8)
if (codigo == '9' ):
    driver.get(url9)
if (codigo == '10' ):
    driver.get(url10)
if (codigo == '11' ):
    driver.get(url11)
if (codigo == '12' ):
    driver.get(url12)
if (codigo == '13' ):
    driver.get(url3)
if (codigo == '14' ):
    driver.get(url14)
if (codigo == '15' ):
    driver.get(url15)
if (codigo == '16' ):
    driver.get(url16)
if (codigo == '17' ):
    driver.get(url17)
if (codigo == '18' ):
    driver.get(url18)
if (codigo == '19' ):
    driver.get(url19)
if (codigo == '20' ):
    driver.get(url19)
if (codigo == '21' ):
    driver.get(url19)
if (codigo == '22' ):
    driver.get(url19)



delay = 3


time.sleep(1)
fechamento = driver.find_element_by_xpath("/html/body/div[1]/div[3]/section/div[3]/div[3]/div[1]/div[1]/div")
fechamento = fechamento.get_attribute('innerHTML')
valor = driver.find_element_by_xpath('/html/body/div[1]/div[3]/section/div[3]/div[3]/div[1]/div[2]/table/tbody/tr/td[2]')
valor = valor.get_attribute('innerHTML')
variacao = driver.find_element_by_xpath('/html/body/div[1]/div[3]/section/div[3]/div[3]/div[1]/div[2]/table/tbody/tr/td[3]')
variacao = variacao.get_attribute('innerHTML')
print(valor)
print(fechamento)
print(variacao)
