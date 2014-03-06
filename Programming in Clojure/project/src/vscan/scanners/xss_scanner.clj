(ns vscan.scanners.xss-scanner
  (require [net.cgrand.enlive-html :as html]))

(defn- fetch-url
  "Fetches the content of the provided adress" 
  [address]
  (with-open [stream (.openStream (java.net.URL. address))]
    (let  [buf (java.io.BufferedReader. 
                (java.io.InputStreamReader. stream))]
      (apply str (line-seq buf)))))

(defn- parse-fields
  "Parse the form object for fields"
  [form]
  (let [fields (html/select (:content form) [:input])]
    (map (fn [field]
           (let [attrs (:attrs field)
                 type (:type attrs)
                 name (:name attrs)]
             {:type type
              :name name})
           ) fields)))

(defn- parse-forms
  "Extracts the input fields from forms"
  [forms]
  (map (fn [form]
         (let [attrs (:attrs form)
               action (:action attrs)
               fields (parse-fields form)]
           {:action action
            :fields fields})
         ) forms))

(defn- parse-html
  "Parse the html text provided for forms"
  [html-text]
  (let [parsed-html (html/html-resource (java.io.StringReader. html-text))
        forms (html/select parsed-html [:form])
        parsed-forms (parse-forms forms)]
    parsed-forms))

(defn scan-url 
  "Scanns the provided url for XSS injections"
  [url]
  (let [html-text (fetch-url url)
        forms (parse-html html-text)]
    forms))
