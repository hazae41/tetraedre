import { Base16 } from "@hazae41/base16";
import { Bytes } from "@hazae41/bytes";
import { Cursor } from "@hazae41/cursor";
import { TextCursor } from "libs/cursor/cursor.js";
import { Uint32 } from "../uint/uint.js";

export namespace DynamicBytes {
  export type From<N extends number = number> = Bytes<N>
}

export class DynamicBytes<N extends number = number> {
  readonly #class = DynamicBytes

  constructor(
    readonly value: DynamicBytes.From<N>,
    readonly size: number
  ) { }

  static new<N extends number>(value: DynamicBytes.From<N>) {
    return new DynamicBytes(value, 32 + (Math.ceil(value.length / 32) * 32))
  }

  static from<N extends number>(value: DynamicBytes.From<N>) {
    return new DynamicBytes(value, 32 + (Math.ceil(value.length / 32) * 32))
  }

  into() {
    return this.value
  }

  static codegen() {
    return `Cubane.Abi.DynamicBytes`
  }

  get class() {
    return this.#class
  }

  static get dynamic() {
    return true as const
  }

  get dynamic() {
    return this.#class.dynamic
  }

  encodeOrThrow() {
    const length = this.value.length.toString(16).padStart(64, "0")
    const value = Base16.get().encodeOrThrow(this.value).padEnd(this.size, "0")

    return length + value
  }

  encodePackedOrThrow() {
    const length = this.value.length.toString(16)
    const value = Base16.get().encodeOrThrow(this.value)

    return length + value
  }

  static decodeOrThrow(cursor: TextCursor) {
    const length = Uint32.decodeOrThrow(cursor).value * 2
    const value = Base16.get().padEndAndDecodeOrThrow(cursor.readOrThrow(length)).copyAndDispose()
    const size = 64 + (Math.ceil(length / 64) * 64)

    cursor.offset += size - 64 - length

    return new DynamicBytes(value, size / 2)
  }

  sizeOrThrow() {
    return this.size
  }

  writeOrThrow(cursor: Cursor) {
    const length = Uint32.new(this.value.length)

    length.writeOrThrow(cursor)
    cursor.writeOrThrow(this.value)
    cursor.fillOrThrow(0, this.size - 32 - this.value.length)
  }

  static readOrThrow(cursor: Cursor) {
    const length = Uint32.readOrThrow(cursor)
    const bytes = cursor.readOrThrow(length.value)
    const size = 32 + (Math.ceil(bytes.length / 32) * 32)

    cursor.offset += size - 32 - bytes.length

    return new DynamicBytes(bytes, size)
  }

}