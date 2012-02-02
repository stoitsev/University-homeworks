;------------------------------------------------------
;
; Домашно 1
; Николай Трайков Стоицев
;
; Напишете предикат (contains? T number), който проверява дали числото number 
; може да се образува след слепване на всички числа на някое ниво на дървото. 
; Редът на срещане на числата в нивото няма значение.
;

; Конструира дърво с корен root, ляво поддърво L и дясно поддърво R.
(define (make-tree root L R)
  (list root L R)
)

; Конструира ново листо със стойност value.
(define (make-leaf value)
  (make-tree value '() '())
)

; Връща стойността в корена на дадено дърво T.
(define (root T)
  (car T)
)

; Връща лявото поддърво на дадено дърво T.
(define (left-tree T)
  (cadr T)
)

; Връща дясното поддърво на дадено дърво T.
(define (right-tree T)
  (caddr T)
)

; Проверява дали дървото T е празното дърво.
(define (empty-tree? T)
  (null? T)
)

; Проверява дали дървото T е листо.
(define (leaf? T)
  (and (not (empty-tree? T))
       (empty-tree? (left-tree T))
       (empty-tree? (right-tree T))
  )
)

(define (max-deep T)
  (if (empty-tree? T) 0
      (+ 1 (max (max-deep (left-tree T)) (max-deep (right-tree T))))
   )
)

(define (get_level Tr l)
  (define (collect_leaves T i)
    (cond ((null? T) T)
          ((= i l) (list (root T)))
          (else (append (collect_leaves (left-tree T) (+ i 1)) (collect_leaves (right-tree T) (+ i 1))))
    )
  )
  (collect_leaves Tr 0)
)

(define (process_level T l i)
  (on_level? T l i)
)

(define (orrer l)
  (cond ((null? l) #f)
        ((eq? #t (car l)) #t)
        (else (orrer (cdr l)))
  )
)

(define (contains? T number)
  (define (loop i l)
    (if (= i l) '()
        (cons (process_level T i number) (loop (+ i 1) l))
    )
  )
  (orrer (loop 0 (max-deep T)))
)

(define (try_level T i)
  (to_strings (permutations (map (lambda (x) (number->string x)) (get_level T i))))
)

(define (to_string l)
  (if (null? l) ""
      (string-append (car l) (to_string (cdr l)))
  )
)

(define (to_strings l)
  (map (lambda (x) (to_string x)) l))

(define (elem? l x)
  (cond ((null? l) #f)
        ((equal? x (car l)) #t)
        (else (elem? (cdr l) x))
   )
)

(define (on_level? T l i)
  (elem? (try_level T l) (number->string i))
)


; Source http://rosettacode.org/wiki/Sorting_algorithms/Permutation_sort#Scheme
; This content is available under GNU Free Documentation License 1.2.
(define (insertions e list)
  (if (null? list)
      (cons (cons e list) list)
      (cons (cons e list)
            (map (lambda (tail) (cons (car list) tail))
                 (insertions e (cdr list))))))

(define (permutations list)
  (if (null? list)
      (cons list list)
      (apply append (map (lambda (permutation)
                           (insertions (car list) permutation))
                         (permutations (cdr list))))))
