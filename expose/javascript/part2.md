1. 3 will be printed, variable i is incremented until it reaches the length of price, which has length of 3

2. 150, the variable discounted is assigned as 150 at the last iteration of the for loop

3. 150, the variable finalPrice is assigned as 150 at the last iteration of the for loop

4. the function returns [ 50, 100, 150 ], the function returns the array that consists the discounted price, since the original prices are [100, 200, 300] and the discount rate is 0.5, the discounted prices are [50, 100, 150] 


5. Reference error, i is a let variable and is defined inside the for loop, so it's no longer available outside the block.


6. Reference error, discountedPrice is a let variable and is defined inside the for loop, so it's no longer available outside the block.


7. 150, finalPrice is defined inside the function block but not inside the for loop, so it will be available at line 14, and the calculation inside the for loop would perform normally. 


8. the function returns [ 50, 100, 150 ], the function returns the array that consists the discounted price, since the original prices are [100, 200, 300] and the discount rate is 0.5, the discounted prices are [50, 100, 150]


9.  Type error, the const variable discountedPrice is assigned multiple times in the for loop at line 7. 

10. Type error, the const variable discountedPrice is assigned multiple times in the for loop at line 7.


11. Type error, the const variable discountedPrice is assigned multiple times in the for loop at line 7.


12.  A. student.name <br> B. student["Grad Year"]<br> C. student.greeting()<br> D. student["Favorite Teacher"].name <br>E. student.courseload[0]


13.  A. '32', integer map to the exact string representation.<br>B. 1, string '3' is converted to integer to perform subtraction proporly<br> C. 3, null converts to 0<br> D. '3null', null converts to 'null'<br> E. 4, true converts to 1<br> F. 0, false converts to 0 and null converts to 0<br> G. '3undefined', undefined converts to 'undefined'<br>H. NaN, '3' converts to 3 and undefined converts to NaN


14.  A. true, '2' converts to 2<br>B. false, strings are compared using lexicographical order<br>C. true, '2' converts to 2<br>D. false, '===' is the strict equality operater that does not allow type conversion<br>E. false, true converts to 1<br>F. true, Boolean(2) returns true


15.  '==' is the equality operater that allows type conversion, wheras '===' is the strict equality operater that does not allow any type conversion.
16.  see part2-question16.js

17. the result would be [ 2, 4, 6 ], when the modifyArray function reaches line 4, the callback function is called, so it will jump to the callback function to excute it, after waiting for the callback function finishes excuting, the modifyArray function will excute normally. 
18. see part2-question18.js


19. 1 <br>4<br> 3 <br>2 