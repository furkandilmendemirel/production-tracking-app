import { useState } from "react";
import FabricDetailsModal from "./FabricDetailsModal.jsx";
import StatusBadge from "./StatusBadge.jsx";

function TrackTable({ fabrics, onMoveNext }) {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedFabric, setSelectedFabric] = useState(null);

  const getTypeClass = (fabricType) => {
    const typeMap = {
      Cotton: "type-cotton",
      Linen: "type-linen",
      Denim: "type-denim",
      Wool: "type-wool",
    };

    return typeMap[fabricType] || "type-default";
  };

  const filteredFabrics = fabrics.filter((fabric) => {
    const searchValue = searchText.toLowerCase();

    const matchesSearch =
      fabric.barcode.toLowerCase().includes(searchValue) ||
      fabric.supplier.toLowerCase().includes(searchValue) ||
      fabric.fabricType.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusFilter === "All" || fabric.status === statusFilter;

    const matchesType =
      typeFilter === "All" || fabric.fabricType === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <section className="table-section">
      <div className="table-header">
        <div>
          <h2>Fabric Tracking Table</h2>
          <p>
            Search, filter, and monitor each fabric roll through production stages.
          </p>
        </div>
      </div>

      <div className="table-controls">
        <input
          type="text"
          placeholder="Search barcode, supplier, or fabric type..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="search-input"
        />

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="filter-select"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Quality Check">Quality Check</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={typeFilter}
          onChange={(event) => setTypeFilter(event.target.value)}
          className="filter-select"
        >
          <option value="All">All Fabric Types</option>
          <option value="Cotton">Cotton</option>
          <option value="Linen">Linen</option>
          <option value="Denim">Denim</option>
          <option value="Wool">Wool</option>
        </select>
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
            {filteredFabrics.map((fabric) => (
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

                    <button
                      className="details-button"
                      onClick={() => setSelectedFabric(fabric)}
                    >
                      View Details
                    </button>
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

        {filteredFabrics.length === 0 && (
          <div className="empty-state">
            No fabric records found for the selected filters.
          </div>
        )}
      </div>

      <FabricDetailsModal
        fabric={selectedFabric}
        onClose={() => setSelectedFabric(null)}
      />
    </section>
  );
}

export default TrackTable;
