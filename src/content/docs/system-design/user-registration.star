shape: sequence_diagram

User -> Server: 1. Send username and password
Server -> User: 2. Send back challenge
User -> Background Service: 3. send passhphrase
Background Service -> WASM Service: 4. Send passphrase and request key creation
WASM Service -> Background Service: 5. Return encrypted private keys and public keys
Background Service -> WASM Service: 6. Send challenge, encrypted sign private key, and passphrase
WASM Service -> Background Service: 7. Return signed challenge
Background Service -> Server: 8. Send signed challenge, encryption public key, and sign public key
Server -> Background Service: 9. Confirm successful registration
Background Service -> User: 10. Redirect to login page
