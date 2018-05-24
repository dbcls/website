# Umakadata

Ruby on Rails application for Umakadata.

This repository contains RoR application and Dockerfile that makes setup easy.

## Prerequisites

Getting started with docker, Umakadata requires these packages installed.

- OS X or Windows

    - Docker (1.11.0 confirmed)
    - Docker-machine (0.7.0 confirmed)
    - Docker-compose (1.7.0 confirmed)

- Linux

    - Docker-engine (1.7.1 comfirmed)

If you already get another version of Docker running, it may be used as alternative environment.

## Installation

### OS X or Windows

#### 1. Run containers

Docker-compose will help you with building images and running containers.
```bash
cd /path/to/umakadata
docker-compose up -d
```

#### 2. Initialize

```bash
# Enter to web container's shell
docker-compose run web /bin/bash
# Now you are in the container
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
bundle exec rake umakadata:active_median
bundle exec rake umakadata:import_prefix_for_all_endpoints[./data/prefixes]
bundle exec rake umakadata:import_prefix_filters_for_all_endpoints[./data/prefix_filters]
bundle exec rake umakadata:seeAlso_sameAs_for_all_endpoints[./data/relations]
```

### Linux

#### 1. Pull and build images

Pull the PostgreSQL image from official repository.
```bash
docker pull postgres
```

Modify web/config/database.yml and set the docker host as 'host'.

Build Ruby and RoR environment.
```bash
cd /path/to/umakadata
docker build --tag umakadata_web .
```

#### 2. Run containers

##### Container for database

```bash
# Make directory to mount into container
mkdir pgdata
docker run -d -v /path/to/pgdata:/var/lib/postgresql/data -p 5432:5432 --name umakadata_db postgres
```

If you want to use a role other than postgres, use the command below instead.
```bash
docker run -d -v /path/to/pgdata:/var/lib/postgresql/data -p 5432:5432 --name umakadata_db \
           -e "POSTGRES_USER=user" -e "POSTGTES_PASS=password" postgres
```

Note: You will need to update user name and password in `umakadata/web/config/database.yml`.

##### Container for web application

```bash
docker run -d -p 3000:3000 --name umakadata_web umakadata_web bundle exec rails s -p 3000 -b '0.0.0.0'
```

#### 3. Initialize

```bash
docker exec -it umakadata_web /bin/bash
# Now you are in the container
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
bundle exec rake umakadata:active_median
bundle exec rake umakadata:import_prefix_for_all_endpoints[./data/prefixes]
bundle exec rake umakadata:import_prefix_filters_for_all_endpoints[./data/prefix_filters]
bundle exec rake umakadata:seeAlso_sameAs_for_all_endpoints[./data/relations]
```

### Web application without Docker

You can execute this system without docker as follows:

#### 1. Prepare Database

In this document, we use docker container for DB for the convenience.

##### Pull the PostgreSQL image from official repository.

```bash
docker pull postgres
```

##### Invoke docker container

```bash
# Make directory to mount into container
mkdir pgdata
docker run -d -v /path/to/pgdata:/var/lib/postgresql/data -p 5432:5432 --name umakadata_db postgres
```

### 2. Configure a web application

#### Configure Database settings

Modify </path/to/umakadata>/web/config/database.yml.

#### Initialize

```bash
cd </path/to/umakadata>/web
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
bundle exec rake umakadata:active_median
bundle exec rake umakadata:import_prefix_for_all_endpoints[./data/prefixes]
bundle exec rake umakadata:import_prefix_filters_for_all_endpoints[./data/prefix_filters]
bundle exec rake umakadata:seeAlso_sameAs_for_all_endpoints[./data/relations]
```

### 3. Run a web application

```bash
cd </path/to/umakadata>/web
bundle exec rails s -d --bind=0.0.0.0
```

If you want to change the listening port, for example 10081, execute the following command:

```bash
cd </path/to/umakadata>/web
bundle exec rails s -d -p 10081 --bind=0.0.0.0
```


## Usage

Collecting data from a given list of endpoints.
```bash
cd /opt/services/umaka/umakadata/web; rake umakadata:crawl[$1]
```

The argument tells the order of accessing to endpoints; either ASC or DESC needs to be given.
Below is an example of cronjobs.
```
0  9 * * * [ $(expr $(date +\%j) \% 6) -eq 0 ] && /opt/services/umaka/umakadata/crawl.sh 'ASC'
0  9 * * * [ $(expr $(date +\%j) \% 6) -eq 1 ] && /opt/services/umaka/umakadata/crawl.sh 'DESC'
0 15 * * * [ $(expr $(date +\%j) \% 6) -eq 2 ] && /opt/services/umaka/umakadata/crawl.sh 'ASC'
0 15 * * * [ $(expr $(date +\%j) \% 6) -eq 3 ] && /opt/services/umaka/umakadata/crawl.sh 'DESC'
0 21 * * * [ $(expr $(date +\%j) \% 6) -eq 4 ] && /opt/services/umaka/umakadata/crawl.sh 'ASC'
0 21 * * * [ $(expr $(date +\%j) \% 6) -eq 5 ] && /opt/services/umaka/umakadata/crawl.sh 'DESC'
```

## Development


## Contributing


## License
MIT
