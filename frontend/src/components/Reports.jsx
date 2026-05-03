function Reports({ fabrics }) {
  const suppliers = fabrics.reduce((acc, fabric) => {
    if (!acc[fabric.supplier]) {
      acc[fabric.supplier] = {
        supplier: fabric.supplier,
        totalItems: 0,
        totalQuantity: 0,
        completed: 0,
        qualityCheck: 0,
        processing: 0,
        pending: 0,
      };
    }

    acc[fabric.supplier].totalItems += 1;
    acc[fabric.supplier].totalQuantity += fabric.quantity;

    if (fabric.status === "Completed") {
      acc[fabric.supplier].completed += 1;
    }

    if (fabric.status === "Quality Check") {
      acc[fabric.supplier].qualityCheck += 1;
    }

    if (fabric.status === "Processing") {
      acc[fabric.supplier].processing += 1;
    }

    if (fabric.status === "Pending") {
      acc[fabric.supplier].pending += 1;
    }

    return acc;
  }, {});

  const supplierList = Object.values(suppliers);

  const getPerformanceScore = (supplier) => {
    if (supplier.totalItems === 0) {
      return 0;
    }

    return Math.round((supplier.completed / supplier.totalItems) * 100);
  };

  const getRiskLevel = (score) => {
    if (score >= 70) {
      return "Low Risk";
    }

    if (score >= 40) {
      return "Medium Risk";
    }

    return "High Risk";
  };

  return (
    <section className="reports-section">
      <div className="table-header">
        <h2>Supplier Performance Reports</h2>
        <p>
          Review supplier-based fabric quantities, completion rates, and production
          risk levels.
        </p>
      </div>

      <div className="report-grid">
        {supplierList.map((supplier) => {
          const score = getPerformanceScore(supplier);
          const risk = getRiskLevel(score);

          return (
            <div className="report-card" key={supplier.supplier}>
              <div className="report-card-header">
                <div>
                  <p className="report-kicker">SUPPLIER</p>
                  <h3>{supplier.supplier}</h3>
                </div>

                <span
                  className={`risk-badge ${
                    risk === "Low Risk"
                      ? "risk-low"
                      : risk === "Medium Risk"
                      ? "risk-medium"
                      : "risk-high"
                  }`}
                >
                  {risk}
                </span>
              </div>

              <div className="report-metrics">
                <div>
                  <span>Total Fabric Rolls</span>
                  <strong>{supplier.totalItems}</strong>
                </div>

                <div>
                  <span>Total Quantity</span>
                  <strong>{supplier.totalQuantity} m</strong>
                </div>

                <div>
                  <span>Completed</span>
                  <strong>{supplier.completed}</strong>
                </div>

                <div>
                  <span>Performance</span>
                  <strong>{score}%</strong>
                </div>
              </div>

              <div className="report-status-row">
                <span>Pending: {supplier.pending}</span>
                <span>Processing: {supplier.processing}</span>
                <span>Quality Check: {supplier.qualityCheck}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Reports;
