export function formatCPF(cpf: string): string {
  // Remove caracteres indesejados
  cpf = cpf.replace(/\D/g, '');

  // Limita a quantidade máxima de caracteres
  cpf = cpf.substring(0, 11);

  // Adiciona as pontuações
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return cpf;
}
