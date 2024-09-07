import fs from 'vite-plugin-fs/browser';

export const readFile = async <T>(path: string): Promise<T> => {
  const data = await fs.readFile(path);
  return JSON.parse(data);
};

export const writeFile = async <T>(path: string, data: T): Promise<void> => {
  await fs.writeFile(path, JSON.stringify(data));
};
