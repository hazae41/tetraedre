import { Readable, Writable } from "@hazae41/binary";
import { Bytes } from "@hazae41/bytes";
import { assert, test } from "@hazae41/phobos";
import { Uint } from "./uint.js";

test("uint32", async ({ message, test }) => {
  const value = 123n
  const uint = new (Uint(32))(value)
  const bytes = Writable.tryWriteToBytes(uint).unwrap()

  console.log(message, value)
  console.log(message, Bytes.toHex(bytes))

  const uint2 = Readable.tryReadFromBytes(Uint(32), bytes).unwrap()
  const value2 = uint2.value

  console.log(message, value2)

  assert(value === value2)
})

test("uint256", async ({ message, test }) => {
  const value = Bytes.toBigInt(Bytes.random(32))
  const uint = new (Uint(256))(value)
  const bytes = Writable.tryWriteToBytes(uint).unwrap()

  console.log(message, value)
  console.log(message, Bytes.toHex(bytes))

  const uint2 = Readable.tryReadFromBytes(Uint(256), bytes).unwrap()
  const value2 = uint2.value

  console.log(message, value2)

  assert(value === value2)
})