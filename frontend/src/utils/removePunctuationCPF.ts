export function removePunctuationCPF(code: string) {
  return code.replace(/[^\d]+/g, '');
}
