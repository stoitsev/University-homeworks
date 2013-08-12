(defproject cljnlp "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://cljnlp.herokuapp.com"
  :license {:name "FIXME: choose"
            :url "http://example.com/FIXME"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [compojure "1.1.1"]
                 [ring/ring-jetty-adapter "1.1.0"]
                 [ring/ring-devel "1.1.0"]
                 [ring-basic-authentication "1.0.1"]
                 [environ "0.2.1"]
                 [clj-json "0.5.3"]
                 [clojure-opennlp "0.3.1"]
                 [com.cemerick/drawbridge "0.0.6"]
                 [org.clojure/java.jdbc "0.2.3"]
                 [postgresql "9.1-901.jdbc4"]]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.2.1"]
            [lein-ring "0.8.3"]]
  :hooks [environ.leiningen.hooks]
  :ring {:handler cljnlp.web/app}
  :profiles {:production {:env {:production true}}})