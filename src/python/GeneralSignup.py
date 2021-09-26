# 一般ユーザー新規登録画面

# 手順
# テーブル（E_Gather_general_users）に登録内容を保存
# ArtistSelection(興味あるアーティスト登録画面)に飛ばす


import hashlib, binascii
import cgi
import sys
import io

# 日本語を受信時にエラーにならないようにする為に必要。
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# データ受け取り用の決まり文句もたいなもの
form = cgi.FieldStorage()

# 送信データの受け取り
name = form.getvalue('your_name', '匿名')
address = form.getvalue('address', '匿名')
password = form.getvalue('password', '匿名')

password = b + password

# password暗号化
def safty_password(id, password):
    hash = hashlib.sha256()
    hash.update(id + password)
    return hash.hexdigest()

id = b'E-Gather'
password = b'Gather'

print (safty_password(id, password))


# ※メールを使った本登録、仮登録機能を創る場合、URLを作成し、メール送信機能をつける必要がある！