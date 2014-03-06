(ns vscan.scanners.whois
  (use [vscan.util.url :as url-util]
       [vscan.util.system :as system-util]))

(defn- run-whois
  "Runs the whois command"
  [url]
  (system-util/run-sh "whois" url))

(defn whois-url
  "Main function for this scanner"
  [url]
  (let [host-name (url-util/get-hostname url)]
    (run-whois host-name)))
