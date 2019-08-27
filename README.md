## 2
the length was 1 and the capacity was 3 after 1 push, the memory address was 0.
after 6 pushes the length was 6, capacity 12, and the address was 3
  this capacity was 12 because resize was performed once after the capacity exceeded 3, one was added to make it 4, then the 
  capacity was tripled, as per the resize function. I do not understand the change in the address, it seems to be the begining
  of when a new capacity is needed.
  
##3
The capacity and address were the same as above, since there is no functionality of reason to reudce these values.
The length was reduced to 3, as one would expect

##4 After emptying the array and printing the string that should have been pushed, the result is NaN, it seems the array only supports numeric input. as expected the capacity and address did not change upon emptying.
The purspose if the resize function is to ensure that there is enougth memory to accomidate the array, there is no need to ever reduce the amount of memory allocated via resize.
