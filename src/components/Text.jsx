const Text = () => {
  return (
    <section id="Text-Content-Page">
      <h2>Text Content Page</h2>
      <div className="p-6 mx-auto w-full max-w-4xl text-black bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Text Content Example</h1>

        {/* Headings */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Headings</h2>
          <h1 className="mb-2 text-4xl">Heading 1</h1>
          <h2 className="mb-2 text-3xl">Heading 2</h2>
          <h3 className="mb-2 text-2xl">Heading 3</h3>
          <h4 className="mb-2 text-xl">Heading 4</h4>
          <h5 className="mb-2 text-lg">Heading 5</h5>
          <h6 className="mb-2 text-base">Heading 6</h6>
        </section>

        {/* Paragraphs, Blockquotes, and Preformatted Text */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            Paragraphs, Blockquotes, and Preformatted Text
          </h2>
          <p className="mb-4">
            This is a paragraph. It contains a block of text that is typically used to convey
            information or provide context.
          </p>
          <blockquote className="pl-4 mb-4 italic border-l-4 border-gray-300">
            This is a blockquote. It is typically used to quote someone or something.
          </blockquote>
          <pre className="p-4 mb-4 bg-gray-200 rounded">
            {`This is preformatted text.
It preserves both spaces and line breaks.`}
          </pre>
        </section>

        {/* Bold, Italic, Underline, Strikethrough */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Bold, Italic, Underline, Strikethrough</h2>
          <p className="mb-2">
            <strong>Bold text</strong>
          </p>
          <p className="mb-2">
            <em>Italic text</em>
          </p>
          <p className="mb-2">
            <u>Underlined text</u>
          </p>
          <p className="mb-2">
            <del>Strikethrough text</del>
          </p>
        </section>

        {/* Subscript and Superscript */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Subscript and Superscript</h2>
          <p className="mb-2">
            This is <sub>subscript</sub> text.
          </p>
          <p className="mb-2">
            This is <sup>superscript</sup> text.
          </p>
        </section>

        {/* Abbreviations, Citations, and Inline Quotes */}
        <section>
          <h2 className="mb-2 text-xl font-semibold">
            Abbreviations, Citations, and Inline Quotes
          </h2>
          <p className="mb-2">
            The abbreviation for "example" is <abbr title="example">e.g.</abbr>.
          </p>
          <p className="mb-2">
            This is a citation: <cite>Shakespeare</cite>.
          </p>
          <p className="mb-2">
            This is an inline quote: <q>To be or not to be, that is the question.</q>
          </p>
        </section>
      </div>
    </section>
  );
};

export default Text;
