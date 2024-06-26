shape: sequence_diagram
Server
User
Background Service
WASM Service
User -> Server: 1.Request users and cli_users with access to the credential
Server -> User: 2.Return users and cli_users with access to the credential
User -> Background Service: 3. Send updated credential fields
Background Service -> WASM Service: 4.Request to encrypt the updated fields with each user and cli public key
WASM Service."Encrypts the updated fields\nwith each user's public key"
WASM Service -> Background Service: 5.Return the encrypted fields for each user
Background Service -> User: 6.Return the encrypted fields for each user
User -> Background Service: 7. Hash and Sign the payload
Background Service -> User: 8. Return Signed Payload
User -> Server: 9. Send the payload (encrypted fields for each user, name, description, domain and signature)
Server."Processes the request verifies signature"
Server -> User: 8. Return the response (success/failure)
