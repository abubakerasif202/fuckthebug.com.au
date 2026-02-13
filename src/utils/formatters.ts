export const formatDate = (date: Date | string) => {
  const parsed = typeof date === 'string' ? new Date(date) : date;
  return parsed.toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' });
};
