export const getProxiedImageUrl = (url: string) => {
  try {
    new URL(url);
    return `https://proxy.duckduckgo.com/iu/?u=${url}`;
  } catch (err) {
    return url;
  }
};

export default getProxiedImageUrl;
