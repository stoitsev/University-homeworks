(ns ^{:doc "In memory map/reduce framework"
      :author "Miki Tebeka <miki.tebeka@gmail.com>"}
  cljnlp.utils.mapreduce)

(defn- flatten1 
  "Flatten one level"
  [lst]
  (mapcat identity lst))

(defn map-stage 
  "Run the map stage, calls mapper on every record.
  (mapper record) should return a sequence of [key value] pairs.

  The result is aggregaattion of {k1 [v1 v2] k2 [v3] ...}"
  [mapper records]
  (let [results (flatten1 (map mapper records))]
    (reduce (fn [prev [k v]] (assoc prev k (cons v (prev k)))) {} results)))

(defn reduce-stage 
  "Run reducer on results of map stage.

  Reducer gets called with key and values, and return a single value"
  [reducer map-result]
  (let [ks (keys map-result)]
    (zipmap ks (map #(reducer % (map-result %)) ks))))

(defn map-reduce 
  "Run mapper and reducer on records.

  The result is {k1 v1 k2 v2 ...}"
  [mapper reducer records]
  (reduce-stage reducer (map-stage mapper records)))