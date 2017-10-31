const { parseWebhook } = require('./webhookParser.js')
const sampleWebhook = require('../test-webhook.json')

test('Should parse example webhook to grouped destination map', () => {
    const config = {
        "token": "123",
        "userAgent": "syncUA",
        "syncAccountName": "sync-login",
        "pullRequestBranchPrefix": "update-docs-",
        "syncFiles": [
            {
                "from": {
                    "owner": "example-owner",
                    "repo": "example-repo",
                    "path": "packages/livechat-visitor-api/website-docs/"
                },
                "to": {
                    "owner": "example-owner",
                    "repo": "example-repo2",
                    "path": "cat2/"
                },
                "refsMap": {
                    "master": "master"
                }
            }
        ]
    }    
    const expected = {
        'example-owner': {
            'example-repo2': {
                'master' : [
                    {
                        from: {
                            "branch": "master",
                            "file": "packages/livechat-visitor-api/website-docs/_methods.md",
                            "owner": "example-owner",
                            "repository": "example-repo",
                        },
                        to: {
                            "branch": "master",
                            "file": "cat2/_methods.md",
                            "owner": "example-owner",
                            "repository": "example-repo2",
                        }
                    },
                    {
                        from: {
                            "branch": "master",
                            "file": "packages/livechat-visitor-api/website-docs/_changelog.md",
                            "owner": "example-owner",
                            "repository": "example-repo",
                        },
                        to: {
                            "branch": "master",
                            "file": "cat2/_changelog.md",
                            "owner": "example-owner",
                            "repository": "example-repo2",
                        }
                    },
                    {
                        from: {
                            "branch": "master",
                            "file": "packages/livechat-visitor-api/website-docs/_how_to_start.md",
                            "owner": "example-owner",
                            "repository": "example-repo",
                        },
                        to: {
                            "branch": "master",
                            "file": "cat2/_how_to_start.md",
                            "owner": "example-owner",
                            "repository": "example-repo2",
                        }
                    }
                ]
            }
        }
    }
    expect(parseWebhook(sampleWebhook, config)).toEqual(expected)
})

test('Should parse example webhook to grouped destination map', () => {
    const config = {
        "token": "123",
        "userAgent": "syncUA",
        "syncAccountName": "sync-login",
        "pullRequestBranchPrefix": "update-docs-",
        "syncFiles": [
            {
                "from": {
                    "owner": "unknown-owner",
                    "repo": "unknown-repo",
                    "path": "unknown-path/unknown-dir"
                },
                "to": {
                    "owner": "unknown-owner2",
                    "repo": "unknown-repo2",
                    "path": "unknown-path/unknown-dir2"
                },
                "refsMap": {
                    "unknown": "branches"
                }
            }
        ]
    }
    
    const expected = {}
    expect(parseWebhook(sampleWebhook, config)).toEqual(expected)
})