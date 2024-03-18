shape: sequence_diagram
#23262f

Server; User; Background Service; WASM Service

User -> Background Service: 1. Enter passphrase

WASM Service <- Background Service: 2. Initiate WASM module

WASM Service -> Background Service: 3. Return after initialization

Background Service -> WASM Service: 4. Send passphrase and encrypted keys

WASM Service."Decrypts the key pairs using the passphrase and stores the decrypted keys in the global context"

WASM Service -> Background Service: 5. Return success if decryption is successful

Server <- Background Service: 6. Request challenge for the public key

Background Service <- Server: 7. Return challenge

Background Service -> WASM Service: 8. Request to sign the challenge


WASM Service."signs the challenge using the decrypted private key stored in the global context.\n Passphrase is not sent here."


WASM Service -> Background Service: 9. Return the signed challenge

Background Service -> Server: 10. Send signed challenge and public key

Server -> Background Service: 11. Return JWT token


Server."Verifies the signature using the public key \n and returns a JWT token if the signature is valid."


Background Service -> User: 12. Login successful, store JWT token