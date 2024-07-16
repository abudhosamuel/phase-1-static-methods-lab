class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Static method to sanitize a string by removing all non-alphanumeric characters
  // except for dashes, single quotes, and spaces
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  // Static method to titleize a string
  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');

    return words
      .map((word, index) => {
        if (index === 0) {
          return this.capitalize(word);
        } else if (exceptions.includes(word.toLowerCase())) {
          return word.toLowerCase();
        } else {
          return this.capitalize(word);
        }
      })
      .join(' ');
  }
}

// Example usage:
console.log(Formatter.capitalize('hello')); // "Hello"
console.log(Formatter.sanitize("Hello, world! It's a beautiful day.")); // "Hello world It's a beautiful day"
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); // "The Quick Brown Fox Jumps Over the Lazy Dog"
