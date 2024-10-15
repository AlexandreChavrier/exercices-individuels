class Plate {
    constructor() {
        this.cases = Array(12).fill(3);
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    }

    display() {
        console.log(`${this.letters.slice(0, 6).join("  ")}`);
        console.log(`(${this.cases.slice(0, 6).join(")(")})`);
        console.log(`(${this.cases.slice(6).join(")(")})`);
        console.log(`${this.letters.slice(6).join("  ")}`);
    }

    isEmpty() {
        if(this.cases.reduce((acc, curr) => acc + curr, 0) === 0) {
            return true;
        }
        return false;
    }

    sow(index) {
        let currentIndex = index;
        let seeds = this.cases[currentIndex];
        this.cases[currentIndex] = 0;
        while (seeds > 0) {
            if (currentIndex % 12 === 0) {
                currentIndex = 0;
            }
            currentIndex++;
            this.cases[currentIndex] += 1;
            seeds--;
        }
        return this.display();
    }

    harvest(index) {
        let currentIndex = index;
        let seeds = this.cases[currentIndex];
        console.log(seeds)
            while (seeds === 2 || seeds === 3) {
                this.cases[currentIndex] = 0;
                currentIndex = (currentIndex - 1 + 12) % 12;
                seeds = this.cases[currentIndex]
                // console.log("while :" + seeds)
        }
        return this.display();
    }
}




let plate = new Plate();
// plate.display()
// console.log(plate.isEmpty())
console.log(plate.sow(5))
console.log(plate.harvest(3))


