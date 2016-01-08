
for(var num=1;num <=20; num ++) {
	//Creating variable loop. Starting with the number 1 add incriment of 1 until you hit 20.
	
	//For each number check the following:
	if (num % 3 === 0){
	//See if number is divisible by three
		if (num % 5 === 0){
		//If divisible by three check if also divisible by five
			console.log("Fizzbuzz");
		//If these two conditions are met output is "Fizzbuzz"
		}else{
			console.log("Fizz");
		//If only divisible by three output is "Fizz"
		}
	}
	else if (num % 5=== 0){
	//Check if number is divisible by five
			console.log("Buzz");
		//If divisible by five output is "Buzz"
	}
	else{
	console.log(num);
	//If none of the above conditions are true (divisible by three, five or three and five) output original number.
	}
}