# btra
BodyTrace Request/Response Time Analizer.

[![NPM](https://badge.fury.io/js/btra.svg)](https://badge.fury.io/js/btra)
[![Build Status](https://travis-ci.org/ndaidong/btra.svg?branch=master)](https://travis-ci.org/ndaidong/btra)
[![Dependency Status](https://gemnasium.com/badges/github.com/ndaidong/btra.svg)](https://gemnasium.com/github.com/ndaidong/btra)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/af77cc48-ab44-46d4-88d6-46b9ffc42ae9/badge)](https://nodesecurity.io/orgs/techpush/projects/af77cc48-ab44-46d4-88d6-46b9ffc42ae9)

### Installation

```
sudo npm install -g btra

```

### Usage


```
// get help
btra -h

// set destination server
btra set -u <url> -e <email> -p <password>

// get current configuration
btra get

// send _count_ requests to destination server
btra request -c <count>

// without specifying -c, it would send just one request
```

### Screenshot

![btra's screenshot](http://i.imgur.com/EyiTj2Z.png)

# License

The MIT License (MIT)
