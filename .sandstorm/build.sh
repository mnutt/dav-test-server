#!/bin/bash
set -euo pipefail

# ensure data storage directory exists
sudo mkdir -p /var/dav
sudo chown $USER /var/dav
mkdir -p /var/dav/data
mkdir -p /var/dav/tmp
