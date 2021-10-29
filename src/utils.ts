import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const createPath = (keys: string[]) => {
  const path = `/${keys.map((key) => slugify(key, { lower: true })).join('/')}`;

  return path;
};
