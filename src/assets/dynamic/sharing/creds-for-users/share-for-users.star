shape: sequence_diagram
WASM service
Background Service
User
Server
User -> Server: 1. Request credential details by Ids
Server -> User: 2. Return credential details
User -> Background Service: 3. Send selected credential and users to share with
Background Service -> WASM Service: 4. Request to decrypt the credential
WASM Service."Decrypts the credential"
WASM Service -> Background Service: 5. Return the decrypted credential
Background Service -> WASM Service: 6. for every user Request to encrypt the credential with user's public key
WASM Service."Encrypts the credential\nwith the user's public key"
WASM Service -> Background Service: 7. Return the encrypted credential

Background Service -> User: 9. Return the encrypted credentials for each user
User -> Background Service: 8. Hash and Sign the payload
Background Service -> User: 9. Return Signed Payload
User -> Server: 10. Send the payload (encrypted credential fields, user ID, and group IDs and signature)
Server."Processes the request verifies signature"
Server -> User: 11. Return the response (success/failure)

