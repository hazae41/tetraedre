import { Bytes } from "@hazae41/bytes";
import { Keccak256 } from "@hazae41/keccak256";
import { Secp256k1 } from "@hazae41/secp256k1";
import { BytesAsUtf8 } from "../helpers/generic.js";
import { WasmSignature } from "../signature/index.js";

export class WasmPrivateKey {

  constructor(
    readonly value: Secp256k1.PrivateKey
  ) { }

  getPublicKeyOrThrow() {
    return new WasmPublicKey(this.value.getPublicKeyOrThrow())
  }

  signUnsafeMessageOrThrow(message: BytesAsUtf8.From) {
    const bytesm = BytesAsUtf8.fromOrThrow(message)
    using hash = Keccak256.get().hashOrThrow(bytesm)

    return new WasmSignature(this.value.signOrThrow(hash))
  }

  signPersonalMessageOrThrow(message: BytesAsUtf8.From) {
    const bytesm = BytesAsUtf8.fromOrThrow(message)
    const prefix = Bytes.fromUtf8("\x19Ethereum Signed Message:\n" + bytesm.length.toString())

    const concat = Bytes.concat([prefix, bytesm])
    using hash = Keccak256.get().hashOrThrow(concat)

    return new WasmSignature(this.value.signOrThrow(hash))
  }

}

export class WasmPublicKey {

  constructor(
    readonly value: Secp256k1.PublicKey
  ) { }

  static recoverUnsafeMessageOrThrow(message: BytesAsUtf8.From, signature: WasmSignature) {
    const bytesm = BytesAsUtf8.fromOrThrow(message)
    using hash = Keccak256.get().hashOrThrow(bytesm)

    const inner = Secp256k1.get().PublicKey.recoverOrThrow(hash, signature.value)

    return new WasmPublicKey(inner)
  }

  verifyUnsafeMessageOrThrow(message: BytesAsUtf8.From, signature: WasmSignature) {
    const bytesm = BytesAsUtf8.fromOrThrow(message)
    using hash = Keccak256.get().hashOrThrow(bytesm)

    using recovered = Secp256k1.get().PublicKey.recoverOrThrow(hash, signature.value)

    using left = this.value.exportCompressedOrThrow()
    using right = recovered.exportCompressedOrThrow()

    return Bytes.equals(left.bytes, right.bytes)
  }

}