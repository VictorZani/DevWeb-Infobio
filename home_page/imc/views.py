# -*- coding: utf-8 -*-
"""
Created on Thu Feb 23 21:45:35 2023

@author: Victor Hugo Zani
"""

from django.shortcuts import render

def calcular_imc(request):
    if request.method == 'POST':
        peso = float(request.POST['peso'])
        altura = float(request.POST['altura'])
        imc = peso / (altura ** 2)
        return render(request, 'formulario_imc.html', {'imc': imc})
    else:
        return render(request, 'formulario_imc.html')
