const { open } = require('node:fs/promises');

async function findDistance() {
    try {
        let list1 = [], list2 = [], distance = 0;

        const file = await open("./day1input.txt");

        for await (const line of file.readLines()){
            let data = line.split("   ");
            list1.push(data[0]);
            list2.push(data[1]);
        }
        
        list1.sort((a, b) => a - b);
        list2.sort((a, b) => a - b);
        
        for(let i = 0; i < list1.length; i++){
            distance = distance + Math.abs(list2[i] - list1[i]);
        }
        
        console.log(distance);
    } catch (err) {
        console.error(err.message);
    }
}

findDistance();

async function findSimilarities() {
    try {
        let list1 = [], map = new Map(), similarities = 0;

        const file = await open("./day1input.txt");

        for await (const line of file.readLines()){
            let data = line.split("   ");
            list1.push(data[0]);
            
            if(!map.has(data[1])){
                map.set(data[1], 1);
            } else {
                map.set(data[1], map.get(data[1]) + 1);
            }
        }

        for(let i = 0; i < list1.length; i++){
            similarities = similarities + (parseInt(list1[i]) * (map.get(list1[i]) || 0));
            
        }

        console.log(similarities);
    } catch (err) {
        console.error(err.message);
    }
}

findSimilarities();