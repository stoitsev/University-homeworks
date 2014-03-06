(ns vscan.util.sh-scanner-macro)

(defmacro run-sh-scan [name cmd args]
  `(defn- 
     ~name
     "Runs the ~name command" 
     [x#] (system-util/run-sh ~cmd x# ~@args)))
