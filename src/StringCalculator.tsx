function add(numbers: string): number {
    if (numbers === "") return 0;
    const nums = numbers.split(",").map(num => parseInt(num, 10));
    return nums.reduce((a, b) => a + b, 0);
  }
  
  export default add;
  