import React from 'react';

function App({news}:any) {
  return (
    <main>
      <button><- wstecz</button>
      <h2>{news.title}</h2>
      <h4>{news.by}</h4>
      <a>full news</a>
      <section>komentarze</section>
    </main>
  );
}

export default App;
