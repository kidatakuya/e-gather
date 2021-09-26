# パスワード暗号化

import hashlib, binascii

def safty_password(id, password):
    hash = hashlib.sha256()
    hash.update(id + password)
    return hash.hexdigest()

id = 'E-Gather'
password = 'test1234'

print (safty_password(id, password))


