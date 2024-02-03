const SpacingPage = () => {
  return (
    <main>
      <div className="space-y-2">
        <div className="-mb-4">
          <button>I am a button</button>
        </div>
        <div>
          <button className="btn">I am a fancy button</button>
        </div>
        <div>
          <input placeholder="Input placeholder" />
        </div>
      </div>
      <div>
        <div className="bg-white max-w-max px-4 py-2 mx-auto rounded shadow-md text-center space-x-8">
          <a href="#">Courses</a>
          <a href="#">Learn</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
        </div>
      </div>
    </main>
  );
};

export default SpacingPage;
