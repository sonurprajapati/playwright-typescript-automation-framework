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

test('Find the average of numbers', () => {
    let numbers = [10, 20, 30, 40, 50, 60, 70];
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    let average = sum / numbers.length;
    console.log(average);
});

test('Find numbers greater than the average', () => {
    let numbers = [10, 25, 40, 15, 60, 30, 5];
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    console.log(average);
    let greater = [];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]>average){
            greater.push(numbers[i]);
        }
    }
    console.log(greater);
});

test('Find the difference between largest and smallest', () => {
    let numbers = [23, 8, 45, 12, 67, 4, 31];
    let largest = numbers[0];
    let smallest = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        if(largest<numbers[i]){
            largest = numbers[i];
        }
        if(smallest>numbers[i]){
            smallest = numbers[i];
        }
    }
    console.log(largest - smallest);
});

test('Count numbers greater than a given number', () => {
    let numbers = [12, 45, 7, 89, 23, 56, 34, 78];
    let target = 40;
    // let given = [];
    let count = 0;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]>target){
            count++;
        }
    }
    console.log(count);
});

test('Count numbers smaller than a given number', () => {
    let numbers = [18, 5, 42, 9, 31, 14, 50, 7, 26];
    let target = 20;
    // let given = [];
    let count = 0;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]<target){
            count++;
        }
    }
    console.log(count);
});


test('Find the first even number', () => {
    let numbers = [15, 27, 33, 41, 18, 52, 64];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]%2==0){
            console.log(numbers[i]);
            break;
        }
    }
});

test('Find the first number greater than a target', () => {
    let numbers = [12, 18, 25, 31, 9, 45, 52];
    let target = 30;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]>target){
            console.log(numbers[i]);
            break;
        }
    }
});

test('Find the index of a given number', () => {
    let numbers = [15, 28, 42, 7, 63, 19, 34];
    let target = 63;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]==target){
            console.log(i);
            break;
        }
    }
});

test('Count the number of vowels in a string', () => {
    let text = "javascript";
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i<text.length; i++){
        if(vowels.includes(text[i])){
            count++;
        }
    }
    console.log(count);
});

test('Count consonants in a string', () => {
    let text = "automation";
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i<text.length; i++){
        if(!vowels.includes(text[i])){
            count++;
        }
    }
    console.log(count);
});

test('Reverse a string', () => {
    let text = "automation";
    let reverse = "";
    for(let i = text.length - 1; i>=0; i--){
        reverse += text[i];
    }
    console.log(reverse);
});

test('Count a specific character', () => {
    let text = "programming";
    let target = "g";
    let count = 0;
    for(let i =0; i<text.length; i++){
        if(target.includes(text[i])){
            count++;
        }
        // if(target == text[i]){
        //     count++;
        // }
    }
    console.log(count);
});

test('Count words in a sentence', () => {
    let text = "I am learning Playwright automation";
    let words = text.split(" ");
    console.log(words.length);
});

test('Find the longest word', () => {
    let text = "I am learning Playwright automation";
    let words = text.split(" ");
    let longest = words[0];
    for(let i = 1; i<words.length; i++){
        if(longest.length<words[i].length){
            longest = words[i];
        }
    }
    console.log(longest);
});

test('Find the shortest word', () => {
    let text = "I am learning Playwright automation";
    let words = text.split(" ");
    let longest = words[0];
    for(let i = 1; i<words.length; i++){
        if(longest.length>words[i].length){
            longest = words[i];
        }
    }
    console.log(longest);
});

test('Count words starting with a specific letter', () => {
    let text = "apple banana avocado mango apricot orange assess";
    let target = "a";
    let words = text.split(" ");
    let count = 0;
    for(let i =0; i<words.length; i++){
        // if(target == words[i][0]){
        //     count++;
        // }
        if(words[i].startsWith(target)){
            count++;
        }
    }
    console.log(count);
});

test('Remove spaces from a string', () => {
    let text = "I am learning JavaScript";
    let noSpace = text.split(" ");
    let result = "";
    for(let i = 0; i<noSpace.length; i++){
        result += noSpace[i];
    }
    console.log(result);
});

test('Count spaces in a string', () => {
    let text = " Iam learn  ing  JavaScript ";
    let count = 0;
    for(let i = 0; i<text.length; i++){
        if(text[i] == " "){
            count++;
        }
    }
    console.log(count);
});

test('Half reverse a string', () => {
    let text = "rajeev";
    let textHalfCount = text.length/2;
    let textHalf11 = "";
    let textHalf22 = "";
    for(let i = 0; i<textHalfCount; i++){
            textHalf11 += text[i];
    }
    for(let i = textHalfCount; i<text.length; i++){
        textHalf22 += text[i];
    }
    // console.log(textHalf11);
    // console.log(textHalf22);
    // let textHalf1 = text.slice(0, textHalfCount);
    // let textHalf2 = text.slice(textHalfCount);
    let textHalfReverse = "";
    for(let i = textHalf11.length-1; i>=0; i--){
        textHalfReverse += textHalf11[i];
    }
    console.log(textHalfReverse + textHalf22);
});

test('Reverse last two characters', () => {
    let text = "rajeev";
    let remainglength = text.length-2;
    let textHalf1 = "";
    for(let i =0; i<remainglength; i++){
        textHalf1 += text[i];
    }
    let textHalf2 = "";
    for(let i=remainglength; i<text.length; i++){
        textHalf2 += text[i];
    }
    let textHalf2Reverse = "";
    for(let i =textHalf2.length-1; i>=0; i--){
        textHalf2Reverse += textHalf2[i];
    }
    console.log(textHalf1 + textHalf2Reverse);
});

test('Find Duplicate numbers in an array', () => {
    const arr = [4, 2, 7, 2, 8, 4, 9, 7];

    let duplicate = [];
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                duplicate.push(arr[i]);
                break;
            }
        }
    }
    console.log(duplicate);
});

test('Find the longest string in an array', () => {
    let words = ["cat", "elephant", "dog", "tiger", "butterfly"];
    let longest = words[0];
    for(let i = 1; i<words.length; i++){
        if(longest.length<words[i].length){
            longest = words[i];
        }
    }
    console.log(longest);
    
});

test('Count strings longer than a given length', () => {
    let words = ["cat", "elephant", "dog", "tiger", "butterfly", "ox", "computer"];
    let targetLength = 5;
    let count = 0;
    for(let i=0; i<words.length; i++){
        if(words[i].length>targetLength){
            count++;
        }
    }
    console.log(count);
});

test('Find the shortest string in an array', () => {
    let words = ["apple", "kiwi", "banana", "fig", "orange", "pear"];
    let shortest = words[0];
    for(let i=1; i<words.length; i++){
        if(shortest.length>words[i].length){
            shortest = words[i];
        }
    }
    console.log(shortest);
});

test.only('Find strings starting with a specific letter', () => {
    let words = ["apple", "banana", "avocado", "mango", "apricot", "orange"];
    let target = "a";
    let count = 0;
    let strings = [];
    for(let i=0; i<words.length; i++){
        if(words[i][0]==target){
            count++;
            strings.push(words[i]);
        }
    }
    console.log(strings);
});