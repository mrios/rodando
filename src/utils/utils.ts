const getUUIDFromURL = (prefix: string, location: any): string => {
  const v4 = new RegExp(
    /^\/projects\/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\/+)/
  );
  var matched = v4.exec(location.pathname);
  const uuid =
    matched && matched[1]
      ? matched[1].substr(0, matched[1].length - 1).toString()
      : '';

  return uuid;
};

export default getUUIDFromURL;
