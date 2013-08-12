(ns cljnlp.nlp
  (:require [cljnlp.utils.mapreduce :as mapreduce])
  (:use [clojure.string :only (split)]))

(def fileIn (slurp "models/F-InformalFiction0001_byFreq"))

(def global-histogram
  (->>
    (split fileIn #"\n")
    (map #(split % #"\t"))
    (map (fn [[k v]] [(keyword k) v]))
    (into {})))

(defn tokenize [str]
  (split str #"[,|\.|\s+]"))

(defn mapper [line]
  (for [word (tokenize line) :when (> (count word) 2)] [word 1]))

(defn reducer [key values]
  (reduce + values))

(defn frequency [str]
  (let [result (mapreduce/map-reduce mapper reducer [str])]    
    (shutdown-agents)
    result))

(defn average [lst] 
  (let [size (count lst)]
    (if (= 0 size)
      0
      (/ (reduce + lst) size))))

(defn keywords [str]
  (let [str-histogram (frequency str)
        sorted-histogram (into (sorted-map-by (fn [key1 key2]
                         (compare [(get str-histogram key2) key2]
                                  [(get str-histogram key1) key1]))) str-histogram)
        local-histogram (filter #(> (second %) 1) sorted-histogram)
        avg-prob (average (for [word (keys local-histogram) :when ((keyword word) global-histogram)] (Integer. ((keyword word) global-histogram))))]
    (map #(first %) (filter #(< (Integer. ((keyword (key %)) global-histogram)) avg-prob) local-histogram))))
