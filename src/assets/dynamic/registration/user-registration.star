shape: sequence_diagram
User
Server
Background Service
WASM Service
User -> Server: 1. Send username and password
Server -> User: 2. Send back challenge
User -> Background Service: 3. Send passphrase and challenge
Background Service -> WASM Service: 4. Send passphrase and request key creation

WASM Service."Generates encryption and\nsigning key pairs\nencrypts them using the passphrase"

WASM Service -> Background Service: 5. Return encrypted private keys and public keys
Background Service -> WASM Service: 6. pass challenge, encrypted sign private key, and passphrase

WASM Service."Decrypts the sign private key \n using the passphrase, \n signs the challenge, \n and returns the signed challenge"

WASM Service -> Background Service: 7. Return signed challenge
Background Service -> Server: 8. Pass signed challenge, encryption public key, and sign public key
Server -> Background Service: 9. Confirm successful registration
Background Service -> User: 10. Redirect to login page
