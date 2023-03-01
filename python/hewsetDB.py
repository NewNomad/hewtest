import time
import pandas as pd
import mysql.connector
import os

# MySQLデータベースに接続する
cnx = mysql.connector.connect(
    host='127.0.0.1',  # ホスト名(ローカルならlocalhostでOK）
    database='hew2023', # データベース名
    # port='8889',
    port='3306',
    user='root',  # ユーザー名
    password='root'  # パスワード
)

# ディレクトリパス
dirpath = './data'
# ファイル名
filename = 'hewdb.pickle'
# ファイルパス
path = os.path.join(dirpath, filename)

while True:
    try:
        # クエリを実行してデータを取得する
        query = '''
        SELECT t_receipts.f_receipt_id, t_products.f_product_id, t_products.f_product_name, t_receipts.f_customer_id, t_receipts.f_receipt_temperature AS temp, t_receipts.f_receipt_humidity AS humidity, t_customers.f_customer_age AS age,t_customers.f_customer_gender AS gender,t_transactions.f_transaction_quantity
        FROM t_receipts
        INNER JOIN t_transactions ON t_transactions.f_receipt_id = t_receipts.f_receipt_id
        INNER JOIN t_products ON t_products.f_product_id = t_transactions.f_product_id
        INNER JOIN t_customers ON t_customers.f_customer_id = t_receipts.f_customer_id;
        '''
        data = pd.read_sql(query, cnx)

        # 保存
        pd.to_pickle(data, path) 

        print('データを保存しました。')

        # 1時間待機する
        time.sleep(3600)

    except Exception as e:
        print('エラーが発生しました:', e)
        # エラーが発生した場合は、5分待機して再試行する
        time.sleep(300)
