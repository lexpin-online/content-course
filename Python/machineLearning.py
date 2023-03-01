import numpy
from scipy import stats

numeros = [86,87,88,86,87,85,86]

print(numpy.mean(numeros), numpy.median(numeros), stats.mode(numeros))
