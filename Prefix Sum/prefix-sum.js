class PrefixSum{
    constructor(array, start, end){
        this.start = start;
        this.end = end;
        this.array = array;
        this.prefixSumArray = new Array(this.array.length + 1).fill(0);

        // preprocess
        for(let i=0; i < this.array.length ; i++){
            const item = this.array[i] + this.prefixSumArray[i]
            this.prefixSumArray[i+1] = item
        }
    }

    sumRange(){
        // find sum range
        const sum = this.prefixSumArray[this.end +1 ] - this.prefixSumArray[this.start]
        return sum; 
    }

}

const array = [1,3,5,5,6,7,8,9,0,56,7,53]

const sum = new PrefixSum(array, 0, 2);

console.log(sum.sumRange())