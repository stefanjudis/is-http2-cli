import childProcess from 'child_process';
import test from 'ava';

test.cb( 'is-http2 - no url provided', t => {
  childProcess.execFile(
    './index.js',
    [],
    { cwd : __dirname },
    function( error, stdout, stderr ) {
      t.same( error.code, 1 );
      t.same( stderr, 'Please enter host to check for HTTP/2 support\n' );
      t.end();
    }
  );
} );

test.cb( 'is-http2 - yeah it is', t => {
  childProcess.execFile(
    './index.js',
    [ 'twitter.com' ],
    { cwd : __dirname },
    function( error, stdout ) {
      t.same( error, null );
      t.same( stdout.split ( '\n' )[ 0 ], '✓ HTTP/2 supported by twitter.com' );
      t.end();
    }
  );
} );

test.cb( 'is-http2 - nope', t => {
  childProcess.execFile(
    './index.js',
    [ 'github.com' ],
    { cwd : __dirname },
    function( error, stdout ) {
      t.same( error, null );
      t.same( stdout.split ( '\n' )[ 0 ], '× HTTP/2 not supported by github.com' );
      t.end();
    }
  );
} );

test.cb( 'is-http2 - host does not exist', t => {
  childProcess.execFile(
    './index.js',
    [ 'does-not-exists-123456789.com' ],
    { cwd : __dirname },
    function( error, stdout, stderr ) {
      t.same( error.code, 1 );
      t.same( stderr, 'Connection to host `does-not-exists-123456789.com` failed.\n' );
      t.end();
    }
  );
} );
