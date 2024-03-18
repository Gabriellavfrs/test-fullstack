export const formatPhone = (phoneNumber: string) => {
  // Remove caracteres indesejados
  phoneNumber = phoneNumber.replace(/\D/g, '');

  // Limita a quantidade máxima de caracteres
  phoneNumber = phoneNumber.substring(0, 11);

  // Formatação para números de telefone com 8 dígitos
  if (phoneNumber.length <= 8) {
    phoneNumber = phoneNumber.replace(/^(\d{4})(\d{4})$/, '$1-$2');
  }
  // Formatação para números de telefone com 9 dígitos
  else {
    phoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }

  return phoneNumber;
}