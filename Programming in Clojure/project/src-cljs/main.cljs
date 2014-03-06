(ns main
  (:require [clojure.string :as s]))

(defn handle-response [data]
  (when-not (= data "")
    (.log js/console "Response")
    (.log js/console data)
    (.hide (js/jQuery "#website-info"))
    (.hide (js/jQuery "#loading"))
    (.show (js/jQuery "#results"))
    (.text (js/jQuery ".result_container") "")
    (let [ping (s/replace (aget data "ping") "\n" "<br/>")
          whois (s/replace (aget data "whois") "\n" "<br/>")
          nmap (s/replace (aget data "nmap") "\n" "<br/>")
          traceroute (s/replace (aget data "traceroute") "\n" "<br/>")]
      (.html (js/jQuery "#ping") ping)
      (.html (js/jQuery "#whois") whois)
      (.html (js/jQuery "#nmap") nmap)
      (.html (js/jQuery "#traceroute") traceroute))
    ))

(defn submit-handler []
  (let [input-field (js/jQuery "#inputURL")
        error (js/jQuery "#error")]
    (do
      (.text error "")
      (let [value (js/encodeURIComponent (.val input-field))]
       (if (= value "")
         (.text error "Please enter valid URL!")
         (do
          (.show (js/jQuery "#loading"))
          (.get js/jQuery (str "/input/" value) handle-response))))
      false)))

(let [submit-button (js/jQuery "#submit")]
  (.on submit-button 
       "click" 
       submit-handler))
