from django.contrib.auth import logout
from django.http import HttpResponseNotFound
from django.http.request import QueryDict
from django.shortcuts import render, redirect
from pymongo import ReturnDocument

from DB import sampledb


# Create your views here.
def index(request):
    return render(request, "index.html")


def signup(request):
    return render(request, "signup.html")


def login(request):
    email = request.POST.get('email')
    password = request.POST.get('password')
    role = request.POST.get('Role')
    #print(email, password, role)
    #print("role type", role)
    d = sampledb.data()
    agg = d.find_one({'email': email, 'password': password, 'Role': role})
    #print(agg)
    if agg:
        if role == 'admin':
            return render(request, 'login.html')
        if role == 'Teacher':
            return render(request, 'login2.html')
        if role == 'Student':
            return render(request, 'login3.html')
    else:
        return HttpResponseNotFound("No data found")


def p_logout(request):
    if request.method == "POST":
        logout(request)

        return redirect('index')


def p_forgot(request):
    email = request.POST.get('email')
    password = request.POST.get('password')
    confirm_password = request.POST.get('confirm_password')
    d = sampledb.data()
    '''mail = d.find_one({'Email': email})
    if mail == email:'''#checking with trails
    r = d.find_one_and_update(
        {'email': email}, {

            '$set': {'password': password, 'confirm_password': confirm_password}
        }
        , upsert=True)
    #print(r)

    return render(request, "ForgotPassword.html")


def p_confirm(request):
    if request.method == "POST":
        q = request.POST
        q = QueryDict.copy(self=q)
        q = q.dict()
        mycol = sampledb.data()
        mycol.insert(q)
        logout(request)
        return render(request, 'Confirmation.html')
    else:
        return redirect('index')
