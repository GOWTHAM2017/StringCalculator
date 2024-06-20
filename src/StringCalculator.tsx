function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterPart = parts[0].slice(2);
        const delimiterMatches = delimiterPart.match(/\[(.*?)\]/g);

        if (delimiterMatches && delimiterMatches.length > 0) {
            delimiter = new RegExp(delimiterMatches.map(match => {
                return match.slice(1, -1).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            }).join('|'), 'g');
        } else {
            delimiter = new RegExp(delimiterPart.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        }

        numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negatives = nums.filter(num => num < 0);
    
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    return nums.filter(num => num <= 1000).reduce((a, b) => a + b, 0);
}

export default add;