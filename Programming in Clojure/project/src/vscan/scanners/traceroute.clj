(ns vscan.scanners.traceroute
  (use [vscan.util.url :as url-util]
       [vscan.util.system :as system-util]))

(defn- run-traceroute
  "Runs the traceroute command"
  [url]
  (system-util/run-sh "traceroute" url))

(defn traceroute
  "Main function for this scanner"
  [url]
  (let [host-name (url-util/get-hostname url)]
    (run-traceroute host-name)))
