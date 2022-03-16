import input from './data/input';
import { parseCodes } from './utils/mod';

const codes = parseCodes(input.split('\n'));

const t9Map = new Map<number, string[]>();
t9Map.set(2, ['a', 'b', 'c']);
t9Map.set(3, ['d', 'e', 'f']);
t9Map.set(4, ['g', 'h', 'i']);
t9Map.set(5, ['j', 'k', 'l']);
t9Map.set(6, ['m', 'n', 'o']);
t9Map.set(7, ['p', 'q', 'r', 's']);
t9Map.set(8, ['t', 'u', 'v']);
t9Map.set(9, ['w', 'x', 'y', 'z']);
t9Map.set(0, [' ']);

function decodeMessage(): string {
  return codes
    .map((code) => {
      return t9Map?.get(code.key)?.at(code.repeat - 1) ?? '';
    })
    .join('');
}

export default decodeMessage;
