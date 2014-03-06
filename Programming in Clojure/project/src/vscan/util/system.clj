(ns vscan.util.system
  (use [clojure.java.shell :only [sh]]))

(defn run-sh [& args]
  (:out (apply sh args)))
