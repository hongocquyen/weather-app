import { ENV } from './constants';

export const API_ENDPOINT = (() => {
  const apis: Record<typeof ENV, string> = {
    production: 'production',
    staging: 'staging',
  };
  return apis[ENV];
})();
