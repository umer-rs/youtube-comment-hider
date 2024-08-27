// function hideComments() {
//     const commentsSection = document.getElementById('comment-teaser');
//     if (!commentsSection) return;
//     const parent = commentsSection.children;
//     if (!parent || parent.length < 1) return;
//     const child = parent[0];
//     if (!child || child.length < 2) return;
//     child.innerText = '';
// }
function hideComments() {
  const commentTeaser = document.querySelector('#comment-teaser #content-renderer #teaser-text');
  if (commentTeaser) {
    commentTeaser.style.display = 'none';
  }
}

const observer = new MutationObserver(hideComments);
observer.observe(document.body, { childList: true, subtree: true });
hideComments();