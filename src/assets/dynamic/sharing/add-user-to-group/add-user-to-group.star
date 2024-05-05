shape: sequence_diagram
Server
User
Background Service
WASM Service
User -> Server: 1.Request to add a user to a group
Server -> User: 3.Return credential fields
User."selects the user to share"
User -> Background Service: 4.Send credential fields and user process
Background Service -> WASM Service: 5.Request to decrypt the credential fields
WASM Service."Decrypts the credential fields"
WASM Service -> Background Service: 6.Return the decrypted credential fields
Background Service -> WASM Service: 7.Request to encrypt the credential fields with the user's public key
WASM Service."Encrypts the credential fields\nwith the user's public key"
WASM Service -> Background Service: 8.Return the encrypted credential fields
Background Service -> User: 9.Return the encrypted credential fields
User -> Background Service: 10. Hash and Sign the payload
Background Service -> User: 11. Return Signed Payload
User -> Server: 12. Send the payload (encrypted credential fields, user ID, and group ID and signature)
Server."Processes the request verifies signature"
Server -> User: 13. Return the response (success/failure)



