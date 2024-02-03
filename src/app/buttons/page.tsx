const ButtonsPage = () => {
  return (
    <main>
      <div className="my-2">
        <button>I am a button</button>
      </div>
      <div className="my-2">
        <button className="btn">I am a fancy button</button>
      </div>
      <div className="my-2">
        <input placeholder="Input placeholder" />
      </div>
      <div className="my-2">
        <button disabled className="btn disabled:opacity-50">I am a fancy button</button>
      </div>
    </main>
  );
};

export default ButtonsPage;
