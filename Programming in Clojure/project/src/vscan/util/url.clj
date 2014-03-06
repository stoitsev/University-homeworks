(ns vscan.util.url)

(defn get-hostname
  "Return the host name for a given URL"
  [url]
  (nth (re-find #"^https?:\/\/([^\/]*)\/?$" url) 1))
