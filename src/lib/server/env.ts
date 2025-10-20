/**
 * Server environment variable utilities
 * Centralized validation and retrieval of environment variables
 */

export type EnvKey = 'PASSWORD' | 'TELEGRAM_BOT_TOKEN' | 'TELEGRAM_CHAT_ID' | 'IPINFO_TOKEN';

export class EnvValidationError extends Error {
  constructor(key: EnvKey) {
    super(`Missing or invalid environment variable: ${key}`);
    this.name = 'EnvValidationError';
  }
}

export const getRequiredEnv = (key: EnvKey): string => {
  const value = process.env[key];
  
  if (!value) {
    throw new EnvValidationError(key);
  }
  
  return value;
};

export const getOptionalEnv = (key: EnvKey, defaultValue: string = ''): string => {
  return process.env[key] || defaultValue;
};

export const validateEnvVars = (keys: EnvKey[]): { [K in EnvKey]?: string } => {
  const result: { [K in EnvKey]?: string } = {};
  
  for (const key of keys) {
    const value = process.env[key];
    if (value) {
      result[key] = value;
    }
  }
  
  return result;
};
