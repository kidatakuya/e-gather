import sqlite3

# データベース作成
conn = sqlite3.connect('e-gather.db')

# ここに指示を書く
curs = conn.cursor()

# E_Gather_general_usersテーブルを作成するsql(ユーザー管理テーブル　一般もアーティスト個人も管理
# sql = 'CREATE TABLE E_Gather_general_users(id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(50), category VARCHAR(50), address VARCHAR(255), password VARCHAR(500), Artist_list TEXT, account_creation DATETIME, user_id INTEGER)'

#E_Gather_artist_listテーブルを作成するsql(アーティスト管理テーブル)
# sql = 'CREATE TABLE E_Gather_artist_list(id INTEGER PRIMARY KEY AUTOINCREMENT, artist_name VARCHAR(50), artist_category VARCHAR(50), address VARCHAR(255), password VARCHAR(500), account_creation DATETIME, artist_id INTEGER)'

artist_name = "THE ORAL CIGARETTES"
address = "kida@gmail.com"
password = "test"



# データ追加
sql = "SELECT * FROM botitabi_members WHERE artist_name='{$name}' AND address='{$address}' AND password='{$password}'"

# ここからテーブルを創る
curs.execute(
    sql
    )
conn.commit()

# データベースを閉じる
conn.close


# sqlite3 e-gather.db 

# テーブル消去
# curs.execute(
#     "DROP TABLE E_Gather_THE_ORAL_CIGARETTES_chat"
#     )
# conn.commit()

