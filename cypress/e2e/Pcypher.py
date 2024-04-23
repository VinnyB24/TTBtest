def decryptString(encryptedString, k):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    decryptedString = ""

    for char in encryptedString:
        encryptedIndex = alphabet.index(char)
        decryptedIndex = (encryptedIndex - k + len(alphabet)) % len(alphabet)
        decryptedString += alphabet[decryptedIndex]

    return decryptedString


encryptedString = "DEF"
k = 5
decryptedString = decryptString(encryptedString, k)
print("Decrypted string:", decryptedString)
