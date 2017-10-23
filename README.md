# CopyCap

Synchronize files between repositories. This tool:
- creates a web server,
- listens to request,
- parses github webhooks,
- creates pull request to target repostitory with changes from source repository

## Requirements

- node.js > 7.10

## Installation

Copy `config.json.tpl` as `config.json` and update config:

- token - Github account's token you want to use for synchronization
- userAgent - will be used in requests to Github API
- syncAccountName - name of the account used to synchronization
- syncFiless - array of objects with sync config

## Start

`npm run start`
