const renderTitle = (title = '', showDesc = true) => {
  const arr = ['Lucas Lo'];
  if (showDesc) arr.push('Freelance Front-end Developer');
  if (title) arr.unshift(title);
  return arr.join(' | ');
};

export default renderTitle;
