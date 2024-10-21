function TabText({ text, setText }) {
  const handleInputUrl = newText => {
    setText(newText);
  };

  return (
    <>
      <div>
        <p>Display a short message</p>
        <div className="form-floating">
          <textarea className="form-control border-0 border-bottom" placeholder="Enter text" style={{ height: "150px" }} value={text} onChange={e => handleInputUrl(e.target.value)} />
          <label htmlFor="floatingInput">Add text</label>
        </div>
      </div>
    </>
  );
}
export default TabText;
