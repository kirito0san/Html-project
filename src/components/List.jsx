const List = () => {
  return (
    <section id="list-page">
      <h2>Lists</h2>
      <div className="bg-white mx-auto text-black p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Lists Example</h1>
        {/* Ordered List */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ordered List</h2>
          <ol className="list-decimal list-inside pl-4">
            <li className="mb-1">First item</li>
            <li className="mb-1">Second item</li>
            <li className="mb-1">Third item</li>
            <li className="mb-1">Fourth item</li>
          </ol>
        </section>
        {/* Unordered List */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Unordered List</h2>
          <ul className="list-disc list-inside pl-4">
            <li className="mb-1">First item</li>
            <li className="mb-1">Second item</li>
            <li className="mb-1">Third item</li>
            <li className="mb-1">Fourth item</li>
          </ul>
        </section>
        {/* Definition List */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Definition List</h2>
          <dl className="pl-4">
            <dt className="font-medium">HTML</dt>
            <dd className="mb-2 ml-4 text-gray-600">
              The standard markup language for creating web pages.
            </dd>
            <dt className="font-medium">CSS</dt>
            <dd className="mb-2 ml-4 text-gray-600">
              A style sheet language used for describing the presentation of a document written in a
              markup language like HTML.
            </dd>
            <dt className="font-medium">JavaScript</dt>
            <dd className="mb-2 ml-4 text-gray-600">
              A programming language commonly used to create interactive effects within web
              browsers.
            </dd>
          </dl>
        </section>
      </div>
    </section>
  );
};

export default List;
