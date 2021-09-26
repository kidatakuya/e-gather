# アーティストグループ登録機能

# 手順
# 1.テーブル（E_Gather_artist_list）にグループを登録
# 2.グループ専用のチャットテーブルの作成


import sqlite3

# データベース作成
conn = sqlite3.connect('e-gather.db')

# ここに指示を書く
curs = conn.cursor()

# E_Gather_general_usersテーブルを作成するsql(ユーザー管理テーブル　一般もアーティスト個人も管理
# sql = 'CREATE TABLE E_Gather_general_users(id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(50), category VARCHAR(50), address VARCHAR(255), password VARCHAR(500), Artist_list TEXT, account_creation DATETIME, user_id INTEGER)'

#E_Gather_artist_listテーブルを作成するsql(アーティスト管理テーブル)
sql = 'CREATE TABLE E_Gather_artist_list(id INTEGER PRIMARY KEY AUTOINCREMENT, artist_name VARCHAR(50), artist_category VARCHAR(50), address VARCHAR(255), password VARCHAR(500), account_creation DATETIME, artist_id INTEGER)'

# ここからテーブルを創る
curs.execute(
    sql
    )
conn.commit()

# データベースを閉じる
conn.close





