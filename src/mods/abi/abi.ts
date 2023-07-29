import { Readable, Writable } from "@hazae41/binary";
import { Ok, Result } from "@hazae41/result";
import { Tuple } from "./tuple/tuple.js";

export interface Instance extends Writable<Error, Error> {
  readonly class: Factory
  readonly dynamic?: boolean
}

/**
 * Shorthand for creating a new writable and writing some bytes
 * @param instances 
 * @returns 
 */
export function tryEncode(...instances: Instance[]): Result<Uint8Array, Error> {
  return Result.unthrowSync(t => {
    const encoder = Tuple([]).tryNew(instances).throw(t)
    const bytes = Writable.tryWriteToBytes(encoder).throw(t)

    return new Ok(bytes)
  })
}

export interface Factory<Output extends Instance = Instance> extends Readable<Output, Error> {
  readonly dynamic?: boolean
}

/**
 * Shorthand for creating a new readable and reading some bytes
 * @param bytes 
 * @param types 
 * @returns 
 */
export function tryDecode(bytes: Uint8Array, ...types: Factory[]): Result<Instance[], Error> {
  return Readable.tryReadFromBytes(Tuple(types), bytes).mapSync(x => x.inner)
}