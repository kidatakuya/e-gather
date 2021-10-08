# 興味のあるアーティストグループ設定機能

# 手順
# テーブルに（E_Gather_general_users）グループID登録

import hashlib, binascii
import cgi
from sqlite3.dbapi2 import SQLITE_ALTER_TABLE
import sys
import io
import sqlite3
from selenium import webdriver
import datetime


# 日本語を受信時にエラーにならないようにする為に必要。
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


# データ受け取り用の決まり文句もたいなもの
form = cgi.FieldStorage()

# 送信データの受け取り
id = b'E-Gather'

category = "general"

# name = form.getvalue('your_name', '匿名')
name = "test"
# address = form.getvalue('address', '匿名')
address = 'aaa@gmail.com'
# password = form.getvalue('password', '匿名')
password = b'test456'
# password = password.encode()
time = datetime.datetime.now()
time = time.strftime('%Y年%m月%d日 %H時%M分%S秒')




# password暗号化関数
def safty_password(id, password):
    hash = hashlib.sha256()
    hash.update(id + password)
    return hash.hexdigest()

# データベースに保存する暗号化したパスワード変数
changePass = safty_password(id, password)

# データベース（e-gather.db）接続
conn = sqlite3.connect('e-gather.db')
curs = conn.cursor()
userId = "1"
artistId = "1,2"


# アーティストリストに追加
artistListAddSql = "UPDATE E_Gather_general_users SET Artist_list = '" + artistId + "' WHERE id = '" + userId + "'"

curs.execute(
    artistListAddSql
    )
conn.commit()

# 確認用
# curs.execute(
#     'SELECT * FROM E_Gather_general_users'
# )
# print(curs.fetchall())


conn.close








