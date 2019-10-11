export interface HashFunction {
  (value: string): {
    toString(): string;
  };
}
/**
 * An algorithm for generating global unique identifiers.
 *
 * 生成全局唯一标识符的算法。
 *
 * @param hashhex
 * > Customize the hash function and return a object with the `toString` method.
 * > The result of the `toString` is a hexadecimal string.
 *
 * > 自定义哈希函数，返回包含 `toString` 方法的对象，`toString` 返回的结果为十六进制字符串。
 *
 * > e.g., `CryptoJS.MD5`.
 *
 * @param messages
 * > Additional Merkle Tree data blocks.
 *
 * > 额外的梅克树数据块。
 *
 * > default: `[Math.random().toString(16).slice(2, 10)]`
 *
 * @param millits
 * > Specifies a timestamp in **milliseconds**.
 *
 * > 指定时间戳，单位为毫秒。
 *
 * > default: `Date.now()`
 */
export declare function MerkleSnowflake(
  hashhex: HashFunction,
  messages?: string[],
  millits?: number,
): string;
/**
 * **SHORT EDITION**: Return a 52 bit number that is secure in js.
 *
 * **简化版**：返回一个 JavaScript 中安全的 52 位数值。
 *
 * An algorithm for generating global unique identifiers.
 *
 * 生成全局唯一标识符的算法。
 *
 * @param hashhex
 * > Customize the hash function and return a object with the `toString` method.
 * > The result of the `toString` is a hexadecimal string.
 *
 * > 自定义哈希函数，返回包含 `toString` 方法的对象，`toString` 返回的结果为十六进制字符串。
 *
 * > e.g., `CryptoJS.MD5`.
 *
 * @param messages
 * > Additional Merkle Tree data blocks.
 *
 * > 额外的梅克树数据块。
 *
 * > default: `[Math.random().toString(16).slice(2, 10)]`
 *
 * @param millits
 * > Specifies a timestamp in **milliseconds**.
 *
 * > 指定时间戳，单位为毫秒。
 *
 * > default: `Date.now()`
 */
export declare function MerkleShortSnowflake(
  hashhex: HashFunction,
  messages?: string[],
  millits?: number,
): number;
export default MerkleSnowflake;
