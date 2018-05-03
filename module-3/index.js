import _ from 'lodash';

export const testFunc3 = () => {
  console.log('module 3', _.defaults({ a: 1 }, { a: 3, b: 3 }));
};
