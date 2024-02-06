const getBasePath = (path: string) => {
  // /shop/1 => /shop/1
  // /shop/1/checkout => /shop/1
  const splitPath = path.split("/");
  if (splitPath.length > 2) {
    return `/${splitPath[1]}/${splitPath[2]}`;
  }
  return path;
};

export {
  getBasePath,
}
