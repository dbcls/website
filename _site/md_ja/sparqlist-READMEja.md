# SPARQList

## Docker

    $ docker run dbcls/sparqlist

## Prerequisites

* [Node.js](https://nodejs.org/) v8.10.0
* [yarn](https://yarnpkg.com/) v1.5.1

## Install

    $ git clone git@github.com:dbcls/sparqlist.git
    $ cd sparqlist
    $ yarn install

If you want to deploy SPARQList under a subdirectory, pass the directory via `ROOT_PATH`:

    $ ROOT_PATH=/foo/ yarn install

(Note that `ROOT_PATH` must end with `/`.)

## Run

    $ PORT=3000 ADMIN_PASSWORD=changeme yarn start

If you want to deploy SPARQList under a subdirectory, pass the directory via `ROOT_PATH`:

    $ ROOT_PATH=/foo/ PORT=3000 ADMIN_PASSWORD=changeme yarn start

## Configuration

All configurations are done with environment variables.

### `PORT`

(default: `3000`)

Port to listen on.

### `REPOSITORY_PATH`

(default: `./repository`)

Path to SPARQLet repository.

### `ADMIN_PASSWORD`

(default: empty)

Admin password. If left empty, all administrative features are disabled.

### `ROOT_PATH`

(default: `/`)

Path of root. If you want to deploy SPARQList under a subdirectory, specify the directory. Note that `ROOT_PATH` must end with `/`.

## Development

### Backend

    $ cd sparqlist
    $ yarn watch

Open http://localhost:3000 in your browser for backend development.

### Frontend

    $ cd sparqlist/frontend
    $ yarn start --proxy http://localhost:3000

Open http://localhost:4200 on your browser for frontend development.

Note that some requests, such as `/api`, can't be processed on http://localhost:4200 because the `--proxy` option does not work for these paths. Try them on http://localhost:3000.
