const ModalPage = () => {
  return (
    <div>
      <h2>My Solution (practice)</h2>
      <div className="border-2 border-purple-500 p-4 w-[450px] bg-white rounded">
        <h1 className="text-xl text-purple-500 mb-4 font-semibold">An Important Alert</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in metus ornare, volutpat mauris
          sit amet, ornare est. Praesent massa nulla, lacinia sit amet neque sed, ornare porttitor ante.
          Nunc vulputate ultrices sollicitudin. Quisque in tristique felis, vel blandit felis. Aliquam ut
          vestibulum massa. Proin at lectus in risus ultrices interdum a fringilla nisi. Maecenas
          tristique augue at pretium consectetur.
        </p>
        <div className="mt-4">
          <button className="btn">Confirm</button>
          <button className="btn text-black bg-white ml-2">Cancel</button>
        </div>
      </div>

      <div className="w-full border-2 border-black my-2" />

      <h2>Steve Solution</h2>
      <div className="w-96 rounded-md border-2 border-purple-400 bg-white p-4 shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold text-purple-600">An Important Alert</h1>
        <p className="mb-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in metus ornare,
          volutpat mauris sit amet, ornare est. Praesent massa nulla, lacinia sit amet neque sed, ornare porttitor ante.
          Nunc vulputate ultrices sollicitudin. Quisque in tristique felis, vel blandit felis. Aliquam ut vestibulum
          massa. Proin at lectus in risus ultrices interdum a fringilla nisi. Maecenas tristique augue at pretium
          consectetur.</p>
        <div>
          <button className="rounded border-2 border-purple-600 bg-purple-400 px-2 py-1">Confirm</button>
          <button className="rounded border-2 border-purple-400 bg-white px-2 py-1 text-purple-400">Cancel</button>
        </div>
      </div>


    </div>
  );
};

export default ModalPage;
