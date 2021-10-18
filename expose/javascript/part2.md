1. it will print 3
2. it will print 150
3. it will print 150
4. [50,100,150]; every time we get a final price, we push it into 'discounted' and values are 50,100 and 150 respectively
5. Error: 'i' is only accessible within for loop and cannot be printed outside
6. Error: 'discountedPrice' is only accessible within for loop and cannot be printed outside
7. it will print 150; 'finalPrice' is created in the function 'discountPrices' and exists throughout the function, and since it's modified in the for loop, it will print 150
8. [50,100,150]; each variable can be modified and the for loop modifies values and push it to return
9. Error; 'i' is only defined inside for loop and cannot be accessed at line 11
10. it will print 3; it prints const variable length, which is the length of [100,200,300]
11. [50,100,150]; although we cannot modify const with re-assignment nor re-declaration, we can modify the array it points to.
12. A. student.name
	B. student['grad year']
	C. student.greeting()
	D. student['Favorite Teacher'].name
	E. student.courseLoad[0]
13. A. output:32; integer 2 maps to its string representation
	B. output:1; string '3' becomes integer 3
	C. output:3; null becomes 0
	D. output:3null; null becomes string 'null'
	E. output:4; true becomes 1
	F. output:0; 0 represents false, where null becomes false and false+false=false
	G. output:3undefined; undefined becomes string 'undefined'
	H. output:NaN; undefined becomes number NaN,and whatever other operations are processed, it will always return NaN
14. A. output:true; string '2' becomes number 2
	B. output:false; string '2' and '12' are compared letter-by-letter, since '2'>'1' in "lexicographical order", the result is false
	C. output:true; string '2' becomes a number 2
	D. output:false; === checks type conversion, since '2' is string while 2 is number and they are of different type, therefore it returns false
	E. output:false; true becomes 1 and 1!=2
	F. output:true; Boolean(2) is true since 2 is not intuitively “empty”
15. === checks the equality without type conversion while == only checks equality of data values.
17. result is [2,4,6]; as we iterate through for loop in function modifyArray, we use callback function to double the input and push output back to modifyArray, and we push the doubled value to newArr
19. 1432