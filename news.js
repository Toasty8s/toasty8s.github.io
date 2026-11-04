/* Render stories from news.json using text nodes (no HTML injection). */
(() => {
  const feed = document.getElementById('news-feed');
  if (!feed) return;

  const allowedColors = new Set(['blue', 'green', 'orange']);
  const safeHref = (value) => {
    if (typeof value !== 'string') return '#';
    if (value.startsWith('#') || value.startsWith('./') || value.startsWith('../')) return value;
    try {
      const url = new URL(value, window.location.href);
      if (url.origin === window.location.origin || url.protocol === 'https:' || url.protocol === 'http:') return value;
    } catch { /* Use the safe fallback below. */ }
    return '#';
  };

  fetch('news.json')
    .then((response) => {
      if (!response.ok) throw new Error('Could not load news list');
      return response.json();
    })
    .then((stories) => {
      if (!Array.isArray(stories) || stories.length === 0) {
        feed.replaceChildren(Object.assign(document.createElement('p'), { className: 'news-loading', textContent: 'No stories yet. Check back soon.' }));
        return;
      }

      const fragment = document.createDocumentFragment();
      stories.forEach((story) => {
        if (!story || typeof story.title !== 'string' || typeof story.excerpt !== 'string') return;
        const article = document.createElement('article');
        article.className = 'news-article';

        const icon = document.createElement('div');
        const color = allowedColors.has(story.color) ? story.color : 'blue';
        icon.className = `article-icon article-${color}`;
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = typeof story.icon === 'string' ? story.icon : '▤';

        const copy = document.createElement('div');
        copy.className = 'article-copy';
        const category = document.createElement('p');
        category.className = 'card-kicker';
        category.textContent = typeof story.category === 'string' ? story.category : 'PPC CENTRAL';
        const heading = document.createElement('h2');
        const titleLink = document.createElement('a');
        titleLink.href = safeHref(story.url);
        titleLink.textContent = story.title;
        heading.append(titleLink);
        const excerpt = document.createElement('p');
        excerpt.textContent = story.excerpt;
        const readLink = document.createElement('a');
        readLink.className = 'text-link';
        readLink.href = safeHref(story.url);
        readLink.textContent = 'Read more ›';

        copy.append(category, heading, excerpt, readLink);
        article.append(icon, copy);
        fragment.append(article);
      });
      feed.replaceChildren(fragment);
      if (!feed.children.length) feed.textContent = 'No stories yet. Check back soon.';
    })
    .catch(() => {
      feed.replaceChildren(Object.assign(document.createElement('p'), { className: 'news-loading', textContent: 'News could not be loaded right now. Please try again later.' }));
    });
})();
