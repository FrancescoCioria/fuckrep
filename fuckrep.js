function swapArticles() {
  try {
    const freeArticleElement = document
      .querySelector("news-app")
      .shadowRoot.querySelector("news-article")
      .shadowRoot.querySelector(".amp-doc-host")
      .shadowRoot.querySelector(
        '.detail-article_body > div[subscriptions-section="content-not-granted"]'
      );

    const completeArticleElement = document
      .querySelector("news-app")
      .shadowRoot.querySelector("news-article")
      .shadowRoot.querySelector(".amp-doc-host")
      .shadowRoot.querySelector(".detail-article_body > div.paywall");

    freeArticleElement.innerHTML = completeArticleElement.innerHTML;
  } catch (e) {
    setTimeout(swapArticles, 500);
  }
}

swapArticles();
