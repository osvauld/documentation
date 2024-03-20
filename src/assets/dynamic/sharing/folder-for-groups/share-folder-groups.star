shape: sequence_diagram
Server
User
Background Service
WASM Service
User -> Server: Request credential fields for a folder
Server -> User: Return required credential fields
User."selects groups"
User -> Server: Request group members for the selected groups
Server -> User: Return groups members
User -> Background Service: Send selected folder, and group members
Background Service -> WASM Service: Request to decrypt the credential fields
WASM Service."Decrypts the credential fields"
WASM Service -> Background Service: Return the decrypted credential fields
Background Service -> WASM Service: Request to encrypt the credential fields with member's public key
WASM Service."Encrypts the credential fields with the member's public key"
WASM Service -> Background Service: Return the encrypted credential fields
Background Service -> User: Return the encrypted credential fields for each group member
User -> Server: Send the sharing payload (encrypted credential fields, user IDs, group ID, and folder ID)
Server -> User: Return the sharing response (success/failure)
