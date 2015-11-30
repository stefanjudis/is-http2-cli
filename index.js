#!/usr/bin/env node

'use strict';

const meow = require( 'meow' );
const isH2 = require( 'is-http2' );
const chalk = require( 'chalk' );

const cli = meow( `
  Usage
    $ is-http2 <host>

  Options
    -s, --include-spdy  Consider SPDY protocol as HTTP/2 supporting

  Examples
    $ is-http twitter.com
    $ is-http facebook.com -s
`, {
  alias : {
    s : 'include-spdy',
    h : 'help'
  }
} );

var host = cli.input[ 0 ];

if ( host ) {
  isH2( host, cli.flags )
    .then( function( result ) {
      if ( result.isHttp2 ) {
        console.log( `${ chalk.green( '✓' ) } HTTP/2 supported by ${ host }` );
      } else {
        console.log( `${ chalk.red( '×' ) } HTTP/2 not supported by ${ host }` );
      }

      if ( result.supportedProtocols ) {
        console.log(
          `Supported protocols: ${ result.supportedProtocols.join( ' ' ) }`
        );
      }
    } )
    .catch( function( error ) {
      console.error( chalk.red( error.message || error ) );

      process.exit( 1 );
    } );
} else {
  console.error(
    chalk.red( 'Please enter host to check for HTTP/2 support' )
  );

  process.exit( 1 );
}
