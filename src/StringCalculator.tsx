function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0][2]);
      numbers = parts[1];
    }
  
    const nums = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives numbers not allowed: ${negatives.join(",")}`);
    }
  
    return nums.reduce((a, b) => a + b, 0);
  }
  
  export default add;
  