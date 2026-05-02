import StatusBadge from "./StatusBadge";

function TrackTable({ fabrics, onMoveNext }) {
  return (
    <section className="table-wrapper">
      <h2>Fabric Tracking Table</h2>

      <table>
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Fabric Type</th>
            <th>Color</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {fabrics.map((fabric) => (
            <tr key={fabric.id}>
              <td>{fabric.barcode}</td>
              <td>{fabric.fabricType}</td>
              <td>{fabric.color}</td>
              <td>{fabric.supplier}</td>
              <td>{fabric.quantity} m</td>
              <td>
                <StatusBadge status={fabric.status} />
              </td>
              <td>
                <button
                  disabled={fabric.status === "Completed"}
                  onClick={() => onMoveNext(fabric.id)}
                >
                  Move Next
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TrackTable;
