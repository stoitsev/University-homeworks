;------------------------------------------------------
;
; Домашно 2
; Николай Трайков Стоицев
;
; Напишете деструктивна функция (process! T), която получава като параметър 
; дадена таблица и я променя по следния начин:
; 1. Сортира елементите на всеки ред на T.
; 2. Намира сумите на всички колони в таблицата и добавя нов ред в края на 
; таблицата, който съдържа тези суми. Редът е оформен така, че сумата на дадена 
; колона стои точно под нея.
; 3. Намира сумите на всички редове в таблицата и добавя нова колона в края на 
; таблицата, която съдържа тези суми. Колоната е оформена така, че сумата на 
; даден ред да стои точно срещу него.
; 4. Клетката най-долу вдясно на променената таблица съдържа сумата на всички 
; елементи в таблицата.
;

(define empty-table '())

(define (empty-table? T)
  (null? T)
)

(define (count_lines T)
  (define (helper i tr)
    (if (null? tr) i
        (helper (+ i 1) (cdr tr))
    )
  )
  (helper 0 T)
)

(define (swap! x y)
  (let ((a (car x))
        (b (car y)))
        (set-car! x b)
        (set-car! y a)
  )
)

(define (min-ptr l)
  (cond ((null? (cdr l)) l)
        ((< (car l) (car (min-ptr (cdr l)))) l)
        (else (min-ptr (cdr l)))
  )
)

(define (sort_row! l)
  (if (null? (cdr l)) l
      (begin
        (swap! l (min-ptr l))
        (sort_row! (cdr l)) 
        l
      )
  )
)

(define (sort! T)
  (if (not (null? T))
      (begin
        (sort_row! (car T))
        (sort! (cdr T))
       )
  )
)

(define (process! T)
  (if (empty-table? T) empty-table
      (begin
        (sort! T)
        (append-column! T)
        (append! T (new_row T))
        T
      )
  )
)

(define (last x)
  (if (null? (cdr x)) x
      (last (cdr x))
  )
)

(define (append! l x)
  (begin
    (set-cdr! (last l) (cons x '()))
    x
  )
)

(define (sum l)
  (if (null? l) 0
      (+ (car l) (sum (cdr l)))
  )
)

(define (append-column! T)
  (if (not (null? T))
      (begin
        (append! (car T) (sum (car T)))
        (append-column! (cdr T))
      )
  )
)

(define (collect_element T i)
  (define (loop T j)
    (cond ((null? T) '())
          ((= i j) (car T))
          (else (loop (cdr T) (+ 1 j)))
     )
  )
  (loop T 1)
)

(define (count_columns T)
  (if (null? T) 0
      (+ 1 (count_columns (cdr T)))
  )
)          
        
(define (collect_row T i)
  (if (empty-table? T) '()
      (cons (collect_element (car T) i) (collect_row (cdr T) i))
  )
)

(define (new_row T)
  (define (loop i j)
    (if (= i j) '()
        (cons (sum (collect_row T i)) (loop (+ i 1) j))
    )
  )
  (loop 1 (+ 1 (count_columns (car T))))
)
