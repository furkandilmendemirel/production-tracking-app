import StatusBadge from "./StatusBadge";

function TrackTable({ fabrics, onMoveNext }) {
  const getTypeClass = (fabricType) => {
    const typeMap = {
      Cotton: "type-cotton",
      Linen: "type-linen",
      Denim: "type-denim",
      Wool: "type-wool",
    };

    return typeMap[fabricType] || "type-default";
  };

  return (
    <section className="table-section">
      <div className="table-header">
        <h2>Fabric Tracking Table</h2>
        <p>Monitor each fabric roll and move it through production stages.</p>
      </div>

      <div className="table-container">
        <table className="tracking-table">
          <thead>
            <tr>
              <th>Barcode</th>
              <th>Supplier</th>
              <th>Status</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {fabrics.map((fabric) => (
              <tr key={fabric.id}>
                <td className="barcode-cell">{fabric.barcode}</td>
                <td>{fabric.supplier}</td>
                <td>
                  <StatusBadge status={fabric.status} />
                </td>
                <td>
                  <div className="details-box">
                    <div className="detail-item">
                      <span className="detail-label">Fabric Type:</span>
                      <span className={`type-pill ${getTypeClass(fabric.fabricType)}`}>
                        {fabric.fabricType}
                      </span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-label">Color:</span>
                      <span className="detail-value">{fabric.color}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-label">Quantity:</span>
                      <span className="detail-value">{fabric.quantity} m</span>
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    className="move-button"
                    onClick={() => onMoveNext(fabric.id)}
                    disabled={fabric.status === "Completed"}
                  >
                    Move Next
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TrackTable;
