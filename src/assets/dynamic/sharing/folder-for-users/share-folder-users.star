shape: sequence_diagram
Server
User
Background Service
WASM Service
User -> Server: 1.Request  credential fields for a folder
Server -> User: 2.Return  credential fields for the folder
User -> Background Service: 3.Send credential fields and users to share
Background Service -> WASM Service: 4.Request to decrypt the credential fields
WASM Service."Decrypts the credential fields"
WASM Service -> Background Service: 5.Return the decrypted credential fields
Background Service -> WASM Service: 6.Request to encrypt the credential fields with user's public key
WASM Service."Encrypts the credential fields with the user's public key"
WASM Service -> Background Service: 7.Return the encrypted credential fields
Background Service -> User: 8.Return the encrypted credential fields for each user
User -> Server: 9.Send the sharing payload (encrypted credential fields, user IDs, and folder ID)
Server."Process the request"
Server -> User: 10.Return the sharing response (success/failure)
