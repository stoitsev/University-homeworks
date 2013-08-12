(ns cljnlp.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [clojure.string :as string]
            [ring.middleware.stacktrace :as trace]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :as cookie]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.basic-authentication :as basic]
            [cemerick.drawbridge :as drawbridge]
            [environ.core :refer [env]]
            [clj-json.core :as json]
            [cljnlp.echo :as echo]
            [cljnlp.nlp :as nlp]))

(defn- authenticated? [user pass]
  ;; TODO: heroku config:add REPL_USER=[...] REPL_PASSWORD=[...]
  (= [user pass] [(env :repl-user false) (env :repl-password false)]))

(def ^:private drawbridge
  (-> (drawbridge/ring-handler)
      (session/wrap-session)
      (basic/wrap-basic-authentication authenticated?)))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json;charset=utf-8"}
   :body (json/generate-string data)})

(defroutes app
  (ANY "/repl" {:as req}
       (drawbridge req))
  (GET "/" []
       {:status 200
        :headers {"Content-Type" "text/html"}
        :body (slurp (io/resource "index.html"))})
  (GET "/echo/:str" [str] (json-response (echo/process (java.net.URLDecoder/decode str))))
  (GET "/tokenize/:str" [str] (json-response (nlp/tokenize (java.net.URLDecoder/decode str))))
  (GET "/frequency/:str" [str] (json-response (nlp/frequency (java.net.URLDecoder/decode str))))
  (GET "/keywords/:str" [str] (json-response (nlp/keywords (java.net.URLDecoder/decode str))))
  
  (ANY "*" []
       {:status 404 
        :headers {"Content-Type" "application/json"}
        :body (slurp (io/resource "404.json"))}))

(defn wrap-error-page [handler]
  (fn [req]
    (try (handler req)
         (catch Exception e
           {:status 500
            :headers {"Content-Type" "text/html"}
            :body (slurp (io/resource "500.html"))}))))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))
        ;; TODO: heroku config:add SESSION_SECRET=$RANDOM_16_CHARS
        store (cookie/cookie-store {:key (env :session-secret)})]
    (jetty/run-jetty (-> #'app
                         ((if (env :production)
                            wrap-error-page
                            trace/wrap-stacktrace))
                         (site {:session {:store store}}))
                     {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))

