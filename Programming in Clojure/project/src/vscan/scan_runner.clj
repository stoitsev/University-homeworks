(ns vscan.scan_runner
  (use [vscan.scanners.ping :as PingScanner]
       [vscan.scanners.whois :as WhoisScanner]
       [vscan.scanners.traceroute :as TracerouteScanner]
       [vscan.scanners.nmap :as NmapScanner]))

(def logger
  "The structure that is persisting the scanners output"
  (agent {}))

(defn log [from message]
  "Logs the scanner execution in the logger"
  (send-off logger (fn [state]
                 (assoc state from message))))

(defn wait-futures
  "Waits for a sequence of futures to complete."
  [& futures]
  (doseq [f futures]
    @f))

(defn dofutures
  "Takes a list of functions and spawns features, each calling
   the passed function. It waits for all the futures to get realized
   and returns."
  [& funcs]
  (let [futures (doall (for [func funcs]
                         (future (func))))]
    (apply wait-futures futures)))

(defn scan [url]
  "Run the scanners on the provided url"
  (dofutures #(log :ping (PingScanner/ping-url url))
             #(log :whois (WhoisScanner/whois-url url))
             #(log :traceroute (TracerouteScanner/traceroute url))
             #(log :nmap (NmapScanner/nmap-url url))
             #(log :echo url))
  @logger)
