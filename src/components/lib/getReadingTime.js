// Source: https://daily-dev-tips.com/posts/adding-reading-time-to-astro-the-easy-way/

export function getReadingTime(content) {
  if (!content) return;

  const clean = content.replace(/<\/?[^>]+(>|$)/g, "");

  const numberOfWords = clean.split(/\s/g).length;

  const WORDS_PER_MINUTE = 200;

  return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}
