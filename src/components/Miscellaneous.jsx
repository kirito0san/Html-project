const Miscellaneous = () => {
  return (
    <section id="Miscellaneous-Tags">
      <div className="bg-white text-black mx-auto p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Miscellaneous Tags Example</h1>

        {/* Horizontal Rule */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Horizontal Rule</h2>
          <hr className="border-t-2 border-gray-300 my-4" />
          <p className="mb-4">
            This is a horizontal rule example. It separates different sections of content.
          </p>
        </section>

        {/* Line Break */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Line Break</h2>
          <p className="mb-4">
            This is an example of a line break.
            <br />
            The line break tag is used to create a new line within the same paragraph.
          </p>
        </section>

        {/* Details and Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Details and Summary</h2>
          <details className="mb-4">
            <summary className="cursor-pointer font-medium">More Information</summary>
            <p className="mt-2 text-gray-600">
              This is additional information that is hidden by default and shown when the summary is
              clicked.
            </p>
          </details>
        </section>

        {/* Embed, Object, and Iframe */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Embed, Object, and Iframe</h2>

          {/* Embed */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Embed</h3>
            <embed
              src="https://react.dev/"
              width="100%"
              height="200"
              className="border border-gray-300"
            />
          </div>

          {/* Object */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Object</h3>
            <object
              data="https://elzero.org/"
              width="100%"
              height="200"
              className="border border-gray-300"
            >
              <p className="text-red-500">Your browser does not support embedding objects.</p>
            </object>
          </div>

          {/* Iframe */}
          <div>
            <h3 className="text-lg font-medium mb-2">Iframe</h3>
            <iframe
              src="https://tailwindcss.com/docs/installation"
              width="100%"
              height="200"
              className="border border-gray-300"
            ></iframe>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Miscellaneous;
