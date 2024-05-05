shape: sequence_diagram

User -> Server: 1.Request credential fields by Ids
Server -> User: 2. Return credential fields
User."select groups with access type"
User -> Server: 3. fetch users of the groups
Server -> user: 4. returns the required users
User -> Background Service: Send selected credentials and users to share with
Background Service -> WASM Service: Request to decrypt the credential
WASM Service."Decrypts the credential"
WASM Service -> Background Service: 5. Return the decrypted credential
Background Service -> WASM Service: 6. Request to encrypt the credential with member's public key
WASM Service."Encrypts the credential with the member's public key"
WASM Service -> 7. Background Service: Return the encrypted credential
Background Service -> User: Return the encrypted credentials for each group member
User -> Background Service: 8. Hash and Sign the payload
Background Service -> User: 9. Return Signed Payload
User -> Server: 10. Send the payload (encrypted credential fields, user ID, and group ID and signature)
Server."Processes the request verifies signature"
Server -> User: 11. Return the response (success/failure)
