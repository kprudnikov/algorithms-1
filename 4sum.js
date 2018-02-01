function fourSum (nums, target) {
    const numsLength = nums.length;
    const result = [];
    nums.sort((a, b) => a-b);

    for(let a = 0; a < numsLength-3; a++) {
        for(let b = a+1; b < numsLength-2; b++) {
            let head = b+1;
            let tail = numsLength-1;
            const subSum = target - (nums[a] + nums[b]);

            while(head < tail) {
                if (nums[head] + nums[tail] === subSum) {
                    result.push([nums[a], nums[b], nums[head], nums[tail]]);
                    head++;
                    tail--;

                    while(nums[head] === nums[head - 1]) head++;
                    while(nums[tail] === nums[tail + 1]) tail--;
                } else if (nums[head] + nums[tail] > subSum) {
                    tail--;
                } else {
                    head++;
                }
            }
            while(nums[b] === nums[b+1]) b++;
        }
        while(nums[a] === nums[a+1]) a++;
    }
    
    return result;
};

console.log(fourSum([0, 0, 0, 0], 0));
