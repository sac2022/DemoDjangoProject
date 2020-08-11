from urllib import request

import pymongo

from templates import *
from mongoengine import *
from django.http.request import QueryDict


def data():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient['Student']
    mycol = mydb['UserReg']
    return mycol

