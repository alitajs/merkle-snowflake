'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function merkle(values, hash) {
  while (values.length > 1) {
    if (values.length % 2) values = values.concat(values[values.length - 1]);
    values = values
      .map(function(_, i) {
        return i & 1 ? null : '' + values[i] + values[i + 1];
      })
      .filter(function(value) {
        return value !== null;
      })
      .map(function(chunk) {
        return hash(chunk).toString();
      });
  }
  return values[0];
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
function MerkleSnowflake(hashhex, messages, millits) {
  if (messages === void 0) {
    messages = [
      Math.random()
        .toString(16)
        .slice(2, 10),
    ];
  }
  if (millits === void 0) {
    millits = Date.now();
  }
  messages = ['' + millits].concat(messages);
  var prefix = Math.floor(millits / 16000).toString(16);
  var roothash = parseInt(merkle(messages, hashhex).slice(0, 7), 16);
  var suffix = (roothash + (Math.floor(millits / 1000) % 16) * 268435456).toString(16);
  while (suffix.length < 8) suffix = '0' + suffix;
  return '' + prefix + suffix;
}
exports.MerkleSnowflake = MerkleSnowflake;
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
function MerkleShortSnowflake(hashhex, messages, millits) {
  if (messages === void 0) {
    messages = [
      Math.random()
        .toString(16)
        .slice(2, 10),
    ];
  }
  if (millits === void 0) {
    millits = Date.now();
  }
  messages = ['' + millits].concat(messages);
  var prefix = Math.floor(millits / 1000) * 131072;
  var suffix = parseInt(merkle(messages, hashhex).slice(0, 7), 16) & 131071;
  return 2251799813685248 + prefix + suffix;
}
exports.MerkleShortSnowflake = MerkleShortSnowflake;
exports.default = MerkleSnowflake;
