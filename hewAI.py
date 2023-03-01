import pandas as pd
import mysql.connector
from datetime import datetime
import pandas as pd
import os
import sys
import json

args = sys.argv

age = args[1]
gender = args[2]
temp = args[3]
humidity = args[4]
# pd.options.display.max_rows = None
# pd.options.display.max_columns = None

#保存してあるpickleの読み込み
dirpath = './data' # ディレクトリパス
filename = 'hewdb.pickle'
path = os.path.join(dirpath, filename)

# ディレクトリ作成
os.makedirs(dirpath, exist_ok=True)

# 読込
data = pd.read_pickle(path)


# print(data.head())
# print(data)

# 学習用データ
X_train = data[['age', 'temp', 'humidity', 'gender']]
y_train = data['f_product_id']

# 予測対象データ
X_test = pd.DataFrame({
    'age': [age],
    'temp': [temp],
    'humidity': [humidity],
    'gender': [gender]
})

from sklearn.ensemble import RandomForestClassifier

# モデルを学習する
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 予測結果を表示する
pred_proba = model.predict_proba(X_test)
pred_df = pd.DataFrame({
    'f_product_id': model.classes_,
    'probability': pred_proba[0]
})
pred_df = pred_df.sort_values('probability', ascending=False)
# top4 = pred_df.head(4)
# print(top4['f_product_id'].values)

top4 = pred_df.head(4)
result = {'f_product_ids': top4['f_product_id'].values.tolist()}

print(json.dumps(result))