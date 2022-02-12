print ("Hello\nThis is my first Python code")
from datetime import datetime

today = raw_input("enter 'day' :")
#=>day
print(datetime.today().strftime('%Y-%m-%d'))


name = raw_input("enter my name :")
#=> Hyewon
print 'Kim'
#=> Kim

if 7 in [1,2,3,4,5,6,7]: 
    print("Group 7")