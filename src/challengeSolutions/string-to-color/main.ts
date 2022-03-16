import { chunk } from 'lodash';
import input from './data/input';

// Set the string's non-hexadecimal characters to 0.
// Pad the string length to the next multiple of 3.
// Split the result into 3 equal sections.
// The first two digits of each remaining section are the hex components.

function parse(text: string): string {
  const hexChars = '0123456789abcdef'.split('');
  const workingArray = [...text].map((char) =>
    hexChars.includes(char) ? char : '0'
  );
  const numToPad = Math.abs((workingArray.length % 3) - 3);
  console.log(numToPad);
  for (let i = 0; i < numToPad; i++) {
    workingArray.push('0');
  }
  return chunk(workingArray, workingArray.length / 3)
    .map((currentChunk) => currentChunk.slice(0, 2).join(''))
    .join('');
}

function getSolution(): string {
  return `#${parse(input).toUpperCase()}`;
}

export default getSolution;
