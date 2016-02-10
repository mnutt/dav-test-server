# dav-test-server

WebDAV server for testing

## Usage

1. Go to [https://github.com/mnutt/dav-test-server/releases](https://github.com/mnutt/dav-test-server/releases) and download the Sandstorm spk.
1. Upload it to your Sandstorm server.
1. Generate a webkey in the form `http://api.local.sandstorm.io:6080/#123456789abcde`
1. Run: `curl -XPROPFIND -H "Authorization: bearer 123456789abcde" "http://api.local.sandstorm.io:6080/"`

## Acknowledgements

This server configures and implements jsDAV. (https://github.com/mikedeboer/jsDAV) 

## License

See LICENSE file.