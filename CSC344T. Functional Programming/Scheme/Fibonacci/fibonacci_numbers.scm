(define (fib n)
  (define (calc m res1 res2)
    (if (< m n)
        (calc (+ m 1) res2 (+ res1 res2))
        res1
     )
   )
   (calc 0 0 1)
)
