[![Build Status](http://img.shields.io/travis/stefanjudis/is-http2-cli.svg?style=flat)](https://travis-ci.org/stefanjudis/is-http2-cli) [![npm version](http://img.shields.io/npm/v/is-http2-cli.svg?style=flat)](https://www.npmjs.org/package/is-http2-cli) [![npm downloads](http://img.shields.io/npm/dm/is-http2-cli.svg?style=flat)](https://www.npmjs.org/package/is-http2-cli) [![Coverage Status](http://img.shields.io/coveralls/stefanjudis/is-http2-cli.svg?style=flat)](https://coveralls.io/r/stefanjudis/is-http2-cli?branch=master) [![Uses greenkeeper.io](https://img.shields.io/badge/Uses-greenkeeper.io-green.svg)](http://greenkeeper.io/)

# is-http2-cli
> Find out which hosts already support HTTP/2

![Screenshot](./screenshot.png)

This is the CLI version of [is-http2](https://github.com/stefanjudis/is-http2).

## Install

```
npm install -g is-http2-cli
```

## Basic usage

```
Usage
  $ is-http2 <host>

Options
  -s, --include-spdy  Consider SPDY protocol as HTTP/2 supporting

Examples
  $ is-http2 twitter.com
  $ is-http2 facebook.com -s
```

***************

#### I want to thank all these [people](./THANKS.md) for their great work!!!
