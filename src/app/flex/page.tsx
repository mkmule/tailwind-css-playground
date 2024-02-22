'use client';

const FlexPage = () => {
  return (
    <main>
      <section className="flex flex-col gap-1 sm:gap-2 md:gap-4">
        <article
          className="from-bg-slate-50 to-bg-slate-100 rounded-lg border-2 border-slate-200 bg-slate-50 bg-gradient-to-br p-8 shadow-lg">
          <blockquote>Be yourself; everyone else is already taken.</blockquote>
          <cite className="before:content-['—_'] block text-right font-semibold text-rose-700 before:text-slate-500">Oscar
            While</cite>
        </article>
        <article
          className="from-bg-slate-50 to-bg-slate-100 rounded-lg border-2 border-slate-200 bg-slate-50 bg-gradient-to-br p-8 shadow-lg">
          <blockquote>In three words I can sum up everything I've learned about life: it goes on.</blockquote>
          <cite className="before:content-['—_'] block text-right font-semibold text-rose-700 before:text-slate-500">Robert
            Frost</cite>
        </article>
        <article
          className="from-bg-slate-50 to-bg-slate-100 rounded-lg border-2 border-slate-200 bg-slate-50 bg-gradient-to-br p-8 shadow-lg">
          <blockquote>Twenty years from now you will be more disappointed by the things that you didn't do than by the
            ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your
            sails. Explore. Dream. Discover.
          </blockquote>
          <cite className="before:content-['—_'] block text-right font-semibold text-rose-700 before:text-slate-500">H.
            Jackson Brown Jr.</cite>
        </article>
        <article
          className="from-bg-slate-50 to-bg-slate-100 rounded-lg border-2 border-slate-200 bg-slate-50 bg-gradient-to-br p-8 shadow-lg">
          <blockquote>Love is the ultimate outlaw. It just won't adhere to any rules. The most any of us can do is to
            sign on as its accomplice. Instead of vowing to honor and obey, maybe we should swear to aid and abet. That
            would mean that security is out of the question. The words "make" and "stay" become inappropriate. My love
            for you has no strings attached. I love you for free.
          </blockquote>
          <cite className="before:content-['—_'] block text-right font-semibold text-rose-700 before:text-slate-500">Tom
            Robbins</cite>
        </article>
      </section>


    </main>
  );
};

export default FlexPage;
