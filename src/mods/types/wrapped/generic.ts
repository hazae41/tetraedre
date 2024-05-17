import { ZeroHexString } from "../string/index.js"
import { WrappedBigInt } from "./bigint.js"
import { WrappedBytes } from "./bytes.js"
import { WrappedNumber } from "./number.js"
import { WrappedString, WrappedZeroHexString } from "./string.js"

export namespace Wrapped {

  export type From =
    | string
    | bigint
    | number
    | Uint8Array
    | Wrapped<unknown>

}

export abstract class Wrapped<T> {
  abstract readonly value: T

  abstract toBigIntAsIntegerOrThrow(): bigint
  abstract toWrappedBigIntAsIntegerOrThrow(): Wrapped<bigint>

  static fromOrThrow(value: Wrapped.From) {
    if (value instanceof Wrapped)
      return value
    if (value instanceof Uint8Array)
      return new WrappedBytes(value)
    if (typeof value === "bigint")
      return new WrappedBigInt(value)
    if (typeof value === "number")
      return new WrappedNumber(value)
    if (ZeroHexString.String.is(value))
      return new WrappedZeroHexString(value)
    return new WrappedString(value)
  }

}