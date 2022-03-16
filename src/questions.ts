import { decodeMessage as solutionZero } from './challengeSolutions/t9';
import { getSolution as solutionOne } from './challengeSolutions/string-to-color';
import { solution as solutionFive } from './challengeSolutions/dice-game/main';

interface QuestionBrief {
  index: number;
  name: string;
  shortDescription: string;
  link?: string;
  code?: string;
  calculateAnswer: () => string;
}

const questions: QuestionBrief[] = [
  {
    index: 0,
    name: "What's a numpad?",
    shortDescription: 'Decode a string encoded using t9.',
    link: 'https://challenges.aquaq.co.uk/challenge/0',
    code: 'https://github.com/doggodoge/aquaq-challenge-zero',
    calculateAnswer: solutionZero,
  },
  {
    index: 1,
    name: 'Rose by any other name',
    shortDescription: 'Convert an arbitrary string into a color hex code.',
    link: 'https://challenges.aquaq.co.uk/challenge/1',
    calculateAnswer: solutionOne,
  },
  {
    index: 5,
    name: 'Snake eyes',
    shortDescription:
      'Rotate two dice with different starting positions' +
      ' along various axis. When the front face matches, we add that to a sum.',
    link: 'https://challenges.aquaq.co.uk/challenge/5',
    calculateAnswer: () =>
      solutionFive(
        'LRUDDLRDLLDRUUUURLUDLLDLUDRURRDLUDRDURUURDLRULDULLRDRLLLDRDRRR' +
          'LLDLRUUUDRLRDRLDRRUURDRLUDUUDUDLLDRULRLDRRLUUURRDDUDRDRURRLRRLLDRUUU' +
          'RLLRLRURRRUDUDURUDRURDRDDDURDLUDDLDUDRULDRULURLUULLLURDRLDUDRDUDRLD' +
          'DRUULLLULRLDUURUUDRDLLDRRDRLLRUUURLDRULUDDRDDLDRURURR'
      ),
  },
];

export default questions;
