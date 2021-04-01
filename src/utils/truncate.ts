export const truncateAddress = (children: string): string => {
  return [children.substring(0, 6), '…', children.substring(children.length - 4)].join('');
};

export const truncateBalance = (balance: string) => {
  if (balance.includes('.')) {
    const parts = balance.split('.');
    return parts[0] + '.' + parts[1].slice(0, 4);
  }
  return balance;
};
