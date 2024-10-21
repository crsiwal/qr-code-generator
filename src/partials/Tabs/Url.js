function TabUrl({ text, setText }) {
  const handleInputUrl = newText => {
    setText(newText);
  };

  return (
    <>
      <div>
        <p>Redirect to an existing web URL</p>
        <div class="form-floating">
          <input type="text" className="form-control border-0 border-bottom" placeholder="Enter text or URL" value={text} onChange={e => handleInputUrl(e.target.value)} />
          <label htmlFor="floatingInput">Enter URL</label>
        </div>
        <small className="text-muted">Try something like https://example.com/</small>
      </div>
    </>
  );
}
export default TabUrl;
