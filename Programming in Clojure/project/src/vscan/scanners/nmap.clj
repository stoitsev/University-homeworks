(ns vscan.scanners.nmap
  (use [vscan.util.url :as url-util]
       [vscan.util.system :as system-util]))

(defn- run-nmap
  "Runs the nmap command"
  [url]
  (system-util/run-sh "nmap" url))

(defn nmap-url
  "Main function for this scanner"
  [url]
  (let [host-name (url-util/get-hostname url)]
    (run-nmap host-name)))

