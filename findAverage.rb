# Write a function that finds the average of the numbers in a given array.

def findAverage(inputArr)
  sum = 0
  inputArr.each do |x|
    sum = sum + x
  end
  puts (sum / inputArr.length)
  sum / inputArr.length
end

array = [1,2,3,4,5]

findAverage(array)
