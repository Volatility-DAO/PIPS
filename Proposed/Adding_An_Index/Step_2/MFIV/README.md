## Overview

This nodejs project is intended to be used to compute MFIV (model-free implied volatility) from [deribit](deribit.com) options data provided by [tardis-dev](https://github.com/tardis-dev/tardis-node) and then written to [IPFS](https://ipfs.io/) by [volatility.com](https://volatility.com). To learn more about the MFIV data written to IPFS see below.

## Getting Started

```
$ cd mfiv_implementation
$ npm install
$ npm run build
$ npm test
$ npm run example
```

In the terminal you should see the following:

```
🚀 check eth-mfiv-14d-2022-01-27T01:00:00.000Z
✅ File valid.
```

## IPFS JSON Schema

See [mfiv schema](./schemas/mfivexample.schema.json)

## Getting IPFS Data
```
(********************************************************)
(*             IMPORTANT NOTE ON IPFS DATA              *)
(*                                                      *)
(*    Historical IPFS data has not yet been created.    *)
(*    Data on IPFS starts on 2022-01-29T01:45:00Z.      *)
(*    Files are saved every 5 mins.                     *)
(*    This message will be updated when historical      *)
(*    data is added.                                    *)
(*                                                      *)
(********************************************************)
```
There are two ways you can easily access the IPFS data:

1. Programatically Create IPFS JSON file.
2. Access the IPFS data via a URL and download the data as a JSON.

Currently, IPFS is being written every 5 minutes on the hour so you MUST enter a time in 5-minute increments UTC (e.g. "07:00", "07:05", "07:10", etc.). Time is in 24-hour format (e.g. 3pm = 15:00:00, 9:30pm = 21:30:00). Otherwise, you will get a file not found error, or you will generate a URL that gives a 404.

**Programatically Create IPFS JSON file**

This bash script has a dependency of `jq` for pretty printing but feel free to modify on your local machine if it's not needed.

```
#
# Usage: fetch_fleek 2022-01-27 01:00:00
# Timestamps are always in UTC
# Requires 'jq' to be installed -- "brew install jq" (https://stedolan.github.io/jq/download/)
#
fetch_fleek() {
    local timestamp="${1}T${2}Z"
    set -o pipefail # Set pipefail option so if curl fails the script will stop
    if ! curl --silent -L "https://storageapi.fleek.co/volatilitycom-bucket/indices/methodology=mfiv/interval=14d/currency=ETH/at=$timestamp/evidence.json" | jq .; then
        echo "Command exited with code $?"
    fi
    set +o pipefail
}
```

Here's an example of fetching data and writing it to a file:

```
$ fetch_fleek 2022-01-27 01:00:00 2>&1 | tee evidence.json 
```

**Programatically Create URL**

The following script will make a header request to `fleek` to get the IPFS hash returned in the `etag` header value and won't actually download anything. Instead, it constructs the URL for IPFS.

```
#
# Requires 'jq' to be installed -- "brew install jq" (https://stedolan.github.io/jq/download/)
#
fetch_ipfs() {
    local timestamp="${1}T${2}Z"
    set -o pipefail # Set pipefail option so if curl fails the script will stop
    if ! curl -L -sI "https://storageapi.fleek.co/volatilitycom-bucket/indices/methodology=mfiv/interval=14d/currency=ETH/at=$timestamp/evidence.json" | tr -d '\r' | awk 'BEGIN {FS=": "}/^etag/{printf $2}' | tr -d '"' | awk '{printf "https://ipfs.io/ipfs/%s\n", $1}'; then
        echo "Command exited with code $?"
    fi
    set +o pipefail
}
```

Here's an example of fetching the URL:

```
$ fetch_ipfs 2022-01-27 01:00:00
```

Here's an example output URL. Notice it uses the IPFShash.

```
https://ipfs.io/ipfs/bafybeicwobtev44ivytnii24myc6fhxgpcimxnryneqlghbg4f2vcf6ugy
```

Download the data and name evidence.json and add into the mfiv_implementation folder.

**Manually Create URL**

If you have the `<IPFShash>` you can simply create the url with the following:

`http://ipfs.fleek.co/ipfs/<IPFShash>`

Or you can download the data by:

`$ curl https://ipfs.io/ipfs/<IPFShash>`

If you do not have the `<IPFShash>` you can create the URL with the following URL by changing `$timestamp`:

```
https://storageapi.fleek.co/volatilitycom-bucket/indices/methodology=mfiv/interval=14d/currency=ETH/at=$timestamp/evidence.json
```

Where

- `$timestamp` - is written as the UTC ```DATE + "T" + TIME + "Z"```  to the second (MS are not included). 

For example you would write 2022-01-27 01:00:00 UTC as:

```2022-01-27T01:00:00Z```

Which would give the following URL:

```
https://storageapi.fleek.co/volatilitycom-bucket//indices/methodology=mfiv/interval=14d/currency=ETH/at=2022-01-27T01:00:00Z/evidence.json
```

Download the data and add into the mfiv_implementation folder.

## Verifying an Index

The open-source code in this repo will ingest the ipfs.json input data and verify that the outputs are the same.

1. Place the `ipfs.json` file in this directory. If you downloaded using a URL you can rename the hash or timestamp as ipfs.
2. `./bin/volatility.mjs -f ipfs.json`


In the terminal you should see the following:

```
🚀 check example/ipfs.json
✅ File valid.
```

3. `cat ipfs.json | jq '. | {methodology: .result.methodology, currency: .result.currency, estimatedFor: .result.estimatedFor, dVol: .result.dVol, invdVol: .result.invdVol, value: .result.value}'`

In terminal you will now see the following:
```
{
  "methodology": "mfiv",
  "currency": "ETH",
  "estimatedFor": "2022-01-27T01:00:00.011Z",
  "dVol": 98.74835628391783,
  "invdVol": 101.26750840538902,
  "value": 98.74835628391783
}
```


## Contributing

This code is currently being developed with node v16.13.1 using nvm.

```
$ git clone https://github.com/VolatilityGroup/node-volatility-mfiv.git
$ cd node-volatility-mfiv
$ npm install
$ npm run build
$ npm test
$ npm run example
```

## Links

- [deribit options specification](https://legacy.deribit.com/pages/docs/options)
- [Deribit Derivatives Introduction Policy - 25 June 2021](https://legacy.deribit.com/pages/information/Introduction_Policy#:~:text=A%20new%20future%20with%20a,trading%20at%20the%20same%20time.&text=2%2C%203%20monthly-,3%2C%206%2C%209%20and%2012%20months%20quarterly%20of%20the%20March,June%2C%20September%2C%20December%20cycle)
- [JSON schema website](https://json-schema.org/)
- [tardis-dev nodejs client repo](https://github.com/tardis-dev/tardis-node)
