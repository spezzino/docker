# Docker images

## Wildfly
- Version: 10.1.0.Final
- Ports: 8080, 9990
- Volumes: none

### Build
`docker build -t <name>:<tag> .`

### Docker hub
https://hub.docker.com/r/spezzino/wildfly/

---

## Lemp
Based on [Phusion-Baseimage](https://github.com/phusion/baseimage-docker) 0.9.19
PHP 5.6 installed using [ondrej/php](https://launchpad.net/~ondrej/+archive/ubuntu/php) PPA.
Minimal tools including vim, git, wget, unzip.

- Ports: 80, 3306
- Volumes: none

### MySQL
- Version: 5.7.16-0
- Username: admin
- Password: pass

### Nginx
- Version: 1.10.0
- Config: /etc/nginx
- Default: /usr/share/nginx/html

### PHP-FPM
- Version: 5.6
- Socket: /var/run/php/php5.6-fpm.sock

### Phpmyadmin
- Version: 4.6.5.1
- Listening on: <ip:web_port>/pma

### Build
`docker build -t <name>:<tag> .`

### Docker hub
https://hub.docker.com/r/spezzino/lemp/

---

## Parse Platform

- OS: Alpine Linux (edge)
- Node 7.7.3 & npm 4.1.3
- Ports: 1337, 27017
- Volumes: /usr/src/app

### Parse server
- Version: 2.3.7
- Listening on: <ip:port>/parse

### Parse dashboard
- Version: 1.0.25
- User: user
- Password: password
- Listening on: <ip:port>/dashboard

### MongoDB
- Version: 3.2
- Listening on: <ip:dbPort>

### Build
`docker build -t <name>:<tag> .`

### Docker hub
https://hub.docker.com/r/spezzino/parse-platform/

---
