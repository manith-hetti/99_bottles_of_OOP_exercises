export class Bottles {

    verse(count) {
        if (count == 2) {
            return (`${count} bottles of beer on the wall, ` +
        `${count} bottles of beer.\n` +
        `Take one down and pass it around, ` +
        `${count - 1} bottle of beer on the wall.\n`)
        }
        if (count == 1) {
            return (`${count} bottle of beer on the wall, ` +
        `${count} bottle of beer.\n` +
        `Take it down and pass it around, ` +
        `no more bottles of beer on the wall.\n`)
        }
        if (count == 0) {
            return (`No more bottles of beer on the wall, ` +
        `no more bottles of beer.\n` +
        `Go to the store and buy some more, ` +
        `99 bottles of beer on the wall.\n`
)
        }
        let song = `${count} bottles of beer on the wall, ` +
        `${count} bottles of beer.\n` +
        `Take one down and pass it around, ` +
        `${count - 1} bottles of beer on the wall.\n`
        return(song);
    }

    verses(highCount, lowCount) {
        let someSong = this.verse(highCount);
        for (let i = Number(highCount) - 1; i >= Number(lowCount); i--) {
            someSong = someSong.concat("\n", this.verse(String(i)));
        }
        return someSong;
    }

    song() {
        return this.verses(99, 0);
    }
}


