# vscan

A web app using Compojure.

This project has a few basics set up beyond the bare Compojure defaults:

* Cookie-backed session store
* Stack traces when in development
* Environment-based config via [enviorn](https://github.com/weavejester/environ)
* [HTTP-based REPL debugging](https://devcenter.heroku.com/articles/debugging-clojure) via [drawbridge](https://github.com/cemerick/drawbridge)

## Usage

To start a local web server for development you can either eval the
commented out forms at the bottom of `web.clj` from your editor or
launch from the command line:

    $ lein run -m vscan.web
