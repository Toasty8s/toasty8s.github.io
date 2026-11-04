# Posting news to PPC Central

The site is static and hosted on GitHub Pages. To publish a story, add an entry to `news.json`; the news page reads that file automatically. No account passwords or separate publishing service are needed.

## Publish a story on GitHub

1. Open [`news.json`](https://github.com/Toasty8s/toasty8s.github.io/blob/main/news.json) and choose **Edit this file**.
2. Add a new story object at the beginning of the array, after the opening `[` and before the first existing story. Put a comma after the new object.
3. Fill in the fields using this example:

```json
{
  "category": "COMMUNITY",
  "title": "Your story headline",
  "excerpt": "A short summary of the story for the news list.",
  "url": "news.html#community",
  "icon": "▤",
  "color": "blue"
}
```

4. Commit the change to `main`. GitHub Pages will deploy the updated news list automatically.

Use a relative URL for a page on this site, or an `https://` URL for an external story. `color` can be `blue`, `green`, or `orange`. Keep the JSON valid: quote text values, and separate entries with commas. The site displays the headline and summary; the `url` is where readers go when they open the story.

For a full article on this static site, create a separate HTML page (for example, `stories/your-story.html`) and set `url` to that page. You can edit `news.json` and create the story page in one commit.
