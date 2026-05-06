// declare module 'evp_bytestokey' {
//     function EVP_BytesToKey(password: string | Buffer, salt: string | Buffer, keyLen: number, ivLen: number): Buffer;
//     export default EVP_BytesToKey;
// }
// import 'evp_bytestokey'
declare module 'evp_bytestokey' {
    const EVP_BytesToKey: any
    export default EVP_BytesToKey
}