# 自分が興味あるアーティストAPI


import hashlib, binascii
import cgi
from sqlite3.dbapi2 import SQLITE_ALTER_TABLE
import sys
import io
import sqlite3
from selenium import webdriver
import urllib.request, json



form = cgi.FieldStorage()

# 送信データの受け取り
id = b'E-Gather'

category = "general"

user_id = "1"

name = form.getvalue('your_name', '匿名')
# name = "山田"
address = form.getvalue('address', '匿名')
# address = 'test@gmail.com'
password = form.getvalue('password', '匿名')
# password = b'test123'
password = password.encode()



# データベース（e-gather.db）接続
conn = sqlite3.connect('e-gather.db')
curs = conn.cursor()

# SQLデータベースに送信された値があるか
verificationSql = "SELECT Artist_list FROM E_Gather_general_users WHERE id='" + user_id + "'"

# sql = "SELECT * FROM E_Gather_general_users" 

# データベースから値呼び出し
curs.execute(
    verificationSql
    )

test = curs.fetchall()
 
json_data = json.dumps(test).encode("utf-8")




print(json_data)

# データベースを閉じる
conn.close







