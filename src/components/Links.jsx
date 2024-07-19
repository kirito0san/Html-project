const Links = () => {
  return (
    <section id="Links-and-Navigation">
      <h2>Links and Navigation</h2>
      <div className="p-6 mx-auto w-full max-w-4xl text-black bg-white rounded-lg shadow-lg">
        {/* Navigation */}
        <nav className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Navigation</h2>
          <ul className="pl-4 list-disc list-inside">
            <li className="mb-1">
              <a href="#home-page" className="text-blue-500 hover:underline">
                Home
              </a>
            </li>
            <li className="mb-1">
              <a href="#Text-Content-Page" className="text-blue-500 hover:underline">
                Text
              </a>
            </li>
            <li className="mb-1">
              <a href="#Images-and-Media" className="text-blue-500 hover:underline">
                Images{" "}
              </a>
            </li>
            <li className="mb-1">
              {" "}
              <a href="#Links-and-Navigation" className="text-blue-500 hover:underline">
                Links{" "}
              </a>
            </li>
            <li className="mb-1">
              {" "}
              <a href="#form-page" className="text-blue-500 hover:underline">
                form{" "}
              </a>
            </li>
            <li className="mb-1">
              {" "}
              <a href="#tables-page" className="text-blue-500 hover:underline">
                tables{" "}
              </a>
            </li>
            <li className="mb-1">
              {" "}
              <a href="#list-page" className="text-blue-500 hover:underline">
                list{" "}
              </a>
            </li>
            <li className="mb-1">
              {" "}
              <a href="#Miscellaneous-Tags" className="text-blue-500 hover:underline">
                Miscellaneous{" "}
              </a>
            </li>
          </ul>
        </nav>

        {/* Anchor Links */}
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Anchor Links</h2>
          <p className="mb-4">
            Here is an{" "}
            <a href="#section1" className="text-blue-500 hover:underline">
              anchor link
            </a>{" "}
            to section 1.
          </p>
          <p className="mb-4">
            Here is an{" "}
            <a href="#section2" className="text-blue-500 hover:underline">
              anchor link
            </a>{" "}
            to section 2.
          </p>
          <hr className="my-4 border-t-2 border-gray-300" />
        </section>

        {/* Sections for Anchor Links */}
        <section id="section1" className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Section 1</h2>
          <p>This is Section 1. You can link to this section using an anchor link.</p>
          <a href="#top" className="text-blue-500 hover:underline">
            Back to top
          </a>
        </section>

        <section id="section2" className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Section 2</h2>
          <p>This is Section 2. You can link to this section using an anchor link.</p>
          <a href="#top" className="text-blue-500 hover:underline">
            Back to top
          </a>
        </section>

        {/* Email and Telephone Links */}
        <section>
          <h2 className="mb-2 text-xl font-semibold">Email and Telephone Links</h2>
          <p className="mb-4">
            Email us at{" "}
            <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
              info@example.com
            </a>
          </p>
          <p>
            Call us at{" "}
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              +1 (234) 567-890
            </a>
          </p>
        </section>
      </div>
    </section>
  );
};

export default Links;
