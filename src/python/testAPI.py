import hashlib, binascii
import cgi
from sqlite3.dbapi2 import SQLITE_ALTER_TABLE
import sys
import io
import sqlite3
from selenium import webdriver
import urllib.request, json




# データベース（e-gather.db）接続
conn = sqlite3.connect('e-gather.db')
curs = conn.cursor()

sql = "SELECT * FROM E_Gather_general_users" 

curs.execute(
    sql
    )

test = curs.fetchall()
 
json_data = json.dumps(test).encode("utf-8")


print(json_data)


# データベースを閉じる
conn.close






