class PrefixSum{
    constructor(array, start, end){
        this.start = start;
        this.end = end;
        this.array = array;
        this.prefixSumArray = [];
    }

    sumRange(){
        // preprocess
        for(let i=0; i < this.array.length ; i++){
            if(i === 0){
                const item = this.array[i]
                this.prefixSumArray.push(item)
            }else{
                const item = this.array[i] + this.prefixSumArray[i-1]
                this.prefixSumArray.push(item)
            }
        }

        // find sum range
        const sum = this.start === 0 ? this.prefixSumArray[this.end] :this.prefixSumArray[this.end] - this.prefixSumArray[this.start -1]
        return sum; 
    }

}

const array = [1,3,5,5,6,7,8,9,0,56,7,53]

const sum = new PrefixSum(array, 0, 6);

console.log(sum.sumRange())