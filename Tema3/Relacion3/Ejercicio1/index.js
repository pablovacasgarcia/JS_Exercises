

//find largest number

array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mayor=0

array.forEach(x => {if (x>mayor){mayor=x}})

document.write (mayor+"<br>")


//find longest string

array2=["hola", "adios", "pablo", "arrucutua", "gamusino"]
masLarga=""

array2.forEach(string => {if (string.length>masLarga.length){masLarga=string}})

document.write (masLarga+"<br>")


//find even numbers
array3=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even=[]

array3.forEach(x => {if (x%2==0){even.push(x)}})

document.write (even+"<br>")


//find odd numbers
array4=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd=[]

array4.forEach(x => {if (x%2!=0){odd.push(x)}})

document.write (odd+"<br>")


//find words that contain 'is'
array5=["hola", "adios", "pablo", "arrucutua", "gamusino", "ispiderman", "pisapapeles"]
contieneIs=[]

array5.forEach(string => {if (string.includes("is")){contieneIs.push(string)}})

document.write (contieneIs+"<br>")


//assert all numbers are divisible by three
array4=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
divisible=[]

array4.forEach(x => {if (x%3==0){divisible.push(x)}})

document.write (divisible+"<br>")



//zip two arrays together
arrayZip1=[1, 3, 47, 42, 75]
arrayZip2=[6, 7, 85, 49, 10]

arrayZip=arrayZip1.concat(arrayZip2)

document.write(arrayZip+"<br>")


//sort joined array from smallest to largest
ordenar = (a, b) => {if (a>b){return 1}; if (b>a){return -1}}

arrayZip.sort(ordenar)

document.write(arrayZip+"<br>")


//remove the first word in the array
array5=["hola", "adios", "pablo", "arrucutua", "gamusino", "ispiderman", "pisapapeles"]

array5.shift()

document.write (array5+"<br>")


//place a new word at the start of the array
array5.unshift("Hola")

document.write (array5+"<br>")


//replace some elements
array5.replace("", "")

document.write (array5+"<br>")

