export function removePunctuationPhone(code: string) {
  return code.replace(/[^0-9]/, '');
}
