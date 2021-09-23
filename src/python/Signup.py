import mysql.connector
from mysql.connector import errorcode
import MYSQLdb


config = {
        'user': 'root',
        'password': 'root',
        'host': 'localhost',
        'database':'E-Gather',
        'charset':'utf8'
        }

# MySQLへ接続
# cnx = mysql.connector.connect(**config)

# try〜except文でエラー対処
try:
    cnx = mysql.connector.connect(**config)

# ER_ACCESS_DENIED_ERRORは、DBへのアクセスが拒否された場合のエラーコード
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print('Cannnot connect database.')
    else:
        print(err)
else:
    cnx.close()


    