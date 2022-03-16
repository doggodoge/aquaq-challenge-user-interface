import { Code } from '../interfaces/mod';

function parseCode(code: string): Code {
  const splitCode = code.split(' ');
  return { key: Number(splitCode[0]), repeat: Number(splitCode[1]) };
}

function parseCodes(codes: string[]): Code[] {
  return codes.map(parseCode);
}

export { parseCodes };
