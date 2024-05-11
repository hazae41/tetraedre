import { Base16 } from "@hazae41/base16";
import { Cursor } from "@hazae41/cursor";
import { BigInts } from "libs/bigint/bigint.js";
import { TextCursor } from "libs/cursor/cursor.js";
import { BytesInteger, NumberInteger } from "mods/types/integer/index.js";
import { RawHexString } from "mods/types/string/index.js";

export { AbiUint8 as Uint8, BytesAbiUint8 as BytesUint8, RawHexAbiUint8 as RawHexUint8, NumberAbiUint8 as NumberUint8 }
  
export type AbiUint8 =
  | RawHexAbiUint8
  | BytesAbiUint8
  | NumberAbiUint8

export namespace AbiUint8 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint8.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint8.create(value)
    if (typeof value === "number")
      return NumberAbiUint8.create(value)
    if (typeof value === "bigint")
      return NumberAbiUint8.create(Number(value))
    return RawHexAbiUint8.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint8.From) {
    return AbiUint8.create(value)
  }

  export function codegen() {
    return `Abi.Int8`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return NumberAbiUint8.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return NumberAbiUint8.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint8 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint8 {
  readonly #class = BytesAbiUint8

  static readonly bytes = 1
  static readonly nibbles = 2
  static readonly bits = 8
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint8.Create) {
    return new BytesAbiUint8(value)
  }

  static fromOrThrow(value: BytesAbiUint8.From) {
    return new BytesAbiUint8(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint8(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint8(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int8`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint8.nibbles

    const content = cursor.readOrThrow(BytesAbiUint8.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint8(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint8.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint8.bytes)

    return new BytesAbiUint8(content)
  }

}

export namespace NumberAbiUint8 {

  export type Create = number

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class NumberAbiUint8 {
  readonly #class = NumberAbiUint8

  static readonly bytes = 1
  static readonly nibbles = 2
  static readonly bits = 8
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: number
  ) { }

  static create(value: NumberAbiUint8.Create) {
    return new NumberAbiUint8(value)
  }

  static fromOrThrow(value: NumberAbiUint8.From) {
    return new NumberAbiUint8(NumberInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return BigInt(this.value)
  }

  toJSON(): string {
    return this.value.toString()
  }

  static codegen() {
    return `Abi.Int8`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.toString(16).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value.toString(16)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - NumberAbiUint8.nibbles

    const content = cursor.readOrThrow(NumberAbiUint8.nibbles)
    const value = parseInt(content, 16)
    
    return new NumberAbiUint8(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - 4)
    cursor.writeUint32OrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - 4

    const value = cursor.readUint32OrThrow()

    return new NumberAbiUint8(value)
  }

}

export namespace RawHexAbiUint8 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint8 {
  readonly #class = RawHexAbiUint8

  static readonly bytes = 1
  static readonly nibbles = 2
  static readonly bits = 8
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint8.Create) {
    return new RawHexAbiUint8(value)
  }

  static fromOrThrow(value: RawHexAbiUint8.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint8(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint8(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint8(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint8(value.slice(2))
    return new RawHexAbiUint8(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int8`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint8.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint8.nibbles)

    return new RawHexAbiUint8(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint8.bytes

    const content = cursor.readOrThrow(RawHexAbiUint8.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint8(value)
  }

}

export { AbiUint16 as Uint16, BytesAbiUint16 as BytesUint16, RawHexAbiUint16 as RawHexUint16, NumberAbiUint16 as NumberUint16 }
  
export type AbiUint16 =
  | RawHexAbiUint16
  | BytesAbiUint16
  | NumberAbiUint16

export namespace AbiUint16 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint16.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint16.create(value)
    if (typeof value === "number")
      return NumberAbiUint16.create(value)
    if (typeof value === "bigint")
      return NumberAbiUint16.create(Number(value))
    return RawHexAbiUint16.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint16.From) {
    return AbiUint16.create(value)
  }

  export function codegen() {
    return `Abi.Int16`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return NumberAbiUint16.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return NumberAbiUint16.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint16 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint16 {
  readonly #class = BytesAbiUint16

  static readonly bytes = 2
  static readonly nibbles = 4
  static readonly bits = 16
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint16.Create) {
    return new BytesAbiUint16(value)
  }

  static fromOrThrow(value: BytesAbiUint16.From) {
    return new BytesAbiUint16(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint16(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint16(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int16`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint16.nibbles

    const content = cursor.readOrThrow(BytesAbiUint16.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint16(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint16.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint16.bytes)

    return new BytesAbiUint16(content)
  }

}

export namespace NumberAbiUint16 {

  export type Create = number

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class NumberAbiUint16 {
  readonly #class = NumberAbiUint16

  static readonly bytes = 2
  static readonly nibbles = 4
  static readonly bits = 16
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: number
  ) { }

  static create(value: NumberAbiUint16.Create) {
    return new NumberAbiUint16(value)
  }

  static fromOrThrow(value: NumberAbiUint16.From) {
    return new NumberAbiUint16(NumberInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return BigInt(this.value)
  }

  toJSON(): string {
    return this.value.toString()
  }

  static codegen() {
    return `Abi.Int16`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.toString(16).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value.toString(16)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - NumberAbiUint16.nibbles

    const content = cursor.readOrThrow(NumberAbiUint16.nibbles)
    const value = parseInt(content, 16)
    
    return new NumberAbiUint16(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - 4)
    cursor.writeUint32OrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - 4

    const value = cursor.readUint32OrThrow()

    return new NumberAbiUint16(value)
  }

}

export namespace RawHexAbiUint16 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint16 {
  readonly #class = RawHexAbiUint16

  static readonly bytes = 2
  static readonly nibbles = 4
  static readonly bits = 16
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint16.Create) {
    return new RawHexAbiUint16(value)
  }

  static fromOrThrow(value: RawHexAbiUint16.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint16(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint16(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint16(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint16(value.slice(2))
    return new RawHexAbiUint16(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int16`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint16.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint16.nibbles)

    return new RawHexAbiUint16(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint16.bytes

    const content = cursor.readOrThrow(RawHexAbiUint16.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint16(value)
  }

}

export { AbiUint24 as Uint24, BytesAbiUint24 as BytesUint24, RawHexAbiUint24 as RawHexUint24, NumberAbiUint24 as NumberUint24 }
  
export type AbiUint24 =
  | RawHexAbiUint24
  | BytesAbiUint24
  | NumberAbiUint24

export namespace AbiUint24 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint24.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint24.create(value)
    if (typeof value === "number")
      return NumberAbiUint24.create(value)
    if (typeof value === "bigint")
      return NumberAbiUint24.create(Number(value))
    return RawHexAbiUint24.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint24.From) {
    return AbiUint24.create(value)
  }

  export function codegen() {
    return `Abi.Int24`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return NumberAbiUint24.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return NumberAbiUint24.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint24 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint24 {
  readonly #class = BytesAbiUint24

  static readonly bytes = 3
  static readonly nibbles = 6
  static readonly bits = 24
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint24.Create) {
    return new BytesAbiUint24(value)
  }

  static fromOrThrow(value: BytesAbiUint24.From) {
    return new BytesAbiUint24(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint24(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint24(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int24`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint24.nibbles

    const content = cursor.readOrThrow(BytesAbiUint24.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint24(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint24.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint24.bytes)

    return new BytesAbiUint24(content)
  }

}

export namespace NumberAbiUint24 {

  export type Create = number

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class NumberAbiUint24 {
  readonly #class = NumberAbiUint24

  static readonly bytes = 3
  static readonly nibbles = 6
  static readonly bits = 24
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: number
  ) { }

  static create(value: NumberAbiUint24.Create) {
    return new NumberAbiUint24(value)
  }

  static fromOrThrow(value: NumberAbiUint24.From) {
    return new NumberAbiUint24(NumberInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return BigInt(this.value)
  }

  toJSON(): string {
    return this.value.toString()
  }

  static codegen() {
    return `Abi.Int24`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.toString(16).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value.toString(16)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - NumberAbiUint24.nibbles

    const content = cursor.readOrThrow(NumberAbiUint24.nibbles)
    const value = parseInt(content, 16)
    
    return new NumberAbiUint24(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - 4)
    cursor.writeUint32OrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - 4

    const value = cursor.readUint32OrThrow()

    return new NumberAbiUint24(value)
  }

}

export namespace RawHexAbiUint24 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint24 {
  readonly #class = RawHexAbiUint24

  static readonly bytes = 3
  static readonly nibbles = 6
  static readonly bits = 24
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint24.Create) {
    return new RawHexAbiUint24(value)
  }

  static fromOrThrow(value: RawHexAbiUint24.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint24(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint24(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint24(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint24(value.slice(2))
    return new RawHexAbiUint24(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int24`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint24.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint24.nibbles)

    return new RawHexAbiUint24(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint24.bytes

    const content = cursor.readOrThrow(RawHexAbiUint24.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint24(value)
  }

}

export { AbiUint32 as Uint32, BytesAbiUint32 as BytesUint32, RawHexAbiUint32 as RawHexUint32, NumberAbiUint32 as NumberUint32 }
  
export type AbiUint32 =
  | RawHexAbiUint32
  | BytesAbiUint32
  | NumberAbiUint32

export namespace AbiUint32 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint32.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint32.create(value)
    if (typeof value === "number")
      return NumberAbiUint32.create(value)
    if (typeof value === "bigint")
      return NumberAbiUint32.create(Number(value))
    return RawHexAbiUint32.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint32.From) {
    return AbiUint32.create(value)
  }

  export function codegen() {
    return `Abi.Int32`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return NumberAbiUint32.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return NumberAbiUint32.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint32 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint32 {
  readonly #class = BytesAbiUint32

  static readonly bytes = 4
  static readonly nibbles = 8
  static readonly bits = 32
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint32.Create) {
    return new BytesAbiUint32(value)
  }

  static fromOrThrow(value: BytesAbiUint32.From) {
    return new BytesAbiUint32(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint32(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint32(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int32`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint32.nibbles

    const content = cursor.readOrThrow(BytesAbiUint32.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint32(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint32.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint32.bytes)

    return new BytesAbiUint32(content)
  }

}

export namespace NumberAbiUint32 {

  export type Create = number

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class NumberAbiUint32 {
  readonly #class = NumberAbiUint32

  static readonly bytes = 4
  static readonly nibbles = 8
  static readonly bits = 32
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: number
  ) { }

  static create(value: NumberAbiUint32.Create) {
    return new NumberAbiUint32(value)
  }

  static fromOrThrow(value: NumberAbiUint32.From) {
    return new NumberAbiUint32(NumberInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return BigInt(this.value)
  }

  toJSON(): string {
    return this.value.toString()
  }

  static codegen() {
    return `Abi.Int32`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.toString(16).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value.toString(16)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - NumberAbiUint32.nibbles

    const content = cursor.readOrThrow(NumberAbiUint32.nibbles)
    const value = parseInt(content, 16)
    
    return new NumberAbiUint32(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - 4)
    cursor.writeUint32OrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - 4

    const value = cursor.readUint32OrThrow()

    return new NumberAbiUint32(value)
  }

}

export namespace RawHexAbiUint32 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint32 {
  readonly #class = RawHexAbiUint32

  static readonly bytes = 4
  static readonly nibbles = 8
  static readonly bits = 32
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint32.Create) {
    return new RawHexAbiUint32(value)
  }

  static fromOrThrow(value: RawHexAbiUint32.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint32(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint32(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint32(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint32(value.slice(2))
    return new RawHexAbiUint32(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int32`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint32.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint32.nibbles)

    return new RawHexAbiUint32(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint32.bytes

    const content = cursor.readOrThrow(RawHexAbiUint32.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint32(value)
  }

}

export { AbiUint40 as Uint40, BytesAbiUint40 as BytesUint40, RawHexAbiUint40 as RawHexUint40 }
  
export type AbiUint40 =
  | RawHexAbiUint40
  | BytesAbiUint40
  

export namespace AbiUint40 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint40.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint40.create(value)
    
    return RawHexAbiUint40.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint40.From) {
    return AbiUint40.create(value)
  }

  export function codegen() {
    return `Abi.Int40`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint40.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint40.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint40 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint40 {
  readonly #class = BytesAbiUint40

  static readonly bytes = 5
  static readonly nibbles = 10
  static readonly bits = 40
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint40.Create) {
    return new BytesAbiUint40(value)
  }

  static fromOrThrow(value: BytesAbiUint40.From) {
    return new BytesAbiUint40(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint40(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint40(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int40`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint40.nibbles

    const content = cursor.readOrThrow(BytesAbiUint40.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint40(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint40.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint40.bytes)

    return new BytesAbiUint40(content)
  }

}



export namespace RawHexAbiUint40 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint40 {
  readonly #class = RawHexAbiUint40

  static readonly bytes = 5
  static readonly nibbles = 10
  static readonly bits = 40
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint40.Create) {
    return new RawHexAbiUint40(value)
  }

  static fromOrThrow(value: RawHexAbiUint40.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint40(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint40(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint40(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint40(value.slice(2))
    return new RawHexAbiUint40(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int40`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint40.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint40.nibbles)

    return new RawHexAbiUint40(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint40.bytes

    const content = cursor.readOrThrow(RawHexAbiUint40.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint40(value)
  }

}

export { AbiUint48 as Uint48, BytesAbiUint48 as BytesUint48, RawHexAbiUint48 as RawHexUint48 }
  
export type AbiUint48 =
  | RawHexAbiUint48
  | BytesAbiUint48
  

export namespace AbiUint48 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint48.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint48.create(value)
    
    return RawHexAbiUint48.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint48.From) {
    return AbiUint48.create(value)
  }

  export function codegen() {
    return `Abi.Int48`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint48.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint48.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint48 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint48 {
  readonly #class = BytesAbiUint48

  static readonly bytes = 6
  static readonly nibbles = 12
  static readonly bits = 48
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint48.Create) {
    return new BytesAbiUint48(value)
  }

  static fromOrThrow(value: BytesAbiUint48.From) {
    return new BytesAbiUint48(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint48(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint48(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int48`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint48.nibbles

    const content = cursor.readOrThrow(BytesAbiUint48.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint48(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint48.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint48.bytes)

    return new BytesAbiUint48(content)
  }

}



export namespace RawHexAbiUint48 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint48 {
  readonly #class = RawHexAbiUint48

  static readonly bytes = 6
  static readonly nibbles = 12
  static readonly bits = 48
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint48.Create) {
    return new RawHexAbiUint48(value)
  }

  static fromOrThrow(value: RawHexAbiUint48.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint48(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint48(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint48(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint48(value.slice(2))
    return new RawHexAbiUint48(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int48`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint48.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint48.nibbles)

    return new RawHexAbiUint48(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint48.bytes

    const content = cursor.readOrThrow(RawHexAbiUint48.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint48(value)
  }

}

export { AbiUint56 as Uint56, BytesAbiUint56 as BytesUint56, RawHexAbiUint56 as RawHexUint56 }
  
export type AbiUint56 =
  | RawHexAbiUint56
  | BytesAbiUint56
  

export namespace AbiUint56 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint56.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint56.create(value)
    
    return RawHexAbiUint56.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint56.From) {
    return AbiUint56.create(value)
  }

  export function codegen() {
    return `Abi.Int56`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint56.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint56.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint56 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint56 {
  readonly #class = BytesAbiUint56

  static readonly bytes = 7
  static readonly nibbles = 14
  static readonly bits = 56
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint56.Create) {
    return new BytesAbiUint56(value)
  }

  static fromOrThrow(value: BytesAbiUint56.From) {
    return new BytesAbiUint56(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint56(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint56(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int56`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint56.nibbles

    const content = cursor.readOrThrow(BytesAbiUint56.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint56(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint56.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint56.bytes)

    return new BytesAbiUint56(content)
  }

}



export namespace RawHexAbiUint56 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint56 {
  readonly #class = RawHexAbiUint56

  static readonly bytes = 7
  static readonly nibbles = 14
  static readonly bits = 56
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint56.Create) {
    return new RawHexAbiUint56(value)
  }

  static fromOrThrow(value: RawHexAbiUint56.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint56(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint56(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint56(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint56(value.slice(2))
    return new RawHexAbiUint56(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int56`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint56.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint56.nibbles)

    return new RawHexAbiUint56(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint56.bytes

    const content = cursor.readOrThrow(RawHexAbiUint56.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint56(value)
  }

}

export { AbiUint64 as Uint64, BytesAbiUint64 as BytesUint64, RawHexAbiUint64 as RawHexUint64 }
  
export type AbiUint64 =
  | RawHexAbiUint64
  | BytesAbiUint64
  

export namespace AbiUint64 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint64.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint64.create(value)
    
    return RawHexAbiUint64.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint64.From) {
    return AbiUint64.create(value)
  }

  export function codegen() {
    return `Abi.Int64`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint64.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint64.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint64 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint64 {
  readonly #class = BytesAbiUint64

  static readonly bytes = 8
  static readonly nibbles = 16
  static readonly bits = 64
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint64.Create) {
    return new BytesAbiUint64(value)
  }

  static fromOrThrow(value: BytesAbiUint64.From) {
    return new BytesAbiUint64(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint64(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint64(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int64`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint64.nibbles

    const content = cursor.readOrThrow(BytesAbiUint64.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint64(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint64.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint64.bytes)

    return new BytesAbiUint64(content)
  }

}



export namespace RawHexAbiUint64 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint64 {
  readonly #class = RawHexAbiUint64

  static readonly bytes = 8
  static readonly nibbles = 16
  static readonly bits = 64
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint64.Create) {
    return new RawHexAbiUint64(value)
  }

  static fromOrThrow(value: RawHexAbiUint64.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint64(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint64(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint64(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint64(value.slice(2))
    return new RawHexAbiUint64(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int64`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint64.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint64.nibbles)

    return new RawHexAbiUint64(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint64.bytes

    const content = cursor.readOrThrow(RawHexAbiUint64.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint64(value)
  }

}

export { AbiUint72 as Uint72, BytesAbiUint72 as BytesUint72, RawHexAbiUint72 as RawHexUint72 }
  
export type AbiUint72 =
  | RawHexAbiUint72
  | BytesAbiUint72
  

export namespace AbiUint72 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint72.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint72.create(value)
    
    return RawHexAbiUint72.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint72.From) {
    return AbiUint72.create(value)
  }

  export function codegen() {
    return `Abi.Int72`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint72.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint72.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint72 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint72 {
  readonly #class = BytesAbiUint72

  static readonly bytes = 9
  static readonly nibbles = 18
  static readonly bits = 72
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint72.Create) {
    return new BytesAbiUint72(value)
  }

  static fromOrThrow(value: BytesAbiUint72.From) {
    return new BytesAbiUint72(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint72(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint72(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int72`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint72.nibbles

    const content = cursor.readOrThrow(BytesAbiUint72.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint72(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint72.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint72.bytes)

    return new BytesAbiUint72(content)
  }

}



export namespace RawHexAbiUint72 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint72 {
  readonly #class = RawHexAbiUint72

  static readonly bytes = 9
  static readonly nibbles = 18
  static readonly bits = 72
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint72.Create) {
    return new RawHexAbiUint72(value)
  }

  static fromOrThrow(value: RawHexAbiUint72.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint72(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint72(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint72(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint72(value.slice(2))
    return new RawHexAbiUint72(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int72`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint72.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint72.nibbles)

    return new RawHexAbiUint72(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint72.bytes

    const content = cursor.readOrThrow(RawHexAbiUint72.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint72(value)
  }

}

export { AbiUint80 as Uint80, BytesAbiUint80 as BytesUint80, RawHexAbiUint80 as RawHexUint80 }
  
export type AbiUint80 =
  | RawHexAbiUint80
  | BytesAbiUint80
  

export namespace AbiUint80 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint80.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint80.create(value)
    
    return RawHexAbiUint80.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint80.From) {
    return AbiUint80.create(value)
  }

  export function codegen() {
    return `Abi.Int80`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint80.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint80.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint80 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint80 {
  readonly #class = BytesAbiUint80

  static readonly bytes = 10
  static readonly nibbles = 20
  static readonly bits = 80
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint80.Create) {
    return new BytesAbiUint80(value)
  }

  static fromOrThrow(value: BytesAbiUint80.From) {
    return new BytesAbiUint80(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint80(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint80(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int80`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint80.nibbles

    const content = cursor.readOrThrow(BytesAbiUint80.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint80(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint80.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint80.bytes)

    return new BytesAbiUint80(content)
  }

}



export namespace RawHexAbiUint80 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint80 {
  readonly #class = RawHexAbiUint80

  static readonly bytes = 10
  static readonly nibbles = 20
  static readonly bits = 80
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint80.Create) {
    return new RawHexAbiUint80(value)
  }

  static fromOrThrow(value: RawHexAbiUint80.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint80(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint80(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint80(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint80(value.slice(2))
    return new RawHexAbiUint80(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int80`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint80.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint80.nibbles)

    return new RawHexAbiUint80(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint80.bytes

    const content = cursor.readOrThrow(RawHexAbiUint80.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint80(value)
  }

}

export { AbiUint88 as Uint88, BytesAbiUint88 as BytesUint88, RawHexAbiUint88 as RawHexUint88 }
  
export type AbiUint88 =
  | RawHexAbiUint88
  | BytesAbiUint88
  

export namespace AbiUint88 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint88.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint88.create(value)
    
    return RawHexAbiUint88.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint88.From) {
    return AbiUint88.create(value)
  }

  export function codegen() {
    return `Abi.Int88`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint88.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint88.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint88 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint88 {
  readonly #class = BytesAbiUint88

  static readonly bytes = 11
  static readonly nibbles = 22
  static readonly bits = 88
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint88.Create) {
    return new BytesAbiUint88(value)
  }

  static fromOrThrow(value: BytesAbiUint88.From) {
    return new BytesAbiUint88(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint88(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint88(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int88`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint88.nibbles

    const content = cursor.readOrThrow(BytesAbiUint88.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint88(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint88.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint88.bytes)

    return new BytesAbiUint88(content)
  }

}



export namespace RawHexAbiUint88 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint88 {
  readonly #class = RawHexAbiUint88

  static readonly bytes = 11
  static readonly nibbles = 22
  static readonly bits = 88
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint88.Create) {
    return new RawHexAbiUint88(value)
  }

  static fromOrThrow(value: RawHexAbiUint88.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint88(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint88(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint88(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint88(value.slice(2))
    return new RawHexAbiUint88(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int88`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint88.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint88.nibbles)

    return new RawHexAbiUint88(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint88.bytes

    const content = cursor.readOrThrow(RawHexAbiUint88.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint88(value)
  }

}

export { AbiUint96 as Uint96, BytesAbiUint96 as BytesUint96, RawHexAbiUint96 as RawHexUint96 }
  
export type AbiUint96 =
  | RawHexAbiUint96
  | BytesAbiUint96
  

export namespace AbiUint96 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint96.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint96.create(value)
    
    return RawHexAbiUint96.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint96.From) {
    return AbiUint96.create(value)
  }

  export function codegen() {
    return `Abi.Int96`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint96.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint96.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint96 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint96 {
  readonly #class = BytesAbiUint96

  static readonly bytes = 12
  static readonly nibbles = 24
  static readonly bits = 96
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint96.Create) {
    return new BytesAbiUint96(value)
  }

  static fromOrThrow(value: BytesAbiUint96.From) {
    return new BytesAbiUint96(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint96(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint96(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int96`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint96.nibbles

    const content = cursor.readOrThrow(BytesAbiUint96.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint96(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint96.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint96.bytes)

    return new BytesAbiUint96(content)
  }

}



export namespace RawHexAbiUint96 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint96 {
  readonly #class = RawHexAbiUint96

  static readonly bytes = 12
  static readonly nibbles = 24
  static readonly bits = 96
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint96.Create) {
    return new RawHexAbiUint96(value)
  }

  static fromOrThrow(value: RawHexAbiUint96.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint96(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint96(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint96(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint96(value.slice(2))
    return new RawHexAbiUint96(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int96`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint96.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint96.nibbles)

    return new RawHexAbiUint96(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint96.bytes

    const content = cursor.readOrThrow(RawHexAbiUint96.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint96(value)
  }

}

export { AbiUint104 as Uint104, BytesAbiUint104 as BytesUint104, RawHexAbiUint104 as RawHexUint104 }
  
export type AbiUint104 =
  | RawHexAbiUint104
  | BytesAbiUint104
  

export namespace AbiUint104 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint104.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint104.create(value)
    
    return RawHexAbiUint104.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint104.From) {
    return AbiUint104.create(value)
  }

  export function codegen() {
    return `Abi.Int104`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint104.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint104.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint104 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint104 {
  readonly #class = BytesAbiUint104

  static readonly bytes = 13
  static readonly nibbles = 26
  static readonly bits = 104
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint104.Create) {
    return new BytesAbiUint104(value)
  }

  static fromOrThrow(value: BytesAbiUint104.From) {
    return new BytesAbiUint104(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint104(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint104(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int104`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint104.nibbles

    const content = cursor.readOrThrow(BytesAbiUint104.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint104(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint104.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint104.bytes)

    return new BytesAbiUint104(content)
  }

}



export namespace RawHexAbiUint104 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint104 {
  readonly #class = RawHexAbiUint104

  static readonly bytes = 13
  static readonly nibbles = 26
  static readonly bits = 104
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint104.Create) {
    return new RawHexAbiUint104(value)
  }

  static fromOrThrow(value: RawHexAbiUint104.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint104(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint104(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint104(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint104(value.slice(2))
    return new RawHexAbiUint104(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int104`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint104.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint104.nibbles)

    return new RawHexAbiUint104(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint104.bytes

    const content = cursor.readOrThrow(RawHexAbiUint104.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint104(value)
  }

}

export { AbiUint112 as Uint112, BytesAbiUint112 as BytesUint112, RawHexAbiUint112 as RawHexUint112 }
  
export type AbiUint112 =
  | RawHexAbiUint112
  | BytesAbiUint112
  

export namespace AbiUint112 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint112.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint112.create(value)
    
    return RawHexAbiUint112.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint112.From) {
    return AbiUint112.create(value)
  }

  export function codegen() {
    return `Abi.Int112`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint112.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint112.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint112 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint112 {
  readonly #class = BytesAbiUint112

  static readonly bytes = 14
  static readonly nibbles = 28
  static readonly bits = 112
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint112.Create) {
    return new BytesAbiUint112(value)
  }

  static fromOrThrow(value: BytesAbiUint112.From) {
    return new BytesAbiUint112(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint112(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint112(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int112`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint112.nibbles

    const content = cursor.readOrThrow(BytesAbiUint112.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint112(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint112.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint112.bytes)

    return new BytesAbiUint112(content)
  }

}



export namespace RawHexAbiUint112 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint112 {
  readonly #class = RawHexAbiUint112

  static readonly bytes = 14
  static readonly nibbles = 28
  static readonly bits = 112
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint112.Create) {
    return new RawHexAbiUint112(value)
  }

  static fromOrThrow(value: RawHexAbiUint112.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint112(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint112(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint112(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint112(value.slice(2))
    return new RawHexAbiUint112(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int112`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint112.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint112.nibbles)

    return new RawHexAbiUint112(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint112.bytes

    const content = cursor.readOrThrow(RawHexAbiUint112.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint112(value)
  }

}

export { AbiUint120 as Uint120, BytesAbiUint120 as BytesUint120, RawHexAbiUint120 as RawHexUint120 }
  
export type AbiUint120 =
  | RawHexAbiUint120
  | BytesAbiUint120
  

export namespace AbiUint120 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint120.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint120.create(value)
    
    return RawHexAbiUint120.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint120.From) {
    return AbiUint120.create(value)
  }

  export function codegen() {
    return `Abi.Int120`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint120.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint120.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint120 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint120 {
  readonly #class = BytesAbiUint120

  static readonly bytes = 15
  static readonly nibbles = 30
  static readonly bits = 120
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint120.Create) {
    return new BytesAbiUint120(value)
  }

  static fromOrThrow(value: BytesAbiUint120.From) {
    return new BytesAbiUint120(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint120(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint120(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int120`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint120.nibbles

    const content = cursor.readOrThrow(BytesAbiUint120.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint120(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint120.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint120.bytes)

    return new BytesAbiUint120(content)
  }

}



export namespace RawHexAbiUint120 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint120 {
  readonly #class = RawHexAbiUint120

  static readonly bytes = 15
  static readonly nibbles = 30
  static readonly bits = 120
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint120.Create) {
    return new RawHexAbiUint120(value)
  }

  static fromOrThrow(value: RawHexAbiUint120.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint120(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint120(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint120(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint120(value.slice(2))
    return new RawHexAbiUint120(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int120`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint120.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint120.nibbles)

    return new RawHexAbiUint120(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint120.bytes

    const content = cursor.readOrThrow(RawHexAbiUint120.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint120(value)
  }

}

export { AbiUint128 as Uint128, BytesAbiUint128 as BytesUint128, RawHexAbiUint128 as RawHexUint128 }
  
export type AbiUint128 =
  | RawHexAbiUint128
  | BytesAbiUint128
  

export namespace AbiUint128 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint128.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint128.create(value)
    
    return RawHexAbiUint128.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint128.From) {
    return AbiUint128.create(value)
  }

  export function codegen() {
    return `Abi.Int128`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint128.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint128.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint128 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint128 {
  readonly #class = BytesAbiUint128

  static readonly bytes = 16
  static readonly nibbles = 32
  static readonly bits = 128
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint128.Create) {
    return new BytesAbiUint128(value)
  }

  static fromOrThrow(value: BytesAbiUint128.From) {
    return new BytesAbiUint128(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint128(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint128(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int128`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint128.nibbles

    const content = cursor.readOrThrow(BytesAbiUint128.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint128(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint128.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint128.bytes)

    return new BytesAbiUint128(content)
  }

}



export namespace RawHexAbiUint128 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint128 {
  readonly #class = RawHexAbiUint128

  static readonly bytes = 16
  static readonly nibbles = 32
  static readonly bits = 128
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint128.Create) {
    return new RawHexAbiUint128(value)
  }

  static fromOrThrow(value: RawHexAbiUint128.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint128(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint128(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint128(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint128(value.slice(2))
    return new RawHexAbiUint128(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int128`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint128.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint128.nibbles)

    return new RawHexAbiUint128(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint128.bytes

    const content = cursor.readOrThrow(RawHexAbiUint128.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint128(value)
  }

}

export { AbiUint136 as Uint136, BytesAbiUint136 as BytesUint136, RawHexAbiUint136 as RawHexUint136 }
  
export type AbiUint136 =
  | RawHexAbiUint136
  | BytesAbiUint136
  

export namespace AbiUint136 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint136.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint136.create(value)
    
    return RawHexAbiUint136.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint136.From) {
    return AbiUint136.create(value)
  }

  export function codegen() {
    return `Abi.Int136`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint136.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint136.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint136 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint136 {
  readonly #class = BytesAbiUint136

  static readonly bytes = 17
  static readonly nibbles = 34
  static readonly bits = 136
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint136.Create) {
    return new BytesAbiUint136(value)
  }

  static fromOrThrow(value: BytesAbiUint136.From) {
    return new BytesAbiUint136(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint136(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint136(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int136`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint136.nibbles

    const content = cursor.readOrThrow(BytesAbiUint136.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint136(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint136.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint136.bytes)

    return new BytesAbiUint136(content)
  }

}



export namespace RawHexAbiUint136 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint136 {
  readonly #class = RawHexAbiUint136

  static readonly bytes = 17
  static readonly nibbles = 34
  static readonly bits = 136
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint136.Create) {
    return new RawHexAbiUint136(value)
  }

  static fromOrThrow(value: RawHexAbiUint136.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint136(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint136(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint136(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint136(value.slice(2))
    return new RawHexAbiUint136(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int136`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint136.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint136.nibbles)

    return new RawHexAbiUint136(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint136.bytes

    const content = cursor.readOrThrow(RawHexAbiUint136.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint136(value)
  }

}

export { AbiUint144 as Uint144, BytesAbiUint144 as BytesUint144, RawHexAbiUint144 as RawHexUint144 }
  
export type AbiUint144 =
  | RawHexAbiUint144
  | BytesAbiUint144
  

export namespace AbiUint144 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint144.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint144.create(value)
    
    return RawHexAbiUint144.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint144.From) {
    return AbiUint144.create(value)
  }

  export function codegen() {
    return `Abi.Int144`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint144.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint144.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint144 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint144 {
  readonly #class = BytesAbiUint144

  static readonly bytes = 18
  static readonly nibbles = 36
  static readonly bits = 144
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint144.Create) {
    return new BytesAbiUint144(value)
  }

  static fromOrThrow(value: BytesAbiUint144.From) {
    return new BytesAbiUint144(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint144(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint144(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int144`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint144.nibbles

    const content = cursor.readOrThrow(BytesAbiUint144.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint144(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint144.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint144.bytes)

    return new BytesAbiUint144(content)
  }

}



export namespace RawHexAbiUint144 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint144 {
  readonly #class = RawHexAbiUint144

  static readonly bytes = 18
  static readonly nibbles = 36
  static readonly bits = 144
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint144.Create) {
    return new RawHexAbiUint144(value)
  }

  static fromOrThrow(value: RawHexAbiUint144.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint144(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint144(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint144(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint144(value.slice(2))
    return new RawHexAbiUint144(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int144`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint144.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint144.nibbles)

    return new RawHexAbiUint144(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint144.bytes

    const content = cursor.readOrThrow(RawHexAbiUint144.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint144(value)
  }

}

export { AbiUint152 as Uint152, BytesAbiUint152 as BytesUint152, RawHexAbiUint152 as RawHexUint152 }
  
export type AbiUint152 =
  | RawHexAbiUint152
  | BytesAbiUint152
  

export namespace AbiUint152 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint152.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint152.create(value)
    
    return RawHexAbiUint152.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint152.From) {
    return AbiUint152.create(value)
  }

  export function codegen() {
    return `Abi.Int152`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint152.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint152.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint152 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint152 {
  readonly #class = BytesAbiUint152

  static readonly bytes = 19
  static readonly nibbles = 38
  static readonly bits = 152
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint152.Create) {
    return new BytesAbiUint152(value)
  }

  static fromOrThrow(value: BytesAbiUint152.From) {
    return new BytesAbiUint152(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint152(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint152(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int152`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint152.nibbles

    const content = cursor.readOrThrow(BytesAbiUint152.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint152(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint152.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint152.bytes)

    return new BytesAbiUint152(content)
  }

}



export namespace RawHexAbiUint152 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint152 {
  readonly #class = RawHexAbiUint152

  static readonly bytes = 19
  static readonly nibbles = 38
  static readonly bits = 152
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint152.Create) {
    return new RawHexAbiUint152(value)
  }

  static fromOrThrow(value: RawHexAbiUint152.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint152(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint152(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint152(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint152(value.slice(2))
    return new RawHexAbiUint152(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int152`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint152.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint152.nibbles)

    return new RawHexAbiUint152(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint152.bytes

    const content = cursor.readOrThrow(RawHexAbiUint152.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint152(value)
  }

}

export { AbiUint160 as Uint160, BytesAbiUint160 as BytesUint160, RawHexAbiUint160 as RawHexUint160 }
  
export type AbiUint160 =
  | RawHexAbiUint160
  | BytesAbiUint160
  

export namespace AbiUint160 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint160.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint160.create(value)
    
    return RawHexAbiUint160.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint160.From) {
    return AbiUint160.create(value)
  }

  export function codegen() {
    return `Abi.Int160`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint160.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint160.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint160 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint160 {
  readonly #class = BytesAbiUint160

  static readonly bytes = 20
  static readonly nibbles = 40
  static readonly bits = 160
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint160.Create) {
    return new BytesAbiUint160(value)
  }

  static fromOrThrow(value: BytesAbiUint160.From) {
    return new BytesAbiUint160(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint160(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint160(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int160`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint160.nibbles

    const content = cursor.readOrThrow(BytesAbiUint160.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint160(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint160.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint160.bytes)

    return new BytesAbiUint160(content)
  }

}



export namespace RawHexAbiUint160 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint160 {
  readonly #class = RawHexAbiUint160

  static readonly bytes = 20
  static readonly nibbles = 40
  static readonly bits = 160
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint160.Create) {
    return new RawHexAbiUint160(value)
  }

  static fromOrThrow(value: RawHexAbiUint160.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint160(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint160(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint160(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint160(value.slice(2))
    return new RawHexAbiUint160(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int160`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint160.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint160.nibbles)

    return new RawHexAbiUint160(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint160.bytes

    const content = cursor.readOrThrow(RawHexAbiUint160.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint160(value)
  }

}

export { AbiUint168 as Uint168, BytesAbiUint168 as BytesUint168, RawHexAbiUint168 as RawHexUint168 }
  
export type AbiUint168 =
  | RawHexAbiUint168
  | BytesAbiUint168
  

export namespace AbiUint168 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint168.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint168.create(value)
    
    return RawHexAbiUint168.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint168.From) {
    return AbiUint168.create(value)
  }

  export function codegen() {
    return `Abi.Int168`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint168.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint168.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint168 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint168 {
  readonly #class = BytesAbiUint168

  static readonly bytes = 21
  static readonly nibbles = 42
  static readonly bits = 168
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint168.Create) {
    return new BytesAbiUint168(value)
  }

  static fromOrThrow(value: BytesAbiUint168.From) {
    return new BytesAbiUint168(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint168(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint168(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int168`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint168.nibbles

    const content = cursor.readOrThrow(BytesAbiUint168.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint168(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint168.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint168.bytes)

    return new BytesAbiUint168(content)
  }

}



export namespace RawHexAbiUint168 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint168 {
  readonly #class = RawHexAbiUint168

  static readonly bytes = 21
  static readonly nibbles = 42
  static readonly bits = 168
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint168.Create) {
    return new RawHexAbiUint168(value)
  }

  static fromOrThrow(value: RawHexAbiUint168.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint168(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint168(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint168(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint168(value.slice(2))
    return new RawHexAbiUint168(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int168`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint168.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint168.nibbles)

    return new RawHexAbiUint168(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint168.bytes

    const content = cursor.readOrThrow(RawHexAbiUint168.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint168(value)
  }

}

export { AbiUint176 as Uint176, BytesAbiUint176 as BytesUint176, RawHexAbiUint176 as RawHexUint176 }
  
export type AbiUint176 =
  | RawHexAbiUint176
  | BytesAbiUint176
  

export namespace AbiUint176 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint176.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint176.create(value)
    
    return RawHexAbiUint176.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint176.From) {
    return AbiUint176.create(value)
  }

  export function codegen() {
    return `Abi.Int176`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint176.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint176.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint176 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint176 {
  readonly #class = BytesAbiUint176

  static readonly bytes = 22
  static readonly nibbles = 44
  static readonly bits = 176
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint176.Create) {
    return new BytesAbiUint176(value)
  }

  static fromOrThrow(value: BytesAbiUint176.From) {
    return new BytesAbiUint176(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint176(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint176(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int176`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint176.nibbles

    const content = cursor.readOrThrow(BytesAbiUint176.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint176(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint176.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint176.bytes)

    return new BytesAbiUint176(content)
  }

}



export namespace RawHexAbiUint176 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint176 {
  readonly #class = RawHexAbiUint176

  static readonly bytes = 22
  static readonly nibbles = 44
  static readonly bits = 176
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint176.Create) {
    return new RawHexAbiUint176(value)
  }

  static fromOrThrow(value: RawHexAbiUint176.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint176(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint176(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint176(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint176(value.slice(2))
    return new RawHexAbiUint176(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int176`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint176.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint176.nibbles)

    return new RawHexAbiUint176(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint176.bytes

    const content = cursor.readOrThrow(RawHexAbiUint176.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint176(value)
  }

}

export { AbiUint184 as Uint184, BytesAbiUint184 as BytesUint184, RawHexAbiUint184 as RawHexUint184 }
  
export type AbiUint184 =
  | RawHexAbiUint184
  | BytesAbiUint184
  

export namespace AbiUint184 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint184.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint184.create(value)
    
    return RawHexAbiUint184.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint184.From) {
    return AbiUint184.create(value)
  }

  export function codegen() {
    return `Abi.Int184`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint184.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint184.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint184 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint184 {
  readonly #class = BytesAbiUint184

  static readonly bytes = 23
  static readonly nibbles = 46
  static readonly bits = 184
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint184.Create) {
    return new BytesAbiUint184(value)
  }

  static fromOrThrow(value: BytesAbiUint184.From) {
    return new BytesAbiUint184(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint184(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint184(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int184`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint184.nibbles

    const content = cursor.readOrThrow(BytesAbiUint184.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint184(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint184.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint184.bytes)

    return new BytesAbiUint184(content)
  }

}



export namespace RawHexAbiUint184 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint184 {
  readonly #class = RawHexAbiUint184

  static readonly bytes = 23
  static readonly nibbles = 46
  static readonly bits = 184
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint184.Create) {
    return new RawHexAbiUint184(value)
  }

  static fromOrThrow(value: RawHexAbiUint184.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint184(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint184(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint184(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint184(value.slice(2))
    return new RawHexAbiUint184(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int184`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint184.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint184.nibbles)

    return new RawHexAbiUint184(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint184.bytes

    const content = cursor.readOrThrow(RawHexAbiUint184.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint184(value)
  }

}

export { AbiUint192 as Uint192, BytesAbiUint192 as BytesUint192, RawHexAbiUint192 as RawHexUint192 }
  
export type AbiUint192 =
  | RawHexAbiUint192
  | BytesAbiUint192
  

export namespace AbiUint192 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint192.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint192.create(value)
    
    return RawHexAbiUint192.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint192.From) {
    return AbiUint192.create(value)
  }

  export function codegen() {
    return `Abi.Int192`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint192.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint192.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint192 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint192 {
  readonly #class = BytesAbiUint192

  static readonly bytes = 24
  static readonly nibbles = 48
  static readonly bits = 192
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint192.Create) {
    return new BytesAbiUint192(value)
  }

  static fromOrThrow(value: BytesAbiUint192.From) {
    return new BytesAbiUint192(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint192(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint192(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int192`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint192.nibbles

    const content = cursor.readOrThrow(BytesAbiUint192.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint192(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint192.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint192.bytes)

    return new BytesAbiUint192(content)
  }

}



export namespace RawHexAbiUint192 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint192 {
  readonly #class = RawHexAbiUint192

  static readonly bytes = 24
  static readonly nibbles = 48
  static readonly bits = 192
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint192.Create) {
    return new RawHexAbiUint192(value)
  }

  static fromOrThrow(value: RawHexAbiUint192.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint192(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint192(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint192(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint192(value.slice(2))
    return new RawHexAbiUint192(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int192`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint192.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint192.nibbles)

    return new RawHexAbiUint192(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint192.bytes

    const content = cursor.readOrThrow(RawHexAbiUint192.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint192(value)
  }

}

export { AbiUint200 as Uint200, BytesAbiUint200 as BytesUint200, RawHexAbiUint200 as RawHexUint200 }
  
export type AbiUint200 =
  | RawHexAbiUint200
  | BytesAbiUint200
  

export namespace AbiUint200 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint200.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint200.create(value)
    
    return RawHexAbiUint200.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint200.From) {
    return AbiUint200.create(value)
  }

  export function codegen() {
    return `Abi.Int200`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint200.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint200.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint200 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint200 {
  readonly #class = BytesAbiUint200

  static readonly bytes = 25
  static readonly nibbles = 50
  static readonly bits = 200
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint200.Create) {
    return new BytesAbiUint200(value)
  }

  static fromOrThrow(value: BytesAbiUint200.From) {
    return new BytesAbiUint200(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint200(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint200(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int200`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint200.nibbles

    const content = cursor.readOrThrow(BytesAbiUint200.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint200(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint200.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint200.bytes)

    return new BytesAbiUint200(content)
  }

}



export namespace RawHexAbiUint200 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint200 {
  readonly #class = RawHexAbiUint200

  static readonly bytes = 25
  static readonly nibbles = 50
  static readonly bits = 200
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint200.Create) {
    return new RawHexAbiUint200(value)
  }

  static fromOrThrow(value: RawHexAbiUint200.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint200(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint200(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint200(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint200(value.slice(2))
    return new RawHexAbiUint200(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int200`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint200.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint200.nibbles)

    return new RawHexAbiUint200(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint200.bytes

    const content = cursor.readOrThrow(RawHexAbiUint200.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint200(value)
  }

}

export { AbiUint208 as Uint208, BytesAbiUint208 as BytesUint208, RawHexAbiUint208 as RawHexUint208 }
  
export type AbiUint208 =
  | RawHexAbiUint208
  | BytesAbiUint208
  

export namespace AbiUint208 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint208.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint208.create(value)
    
    return RawHexAbiUint208.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint208.From) {
    return AbiUint208.create(value)
  }

  export function codegen() {
    return `Abi.Int208`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint208.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint208.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint208 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint208 {
  readonly #class = BytesAbiUint208

  static readonly bytes = 26
  static readonly nibbles = 52
  static readonly bits = 208
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint208.Create) {
    return new BytesAbiUint208(value)
  }

  static fromOrThrow(value: BytesAbiUint208.From) {
    return new BytesAbiUint208(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint208(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint208(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int208`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint208.nibbles

    const content = cursor.readOrThrow(BytesAbiUint208.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint208(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint208.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint208.bytes)

    return new BytesAbiUint208(content)
  }

}



export namespace RawHexAbiUint208 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint208 {
  readonly #class = RawHexAbiUint208

  static readonly bytes = 26
  static readonly nibbles = 52
  static readonly bits = 208
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint208.Create) {
    return new RawHexAbiUint208(value)
  }

  static fromOrThrow(value: RawHexAbiUint208.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint208(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint208(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint208(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint208(value.slice(2))
    return new RawHexAbiUint208(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int208`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint208.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint208.nibbles)

    return new RawHexAbiUint208(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint208.bytes

    const content = cursor.readOrThrow(RawHexAbiUint208.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint208(value)
  }

}

export { AbiUint216 as Uint216, BytesAbiUint216 as BytesUint216, RawHexAbiUint216 as RawHexUint216 }
  
export type AbiUint216 =
  | RawHexAbiUint216
  | BytesAbiUint216
  

export namespace AbiUint216 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint216.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint216.create(value)
    
    return RawHexAbiUint216.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint216.From) {
    return AbiUint216.create(value)
  }

  export function codegen() {
    return `Abi.Int216`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint216.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint216.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint216 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint216 {
  readonly #class = BytesAbiUint216

  static readonly bytes = 27
  static readonly nibbles = 54
  static readonly bits = 216
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint216.Create) {
    return new BytesAbiUint216(value)
  }

  static fromOrThrow(value: BytesAbiUint216.From) {
    return new BytesAbiUint216(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint216(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint216(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int216`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint216.nibbles

    const content = cursor.readOrThrow(BytesAbiUint216.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint216(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint216.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint216.bytes)

    return new BytesAbiUint216(content)
  }

}



export namespace RawHexAbiUint216 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint216 {
  readonly #class = RawHexAbiUint216

  static readonly bytes = 27
  static readonly nibbles = 54
  static readonly bits = 216
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint216.Create) {
    return new RawHexAbiUint216(value)
  }

  static fromOrThrow(value: RawHexAbiUint216.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint216(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint216(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint216(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint216(value.slice(2))
    return new RawHexAbiUint216(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int216`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint216.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint216.nibbles)

    return new RawHexAbiUint216(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint216.bytes

    const content = cursor.readOrThrow(RawHexAbiUint216.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint216(value)
  }

}

export { AbiUint224 as Uint224, BytesAbiUint224 as BytesUint224, RawHexAbiUint224 as RawHexUint224 }
  
export type AbiUint224 =
  | RawHexAbiUint224
  | BytesAbiUint224
  

export namespace AbiUint224 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint224.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint224.create(value)
    
    return RawHexAbiUint224.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint224.From) {
    return AbiUint224.create(value)
  }

  export function codegen() {
    return `Abi.Int224`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint224.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint224.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint224 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint224 {
  readonly #class = BytesAbiUint224

  static readonly bytes = 28
  static readonly nibbles = 56
  static readonly bits = 224
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint224.Create) {
    return new BytesAbiUint224(value)
  }

  static fromOrThrow(value: BytesAbiUint224.From) {
    return new BytesAbiUint224(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint224(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint224(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int224`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint224.nibbles

    const content = cursor.readOrThrow(BytesAbiUint224.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint224(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint224.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint224.bytes)

    return new BytesAbiUint224(content)
  }

}



export namespace RawHexAbiUint224 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint224 {
  readonly #class = RawHexAbiUint224

  static readonly bytes = 28
  static readonly nibbles = 56
  static readonly bits = 224
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint224.Create) {
    return new RawHexAbiUint224(value)
  }

  static fromOrThrow(value: RawHexAbiUint224.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint224(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint224(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint224(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint224(value.slice(2))
    return new RawHexAbiUint224(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int224`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint224.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint224.nibbles)

    return new RawHexAbiUint224(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint224.bytes

    const content = cursor.readOrThrow(RawHexAbiUint224.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint224(value)
  }

}

export { AbiUint232 as Uint232, BytesAbiUint232 as BytesUint232, RawHexAbiUint232 as RawHexUint232 }
  
export type AbiUint232 =
  | RawHexAbiUint232
  | BytesAbiUint232
  

export namespace AbiUint232 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint232.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint232.create(value)
    
    return RawHexAbiUint232.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint232.From) {
    return AbiUint232.create(value)
  }

  export function codegen() {
    return `Abi.Int232`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint232.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint232.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint232 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint232 {
  readonly #class = BytesAbiUint232

  static readonly bytes = 29
  static readonly nibbles = 58
  static readonly bits = 232
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint232.Create) {
    return new BytesAbiUint232(value)
  }

  static fromOrThrow(value: BytesAbiUint232.From) {
    return new BytesAbiUint232(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint232(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint232(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int232`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint232.nibbles

    const content = cursor.readOrThrow(BytesAbiUint232.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint232(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint232.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint232.bytes)

    return new BytesAbiUint232(content)
  }

}



export namespace RawHexAbiUint232 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint232 {
  readonly #class = RawHexAbiUint232

  static readonly bytes = 29
  static readonly nibbles = 58
  static readonly bits = 232
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint232.Create) {
    return new RawHexAbiUint232(value)
  }

  static fromOrThrow(value: RawHexAbiUint232.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint232(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint232(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint232(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint232(value.slice(2))
    return new RawHexAbiUint232(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int232`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint232.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint232.nibbles)

    return new RawHexAbiUint232(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint232.bytes

    const content = cursor.readOrThrow(RawHexAbiUint232.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint232(value)
  }

}

export { AbiUint240 as Uint240, BytesAbiUint240 as BytesUint240, RawHexAbiUint240 as RawHexUint240 }
  
export type AbiUint240 =
  | RawHexAbiUint240
  | BytesAbiUint240
  

export namespace AbiUint240 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint240.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint240.create(value)
    
    return RawHexAbiUint240.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint240.From) {
    return AbiUint240.create(value)
  }

  export function codegen() {
    return `Abi.Int240`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint240.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint240.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint240 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint240 {
  readonly #class = BytesAbiUint240

  static readonly bytes = 30
  static readonly nibbles = 60
  static readonly bits = 240
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint240.Create) {
    return new BytesAbiUint240(value)
  }

  static fromOrThrow(value: BytesAbiUint240.From) {
    return new BytesAbiUint240(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint240(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint240(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int240`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint240.nibbles

    const content = cursor.readOrThrow(BytesAbiUint240.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint240(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint240.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint240.bytes)

    return new BytesAbiUint240(content)
  }

}



export namespace RawHexAbiUint240 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint240 {
  readonly #class = RawHexAbiUint240

  static readonly bytes = 30
  static readonly nibbles = 60
  static readonly bits = 240
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint240.Create) {
    return new RawHexAbiUint240(value)
  }

  static fromOrThrow(value: RawHexAbiUint240.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint240(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint240(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint240(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint240(value.slice(2))
    return new RawHexAbiUint240(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int240`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint240.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint240.nibbles)

    return new RawHexAbiUint240(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint240.bytes

    const content = cursor.readOrThrow(RawHexAbiUint240.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint240(value)
  }

}

export { AbiUint248 as Uint248, BytesAbiUint248 as BytesUint248, RawHexAbiUint248 as RawHexUint248 }
  
export type AbiUint248 =
  | RawHexAbiUint248
  | BytesAbiUint248
  

export namespace AbiUint248 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint248.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint248.create(value)
    
    return RawHexAbiUint248.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint248.From) {
    return AbiUint248.create(value)
  }

  export function codegen() {
    return `Abi.Int248`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint248.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint248.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint248 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint248 {
  readonly #class = BytesAbiUint248

  static readonly bytes = 31
  static readonly nibbles = 62
  static readonly bits = 248
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint248.Create) {
    return new BytesAbiUint248(value)
  }

  static fromOrThrow(value: BytesAbiUint248.From) {
    return new BytesAbiUint248(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint248(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint248(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int248`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint248.nibbles

    const content = cursor.readOrThrow(BytesAbiUint248.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint248(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint248.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint248.bytes)

    return new BytesAbiUint248(content)
  }

}



export namespace RawHexAbiUint248 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint248 {
  readonly #class = RawHexAbiUint248

  static readonly bytes = 31
  static readonly nibbles = 62
  static readonly bits = 248
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint248.Create) {
    return new RawHexAbiUint248(value)
  }

  static fromOrThrow(value: RawHexAbiUint248.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint248(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint248(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint248(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint248(value.slice(2))
    return new RawHexAbiUint248(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int248`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint248.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint248.nibbles)

    return new RawHexAbiUint248(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint248.bytes

    const content = cursor.readOrThrow(RawHexAbiUint248.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint248(value)
  }

}

export { AbiUint256 as Uint256, BytesAbiUint256 as BytesUint256, RawHexAbiUint256 as RawHexUint256 }
  
export type AbiUint256 =
  | RawHexAbiUint256
  | BytesAbiUint256
  

export namespace AbiUint256 {
  export const dynamic = false
  export const size = 32

  export type Create =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export type From = 
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

  export function create(value: AbiUint256.Create) {
    if (value instanceof Uint8Array)
      return BytesAbiUint256.create(value)
    
    return RawHexAbiUint256.fromOrThrow(value)
  }

  export function fromOrThrow(value: AbiUint256.From) {
    return AbiUint256.create(value)
  }

  export function codegen() {
    return `Abi.Int256`
  }

  export function decodeOrThrow(cursor: TextCursor) {
    return RawHexAbiUint256.decodeOrThrow(cursor)
  }

  export function readOrThrow(cursor: Cursor) {
    return BytesAbiUint256.readOrThrow(cursor)
  }

}

export namespace BytesAbiUint256 {

  export type Create = Uint8Array

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class BytesAbiUint256 {
  readonly #class = BytesAbiUint256

  static readonly bytes = 32
  static readonly nibbles = 64
  static readonly bits = 256
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  private constructor(
    readonly value: Uint8Array
  ) { }

  static create(value: BytesAbiUint256.Create) {
    return new BytesAbiUint256(value)
  }

  static fromOrThrow(value: BytesAbiUint256.From) {
    return new BytesAbiUint256(BytesInteger.fromOrThrow(value))
  }

  intoOrThrow(): bigint {
    return new RawHexAbiUint256(this.encodePackedOrThrow()).intoOrThrow()
  }

  toJSON(): string {
    return new RawHexAbiUint256(this.encodePackedOrThrow()).toJSON()
  }

  static codegen() {
    return `Abi.Int256`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return Base16.get().encodeOrThrow(this.value).padStart(64, "0")
  }

  encodePackedOrThrow() {
    return Base16.get().encodeOrThrow(this.value)
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - BytesAbiUint256.nibbles

    const content = cursor.readOrThrow(BytesAbiUint256.nibbles)
    const value = Base16.get().padStartAndDecodeOrThrow(content).copyAndDispose()
    
    return new BytesAbiUint256(value)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    cursor.fillOrThrow(0, 32 - this.value.length)
    cursor.writeOrThrow(this.value)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - BytesAbiUint256.bytes

    const content = cursor.readAndCopyOrThrow(BytesAbiUint256.bytes)

    return new BytesAbiUint256(content)
  }

}



export namespace RawHexAbiUint256 {

  export type Create = string

  export type From =
    | string 
    | number 
    | bigint 
    | Uint8Array
    | `0x${string}`

}

export class RawHexAbiUint256 {
  readonly #class = RawHexAbiUint256

  static readonly bytes = 32
  static readonly nibbles = 64
  static readonly bits = 256
  static readonly dynamic = false
  static readonly size = 32

  readonly bytes = this.#class.bytes
  readonly nibbles = this.#class.nibbles
  readonly bits = this.#class.bits
  readonly dynamic = this.#class.dynamic
  readonly size = this.#class.size

  constructor(
    readonly value: RawHexString
  ) { }

  static create(value: RawHexAbiUint256.Create) {
    return new RawHexAbiUint256(value)
  }

  static fromOrThrow(value: RawHexAbiUint256.From) {
    if (value instanceof Uint8Array)
      return new RawHexAbiUint256(Base16.get().encodeOrThrow(value))
    if (typeof value === "bigint")
      return new RawHexAbiUint256(value.toString(16))
    if (typeof value === "number")
      return new RawHexAbiUint256(value.toString(16))
    if (value.startsWith("0x"))
      return new RawHexAbiUint256(value.slice(2))
    return new RawHexAbiUint256(BigInts.decodeDecimal(value).toString(16))
  }

  intoOrThrow(): bigint {
    return this.value.length ? BigInt("0x" + this.value) : 0n
  }

  toJSON(): string {
    return this.intoOrThrow().toString()
  }

  static codegen() {
    return `Abi.Int256`
  }

  get class() {
    return this.#class
  }

  encodeOrThrow() {
    return this.value.padStart(64, "0")
  }

  encodePackedOrThrow() {
    return this.value
  }

  static decodeOrThrow(cursor: TextCursor) {
    cursor.offset += 64 - RawHexAbiUint256.nibbles

    const content = cursor.readOrThrow(RawHexAbiUint256.nibbles)

    return new RawHexAbiUint256(content)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    using slice = Base16.get().padStartAndDecodeOrThrow(this.value)

    cursor.fillOrThrow(0, 32 - slice.bytes.length)
    cursor.writeOrThrow(slice.bytes)
  }

  static readOrThrow(cursor: Cursor) {
    cursor.offset += 32 - RawHexAbiUint256.bytes

    const content = cursor.readOrThrow(RawHexAbiUint256.bytes)
    const value = Base16.get().encodeOrThrow(content)

    return new RawHexAbiUint256(value)
  }

}

export type UintByName = {
    uint8: typeof AbiUint8,
    uint16: typeof AbiUint16,
    uint24: typeof AbiUint24,
    uint32: typeof AbiUint32,
    uint40: typeof AbiUint40,
    uint48: typeof AbiUint48,
    uint56: typeof AbiUint56,
    uint64: typeof AbiUint64,
    uint72: typeof AbiUint72,
    uint80: typeof AbiUint80,
    uint88: typeof AbiUint88,
    uint96: typeof AbiUint96,
    uint104: typeof AbiUint104,
    uint112: typeof AbiUint112,
    uint120: typeof AbiUint120,
    uint128: typeof AbiUint128,
    uint136: typeof AbiUint136,
    uint144: typeof AbiUint144,
    uint152: typeof AbiUint152,
    uint160: typeof AbiUint160,
    uint168: typeof AbiUint168,
    uint176: typeof AbiUint176,
    uint184: typeof AbiUint184,
    uint192: typeof AbiUint192,
    uint200: typeof AbiUint200,
    uint208: typeof AbiUint208,
    uint216: typeof AbiUint216,
    uint224: typeof AbiUint224,
    uint232: typeof AbiUint232,
    uint240: typeof AbiUint240,
    uint248: typeof AbiUint248,
    uint256: typeof AbiUint256,
  }
  
  export const uintByName: UintByName = {
    uint8: AbiUint8,
    uint16: AbiUint16,
    uint24: AbiUint24,
    uint32: AbiUint32,
    uint40: AbiUint40,
    uint48: AbiUint48,
    uint56: AbiUint56,
    uint64: AbiUint64,
    uint72: AbiUint72,
    uint80: AbiUint80,
    uint88: AbiUint88,
    uint96: AbiUint96,
    uint104: AbiUint104,
    uint112: AbiUint112,
    uint120: AbiUint120,
    uint128: AbiUint128,
    uint136: AbiUint136,
    uint144: AbiUint144,
    uint152: AbiUint152,
    uint160: AbiUint160,
    uint168: AbiUint168,
    uint176: AbiUint176,
    uint184: AbiUint184,
    uint192: AbiUint192,
    uint200: AbiUint200,
    uint208: AbiUint208,
    uint216: AbiUint216,
    uint224: AbiUint224,
    uint232: AbiUint232,
    uint240: AbiUint240,
    uint248: AbiUint248,
    uint256: AbiUint256,
  }