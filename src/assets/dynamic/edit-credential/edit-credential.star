shape: sequence_diagram
Server
User
Background Service
WASM Service
User -> Server: 1.Request users with access to the credential
Server -> User: 2.Return users with access to the credential
User -> Background Service: 3. Send updated credential fields
Background Service -> WASM Service: 4.Request to encrypt the updated fields with each user's public key
WASM Service."Encrypts the updated fields\nwith each user's public key"
WASM Service -> Background Service: 5.Return the encrypted fields for each user
Background Service -> User: 6.Return the encrypted fields for each user
User -> Server: 7.Send the payload (encrypted fields for each user)
Server."Processes the request"
Server -> User: 8.Return the response (success/failure)
