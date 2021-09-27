# パスワード暗号化

import hashlib, binascii

def safty_password(id, password):
    hash = hashlib.sha256()
    hash.update(id + password)
    return hash.hexdigest()

id = b'E-Gather'
password = 'test1234@gmail.com'
password = password.encode()
print (safty_password(id, password))
# print(password)


