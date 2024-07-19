const Image = () => {
  return (
    <section id="Images-and-Media">
      <h2>Images and Media</h2>
      <div className="p-6 mx-auto w-full max-w-4xl text-black bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Images and Media Example</h1>

        {/* Embedding Images */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Embedding Images</h2>
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="mb-4 rounded shadow"
          />
          <p className="text-gray-600">
            This is an example of an embedded image using the <code>img</code> tag.
          </p>
        </section>

        {/* Using Figure and Figcaption */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Figure and Figcaption</h2>
          <figure className="mb-4">
            <img
              src="https://via.placeholder.com/400"
              alt="Placeholder"
              className="mb-2 rounded shadow"
            />
            <figcaption className="text-center text-gray-600">
              This is a caption for the above image.
            </figcaption>
          </figure>
        </section>

        {/* Embedding Audio */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Embedding Audio</h2>
          <audio controls className="mb-4 w-full">
            <source src="./assets/21.mp4" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-gray-600">
            This is an example of an embedded audio using the <code>audio</code> tag.
          </p>
        </section>

        {/* Embedding Video */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Embedding Video</h2>
          <video controls className="mb-4 w-full">
            <source src="./assets/fashel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-600">
            This is an example of an embedded video using the <code>video</code> tag.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Image;
