(ns vscan.scanners.ping
  (use [vscan.util.url :as url-util]
       [vscan.util.system :as system-util]))

(defn- run-ping
  "Runs the ping command"
  [url]
  (system-util/run-sh "ping" url "-c 4"))

(defn ping-url
  "Main function for this scanner"
  [url]
  (let [host-name (url-util/get-hostname url)]
    (run-ping host-name)))

