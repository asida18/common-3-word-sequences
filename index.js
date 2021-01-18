#!/usr/bin/env node 

// Code to return the 100 most common three word sequences from given text(s).

// filesystem module
const fs = require('fs');
// async module
const async = require('async')

const args = process.argv.slice(2);
const isTTY = process.stdin.isTTY;
const stdin = process.stdin;

// No stdin and no arguments
if (isTTY && args.length === 0) {
    console.log("** Please pass in text or file(s) to process **");
} else if (isTTY && args.length !== 0) { // Passed in args
    readFiles();
} else {
    // read from stdin
    handlePipedContent();
}

// File reading method
function readFiles() {
    async.map(args, fs.readFile, (err, files) => {
        if (err) throw err;

        files.forEach((file) => console.log(groupText(file.toString())));
    });
}

// Handle piped content stdin
function handlePipedContent() {
    let data = '';
    
    stdin.on('readable', () => {
        const chunk = stdin.read();
        if (chunk !== null) {
            data += chunk;
        }
    });
    stdin.on('end', () => console.log(groupText(data)));
}

// Given text file, categorize into hash with key=3wordsequenceString value=#ofOccurences
function groupText(txt) {
    let sequence = '';
    let hash = {};

    const splitText = txt.split(/\s+/);
    splitText.forEach((word, index) => {
        if (splitText[index + 3] !== undefined) {
            sequence = word.concat(" ", splitText[index+1], " ", splitText[index+2]).toLowerCase();
            hash[sequence] !== undefined ? hash[sequence]++ : hash[sequence] = 1;
        } 
    })

    return retrieveNAmount(sortBy(hash));
}

// given an array return N first results from list
function retrieveNAmount(arr, n = 100) {
    return arr.slice(0, n);
}

// given an obj sort by key values in asc/desc 
function sortBy(hash, order = 'desc') {
    return Object.entries(hash).sort((a,b) => order === 'desc' ? b[1] - a[1] : a[1] - b[1] )
}