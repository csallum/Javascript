// T9 key mapping object
const t9Map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
};

/**
 * Generate all possible letter combinations for a given T9 number string.
 * @param {string} digits - String of digits (2-9).
 * @returns {string[]} Array of possible letter combinations.
 */
function t9Combinations(digits) {
    if (!digits || /[^2-9]/.test(digits)) {
        console.error("Invalid input: Only digits 2-9 are allowed.");
        return [];
    }

    // Recursive helper function
    function backtrack(index, path) {
        if (index === digits.length) {
            results.push(path);
            return;
        }
        const letters = t9Map[digits[index]];
        for (let letter of letters) {
            backtrack(index + 1, path + letter);
        }
    }

    const results = [];
    backtrack(0, "");
    return results;
}

// Example usage:
console.log("T9 Map:", t9Map);
console.log("Combinations for '23':", t9Combinations("23"));
console.log("Combinations for '729':", t9Combinations("729"));
