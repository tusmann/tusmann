const article = document.querySelector('.reader');
Bindery.makeBook({
  content: article,
  pageSetup: {
    size: { width: '4in', height: '6in' },
    margin: { top: '12pt', inner: '12pt', outer: '16pt', bottom: '20pt' },
  },
});
