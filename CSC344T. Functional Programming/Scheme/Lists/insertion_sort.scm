;function for inserting element in list
(define (insert element L)
	(if (or (null? L) 
		(<= element (car L)))
	    (cons element L)
	    (cons (car L)
	    	   (insert  element (cdr L)))
	)
)

(define (accumulate operation null-element L)
  (if (null? L) null-element
      (operation (car L) 
          (accumulate operation null-element (cdr L))
      )
  )
)

(define (insert_sort L)
	(accumulate insert '() L))
