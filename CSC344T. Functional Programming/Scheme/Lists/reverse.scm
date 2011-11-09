(define (reverse L)
	(define (helper L1 L2)
		(if (null? L1) L2
		   (helper (cdr L1)
		   	(cons (car L1) L2)
		   )
		)
	)
	(helper L '())
)
