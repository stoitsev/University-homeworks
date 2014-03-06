(defproject vscan "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://vscan.herokuapp.com"
  :license {:name "FIXME: choose"
            :url "http://example.com/FIXME"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [compojure "1.1.1"]
                 [ring/ring-jetty-adapter "1.1.0"]
                 [ring/ring-devel "1.1.0"]
                 [ring-basic-authentication "1.0.1"]
                 [environ "0.2.1"]
                 [enlive "1.1.4"]
                 [com.cemerick/drawbridge "0.0.6"]
                 [jayq "2.4.0"]
                 [clj-json "0.5.3"]]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.2.1"]
            [lein-ring "0.8.3"]
            [lein-cljsbuild "0.2.3"]]
  :hooks [environ.leiningen.hooks]
  :ring {:handler vscan.web/app}
  :profiles {:production {:env {:production true}}}
  :cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src-cljs"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "resources/public/js/main.js"  ; default: target/cljsbuild-main.js
          :optimizations :whitespace
          :externs ["externs/jquery.js"]
          :pretty-print true}}]})