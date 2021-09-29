# 掲示板にコメント投稿

# 手順
# 1.選択中のグループのチャットテーブルを呼び出し、テーブルに送信内容を保存する。


import hashlib, binascii
import cgi
from sqlite3.dbapi2 import SQLITE_ALTER_TABLE
import sys
import io
import sqlite3
import datetime


form = cgi.FieldStorage()

# 送信データの受け取り



# artist_name = form.getvalue('artist_name', '匿名')
artist_name = 'THE ORAL CIGARETTES'
artist_name = artist_name.replace(' ','_')

time = datetime.datetime.now()
post_time = time.strftime('%Y年%m月%d日 %H時%M分%S秒')
# name = form.getvalue('your_name', '匿名')
name = "石丸"
# post_text = form.getvalue('post_text', '匿名')
post_text = "テスト投稿です。"


# データベース（e-gather.db）接続
conn = sqlite3.connect('e-gather.db')
curs = conn.cursor()

# SQLデータベースに送信された値があるか
# verificationSql = "SELECT * FROM E_Gather_general_users WHERE address='" + address + "' AND password='" + changePass + "'"

# SQLデータベースに送信された値を追加
additionSql =  "INSERT INTO E_Gather_" + artist_name + "_chat(user_name, post_text, account_creation) VALUES('"+ name + "','" + post_text + "','" + post_time + "')"

# SQL実行（送信されたデータが登録されているか確認）

print(additionSql)
curs.execute(
        additionSql
    )
conn.commit()




