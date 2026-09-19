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

test.only('palindrome', () => {
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

