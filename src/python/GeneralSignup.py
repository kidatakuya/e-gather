# 一般ユーザー新規登録画面

# 手順
# テーブル（E_Gather_general_users）に登録内容を保存
# ArtistSelection(興味あるアーティスト登録画面)に飛ばす

# テーブル種類
# E_Gather_artist_list 
# 

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

# SQLデータベースに送信された値があるか
verificationSql = "SELECT * FROM E_Gather_general_users WHERE address='" + address + "' AND password='" + changePass + "'"

# SQLデータベースに送信された値を追加
additionSql =  "INSERT INTO E_Gather_general_users(user_name, address, password, category, account_creation) VALUES('"+ name + "','" + address + "','" + changePass + "','" + category + "','" + time + "')"

# SQL実行（送信されたデータが登録されているか確認）
curs.execute(
    verificationSql
    )
verification = curs.fetchall()


# 送信した値が登録されていなければ登録する
if verification == []:
    # データベースに情報を登録
    curs.execute(
        additionSql
    )
    conn.commit()

    # 仮登録機能を創る場合
    # 1.メールとURL作成し、送信
    # 2. 送信したというページに飛ばす命令を書く
else:
    # 新規登録画面に戻る命令を書く
    # driver = webdriver.Chrome("D:\chromedriver")
    # driver.back()
    curs.execute(
        'SELECT * FROM E_Gather_general_users'
        )
    print(curs.fetchall())
    




# ※メールを使った本登録、仮登録機能を創る場合、URLを作成し、メール送信機能をつける必要がある！