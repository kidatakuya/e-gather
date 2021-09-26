# アーティストユーザー新規登録画面
import sqlite3

# データベース作成
conn = sqlite3.connect('e-gather.db')

# ここに指示を書く
curs = conn.cursor()

sql = 'CREATE TABLE E_Gather_artist_list(id INTEGER PRIMARY KEY AUTOINCREMENT, artist_name VARCHAR(50), artist_category VARCHAR(50), address VARCHAR(255), password VARCHAR(500), account_creation DATETIME, artist_id INTEGER)'

# ここからテーブルを創る
curs.execute(
    sql
    )
conn.commit()

# データベースを閉じる
conn.close





