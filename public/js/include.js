// include.js - simple partial includer
// Usage: <div data-include="partials/header.html"></div>
document.addEventListener('DOMContentLoaded', function(){
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const url = el.getAttribute('data-include');
    if(!url) return;
    fetch(url).then(resp => {
      if(!resp.ok) throw new Error('Failed to load ' + url);
      return resp.text();
    }).then(html => {
      el.innerHTML = html;
    }).catch(err => {
      console.error(err);
      // fallback: leave empty or show a message
      el.innerHTML = '';
    });
  });
});