shape: sequence_diagram

User -> Server: 1.Request credential fields by Ids
Server -> User: 2. Return credential fields
User."select groups with access type"
User -> Server: 3. fetch users of the groups
Server -> user: 4. returns the required users
User -> Background Service: Send selected credentials and users to share with
Background Service -> WASM Service: Request to decrypt the credential
WASM Service."Decrypts the credential"
WASM Service -> Background Service: Return the decrypted credential
Background Service -> WASM Service: Request to encrypt the credential with member's public key
WASM Service."Encrypts the credential with the member's public key"
WASM Service -> Background Service: Return the encrypted credential
Background Service -> User: Return the encrypted credentials for each group member
User -> Server: Send the sharing payload (encrypted credentials, user IDs, and group ID)
Server."Processes the sharing request"
Server -> User: Return the sharing response (success/failure)
