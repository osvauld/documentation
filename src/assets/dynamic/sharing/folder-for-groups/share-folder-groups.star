shape: sequence_diagram
Server
User
Background Service
WASM Service
User -> Server: 1. Request credential fields for a folder
Server -> User: 2. Return required credential fields
User."selects groups"
User -> Server: 3. Request group members for the selected groups
Server -> User: 4. Return groups members
User -> Background Service: 5. Send selected folder, and group members
Background Service -> WASM Service: 6. Request to decrypt the credential fields
WASM Service."Decrypts the credential fields"
WASM Service -> Background Service: 7. Return the decrypted credential fields
Background Service -> WASM Service: 8. Request to encrypt the credential fields with member's public key
WASM Service."Encrypts the credential fields with the member's public key"
WASM Service -> Background Service: 9. Return the encrypted credential fields
User -> Background Service: 10. Hash and Sign the payload
Background Service -> User: 11. Return Signed Payload
User -> Server: 12. Send the payload (encrypted credential fields, user ID,  group IDs, folderID and signature)
Server."Processes the request verifies signature"
Server -> User: 13. Return the response (success/failure)

