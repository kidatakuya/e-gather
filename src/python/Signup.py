import sqlite3

# データベース作成
conn = sqlite3.connect('e-gather.db')

# ここに指示を書く
curs = conn.cursor()

# ここからテーブルを創る
sql = 'CREATE TABLE E_Gather_general_user(id INTEGER PRIMARY KEY AUTOINCREMENT, user_name STRING, category STRING, address VARCHAR(255), password VARCHAR(500), Artist_list TEXT, account_creation DAYETIME, user_id INTEGER)'
curs.execute(
    sql
    )
conn.commit()

# データベースを閉じる
conn.close





