# Merkle Snowflake

[![NPM version](https://img.shields.io/npm/v/merkle-snowflake.svg?style=flat)](https://npmjs.org/package/merkle-snowflake)
[![NPM downloads](http://img.shields.io/npm/dm/merkle-snowflake.svg?style=flat)](https://npmjs.org/package/merkle-snowflake)
[![Build Status](https://img.shields.io/travis/alitajs/merkle-snowflake.svg?style=flat)](https://travis-ci.org/alitajs/merkle-snowflake)
[![License](https://img.shields.io/npm/l/merkle-snowflake.svg)](https://npmjs.org/package/merkle-snowflake)

An algorithm for generating global unique identifiers.

## Install

```bash
npm install merkle-snowflake
# or
yarn add merkle-snowflake
```

## Usage

```js
import CryptoJS from 'crypto-js';
import MerkleSnowflake, { MerkleShortSnowflake } from 'merkle-snowflake';
// import { MerkleSnowflake, MerkleShortSnowflake } from 'merkle-snowflake';
// const { MerkleSnowflake, MerkleShortSnowflake } = require('merkle-snowflake');

MerkleSnowflake(CryptoJS.MD5);
// '5da052257444383'
MerkleShortSnowflake(CryptoJS.MD5);
// 2457686126313367
```
