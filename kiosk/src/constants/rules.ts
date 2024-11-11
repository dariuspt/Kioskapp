import { RegisterOptions } from 'react-hook-form';

export const DEFAULT_VALIDATION_RULE: RegisterOptions = {
  validate: (value) => Boolean(value),
};

export const STRING_VALIDATION_RULE: RegisterOptions = {
  validate: (value: string) => Boolean(value.trim()),
};

export const NUMBER_VALIDATION_RULE: RegisterOptions = {
  validate: (value: string) =>
    Boolean(value.trim() && Number(value)) ||
    Boolean(value.trim() && value.trim() === '0'),
};

export const ARRAY_VALIDATION_RULE: RegisterOptions = {
  validate: (value: []) => value.length !== 0,
};

export function validateFileName(value, files) {
  if (!value) return true;

  const fileName = value.name.toLowerCase();
  const exists = files.some((file) => file.filename.toLowerCase() === fileName);

  return !exists || 'File with this name already exists';
}
