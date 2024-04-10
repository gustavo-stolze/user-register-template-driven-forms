import zxcvbn from 'zxcvbn';

export const getPasswordStrengthValue = (password: string): number => {
  if (!password) return 0;
  const result = zxcvbn(password);

  const WEAK_PASSWORD = result.score <= 2;
  const MEDIUM_PASSWORD = result.score <= 3;

  if (!WEAK_PASSWORD && !MEDIUM_PASSWORD) return 100;

  return WEAK_PASSWORD ? 30 : 60;
};
