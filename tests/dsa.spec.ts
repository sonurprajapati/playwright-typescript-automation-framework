import { test } from '@playwright/test';

test('Count the number of vowels and consonants in a string: part 1', () => {
    let silent = "silent";
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelsCount = 0;
    let consnCount = 0;

    for(let i=0; i<=silent.length-1; i++){
        for(let j = 0; j<=vowels.length-1; j++){
            if(silent[i] == vowels[j]){
                vowelsCount = vowelsCount +1;
                break;
            }
        }
    }
    console.log('vowelsCount: ', vowelsCount);
    console.log('consnCount: ', consnCount = silent.length - vowelsCount);
});

test('Count the number of vowels and consonants in a string: part 2', () => {
    let silent = "silent";
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelsCount = 0;
    let consnCount = 0;

    for(let i=0; i<=silent.length-1; i++){
            if(vowels.includes(silent[i])){
                vowelsCount++;
            }else{
              consnCount++
            }
    }
    console.log('vowelsCount: ', vowelsCount);
    console.log('consnCount: ', consnCount);
});

test('silent and listen are anagrams?', () => {
    let silent = "cat";
    let listen = "tac";

    let silentSort = silent.split('').sort().join('');
    let listenSort = listen.split('').sort().join('');

    if(silentSort == listenSort){
        console.log('' + silent + ' and ' + listen + ' are anagrams');
    }
    else{
        console.log('' + silent + ' and ' + listen + ' are not anagrams');
    }
});

test('reverse a string', () => {
    let silent = "silent";
    let reverse = "";
    for(let i=silent.length-1; i>=0; i--){
        reverse = reverse + silent[i];
    }
    console.log('reverse: ', reverse);
});

test('palindrome', () => {
    let silent = "madama";
    let reverse = "";
    for(let i=silent.length-1; i>=0; i--){
        reverse = reverse + silent[i];
    }
    if(silent == reverse){
        console.log('' + silent + ' is a palindrome');
    }
    else{
        console.log('' + silent + ' is not a palindrome');
    }
});

test('longest common prefix', () => {
    let arr = ['flower', 'flight', 'flowend', 'floor', 'flowers'];
    let prefix = arr[0];

    for (let i = 1; i < arr.length; i++) {
        while (!arr[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }
    }
    console.log(prefix);
});

test('2nd largest number', () => {
    let num = [3, 65, 78, 4, 33, 62, 12];
    let newNum = num.sort((a,b)=> a-b)
    let newNumPop = newNum[newNum.length-3];
    console.log(newNumPop);
});

test('Find the largest number', () => {
    let numbers = [12, 45, 7, 89, 23, 56];
    let sortNumbers = numbers.sort((a, b) => a - b);
    let longLength = sortNumbers.length-1;
    let largest = sortNumbers[longLength];
    console.log(largest);
});

test('Find the largest number without sort', () => {
    let numbers = [12, 45, 7, 89, 23, 56];
    // let numbers = [90, 45, 7, 20, 10];
    // let numbers = [23,894,546,22,3,89,12,23,59,16,82];
    let largest = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        if(largest<numbers[i]){
            largest = numbers[i];
        }
    }
    console.log(largest);
});

test('Find the smallest number without sort', () => {
    // let numbers = [12, 45, 7, 89, 23, 56];
    // let numbers = [90, 45, 7, 20, 10];
    let numbers = [23,894,546,22,3,89,12,23,59,16,82];
    let largest = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        if(largest>numbers[i]){
            largest = numbers[i];
        }
    }
    console.log(largest);
});

test('Count even and odd numbers', () => {

    // let numbers = [12, 45, 7, 89, 23, 56, 10, 31];
    // let numbers = [17, 42, 9, 64, 81, 26, 35, 100, 53, 8];
    let numbers = [27, 14, 63, 88, 5, 42, 71, 36, 19, 50, 93];
    let odd = 0;
    let even = 0;
    for(let i = 0; i<numbers.length; i++){
        let divide = numbers[i]%2
        if(divide==0){
            even++;
        }
        else{
            odd++;
        }
    }
    console.log("even: " + even);
    console.log("odd: " + odd);

});

test('Sum of all numbers', () => {

    // let numbers = [12, 5, 23, 8, 17, 4, 31];
    let numbers = [18, 7, 25, 43, 12, 9, 31, 6, 14];

    let sum = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    console.log(sum);

});

test('Count positive and negative numbers', () => {

    let numbers = [12, -5, 8, -21, 0, 15, -7, 3, -10];
    let positive =0;
    let negative =0;
    let zero =0;

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i]<0){
            negative++;
        }
        if(numbers[i]>0){
            positive++;
        }
        if(numbers[i]==0){
            zero++;
        }
    }
    console.log("positive: " + positive);
    console.log("negative: " + negative);
    console.log("zeos: " + zero);

});

test('Find the second largest number without sort', () => {
    let numbers = [12, 45, 7, 89, 23, 56, 34];

    let largest = 0;
    let secondLargest = 0;
    for(let i = 0; i<numbers.length; i++){
        if(largest<numbers[i]){
            secondLargest = largest;
            largest= numbers[i];
        } else if (secondLargest < numbers[i] && numbers[i] !== largest) {
            secondLargest = numbers[i];
        }
    }
    console.log(secondLargest);
});

test('Count occurrences of a number', () => {
    let numbers = [10, 20, 10, 30, 40, 10, 50, 20];
    let find = 70;
    let occurrences = 0;

    for(let i = 0; i<numbers.length; i++){
        if(find==numbers[i]){
            occurrences++;
        }
    }
    console.log(occurrences);
});

test('Find the first duplicate number chatgpt solutino: not working', () => {
    let numbers = [5, 8, 3, 9, 8, 2, 7, 5, 8];
    let duplicate = 0;
    let found = false;
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            if(numbers[i]===numbers[j]){
                duplicate = numbers[i];
                found = true;
                break;
            }
        }
        if(found){
            break;
        }
    }
    console.log(duplicate);
});

test('Find the first duplicate number gemini solution: working', () => {
        let numbers =[5, 8, 3, 9, 6, 2, 7, 5, 8];
        let seenNumbers = new Set();
        let duplicate = null; // 1. Create a variable to hold the duplicate value
    
        for (let i = 0; i < numbers.length; i++) {
            if (seenNumbers.has(numbers[i])) {
                duplicate = numbers[i]; // 2. Assign the value to our variable
                break;                  // 3. Use 'break' instead of 'return' to stop the loop
            }
            seenNumbers.add(numbers[i]);
        }
    
        console.log(duplicate); // 4. This will now successfully print: 8
});

test('Reverse an array', () => {
    let numbers = [10, 20, 30, 40, 50];
    let reverse = [];
    for(let i = numbers.length-1; i>=0; i--){
        reverse.push(numbers[i]);
    }
    console.log(reverse);
});

test.only('Find the average of numbers', () => {
    let numbers = [10, 20, 30, 40, 50, 60, 70];
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    let average = sum / numbers.length;
    console.log(average);
});

test.only('Find numbers greater than the average', () => {
    let numbers = [10, 25, 40, 15, 60, 30, 5];
});
