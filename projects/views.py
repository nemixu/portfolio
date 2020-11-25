from django.shortcuts import render

import requests
import json

# Create your views here.
def projects(request):
    """
    View to pull projects from github api and display accordingly
    """
    repo = "milestone4"
    response = requests.get(f"https://api.github.com/repos/nemixu/{repo}/branches/master")
    
    # url = f"https://api.github.com/repos/nemixu/{repo}/branches/master"
    payload = {}
    headers = {} 
    
     
    response = requests.request('GET', response, headers=headers, data = payload)
    
    print(response.text.encode('utf8'))
    return render (request, 'projects.html')

