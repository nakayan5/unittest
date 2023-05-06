import type { Article, ArticleInput, Articles, Profile } from "./type";

async function handleResponse<T>(res: Response): Promise<T> {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  } 
  return data;
}

const host = (path: string) => `https://myapi.testing.com${path}`;

export function getMyProfile() {
  return fetch(host("/my/profile")).then(handleResponse<Profile>);
}

export function getMyArticles() {
  return fetch(host("/my/articles")).then(handleResponse<Articles>);
}

export function postMyArticle(input: ArticleInput) {
  return fetch(host("/my/articles"), {
    method: "POST",
    body: JSON.stringify(input),
  }).then(handleResponse<Article>);
}
 