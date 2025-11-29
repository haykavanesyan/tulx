/**
 * Generates a unique ID.
 *
 * @param prefix - The value to prefix the ID with.
 * @returns Returns the unique ID.
 *
 * @example
 * ```ts
 * uniqueId('contact_'); // 'contact_1'
 * uniqueId(); // '2'
 * ```
 */
let idCounter = 0;

export function uniqueId(prefix: string = ''): string {
  idCounter++;
  return prefix + idCounter;
}
