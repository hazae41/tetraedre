import { Base16 } from "@hazae41/base16";
import { RawHexString, ZeroHexString } from "../string/index.js";
import { WrappedBytes } from "./bytes.js";
import { Wrapped } from "./generic.js";
import { WrappedNumber } from "./number.js";
import { WrappedRawHexString, WrappedString, WrappedZeroHexString } from "./string.js";

export { WrappedBigInt as BigInt };

export class WrappedBigInt extends Wrapped<bigint> {

  constructor(
    readonly value: bigint
  ) {
    super()
  }

  toBigIntAsIntegerOrThrow() {
    return this.value
  }

  toWrappedBigIntAsIntegerOrThrow() {
    return this
  }

  toNumberAsIntegerOrThrow(): number {
    return Number(this.value)
  }

  toWrappedNumberAsIntegerOrThrow(): Wrapped<number> {
    return new WrappedNumber(this.toNumberAsIntegerOrThrow())
  }

  toZeroHexAsIntegerOrThrow(): ZeroHexString {
    return `0x${this.value.toString(16)}` as ZeroHexString
  }

  toWrappedZeroHexAsIntegerOrThrow(): Wrapped<ZeroHexString> {
    return new WrappedZeroHexString(this.toZeroHexAsIntegerOrThrow())
  }

  toBytesAsIntegerOrThrow(): Uint8Array {
    return Base16.get().padStartAndDecodeOrThrow(this.value.toString(16)).copyAndDispose()
  }

  toWrappedBytesAsIntegerOrThrow(): Wrapped<Uint8Array> {
    return new WrappedBytes(this.toBytesAsIntegerOrThrow())
  }

  toStringAsIntegerOrThrow(): string {
    return this.value.toString()
  }

  toWrappedStringAsIntegerOrThrow(): Wrapped<string> {
    return new WrappedString(this.toStringAsIntegerOrThrow())
  }

  toRawHexAsIntegerOrThrow(): RawHexString {
    return this.value.toString(16) as RawHexString
  }

  toWrappedRawHexAsIntegerOrThrow(): Wrapped<RawHexString> {
    return new WrappedRawHexString(this.toRawHexAsIntegerOrThrow())
  }

}
