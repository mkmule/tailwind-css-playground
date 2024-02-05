'use client';

const FormPage = () => {
  return (
    <main>
      <form onSubmit={event => event.preventDefault()}
            className="container mx-auto space-y-6 rounded-md border-2 border-purple-600 bg-white p-4 text-purple-950 shadow-md">
        <div className="space-y-1">
          <label htmlFor="required" className="block text-sm font-semibold">Required Field</label>
          <input id="required" placeholder="Required Field" required className="p-2 outline rounded-lg"/>
        </div>

        <div className="space-y-1">
          <label htmlFor="disabled" className="block text-sm font-semibold">Disabled Field</label>
          <input id="disabled" placeholder="Disabled Field" disabled className="p-2 outline disabled:opacity-50"/>
        </div>

        <div className="space-y-1">
          <label htmlFor="input" className="block text-sm font-semibold"> Input Field </label>
          <input id="input" placeholder="Input Field" className="p-2 outline"/>
        </div>

        <div className="space-x-1">
          <input id="terms" type="checkbox" className="p-2 checked:bg-amber-200"/>
          <label htmlFor="terms">I accept the terms and conditions.</label>
        </div>

        <div className="space-x-2">
          <button>Submit</button>
          <button>Reset</button>
          <button disabled>Disabled</button>
        </div>
      </form>

    </main>
  );
};

export default FormPage;
