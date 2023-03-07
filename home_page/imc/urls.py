# -*- coding: utf-8 -*-
"""
Created on Thu Feb 23 21:46:30 2023

@author: Victor Hugo Zani
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.calcular_imc, name='calcular_imc'),
]
