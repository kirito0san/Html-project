const Table = () => {
  return (
    <section id="tables-page">
      <h2>Tables</h2>
      <h3>Basic Table Structure</h3>
      <div className="bg-white mx-auto overflow-x-auto text-black p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <table className="min-w-full divide-y divide-gray-200">
          <caption className="text-lg font-semibold mb-4">Sample Table</caption>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">ahmed</td>
              <td className="px-6 py-4 whitespace-nowrap">Software Engineer</td>
              <td className="px-6 py-4 whitespace-nowrap">ahmed@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">Admin</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">mohamed fathy</td>
              <td className="px-6 py-4 whitespace-nowrap">Product Manager</td>
              <td className="px-6 py-4 whitespace-nowrap">mohamed@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">User</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">sasa sasa</td>
              <td className="px-6 py-4 whitespace-nowrap">Designer</td>
              <td className="px-6 py-4 whitespace-nowrap">sasa@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">Guest</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Anna Green</td>
              <td className="px-6 py-4 whitespace-nowrap" colSpan="2">
                Marketing Specialist
              </td>
              <td className="px-6 py-4 whitespace-nowrap">User</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap" rowSpan="2">
                ali yasser
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Business Analyst</td>
              <td className="px-6 py-4 whitespace-nowrap"> aliyasser@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">Admin</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Project Manager</td>
              <td className="px-6 py-4 whitespace-nowrap">aliyasser@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">User</td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                colSpan="4"
              >
                Footer Information
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Table;
