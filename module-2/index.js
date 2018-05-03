import _ from 'lodash';

export const testFunc2 = () => {
  console.log('module 2', _.defaults({ a: 1 }, { a: 3, b: 3 }));
};
