import StatusBadge from "./StatusBadge.jsx";

function FabricDetailsModal({ fabric, onClose }) {
  if (!fabric) {
    return null;
  }

  const steps = ["Pending", "Processing", "Quality Check", "Completed"];
  const currentStepIndex = steps.indexOf(fabric.status);

  return (
    <div className="modal-overlay">
      <div className="details-modal">
        <div className="modal-header">
          <div>
            <p className="modal-kicker">FABRIC DETAILS</p>
            <h2>{fabric.barcode}</h2>
          </div>

          <button className="modal-close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-info-grid">
          <div>
            <span>Supplier</span>
            <strong>{fabric.supplier}</strong>
          </div>

          <div>
            <span>Fabric Type</span>
            <strong>{fabric.fabricType}</strong>
          </div>

          <div>
            <span>Color</span>
            <strong>{fabric.color}</strong>
          </div>

          <div>
            <span>Quantity</span>
            <strong>{fabric.quantity} m</strong>
          </div>

          <div>
            <span>Current Status</span>
            <StatusBadge status={fabric.status} />
          </div>
        </div>

        <div className="timeline-section">
          <h3>Production Timeline</h3>

          <div className="timeline">
            {steps.map((step, index) => (
              <div
                key={step}
                className={
                  index <= currentStepIndex
                    ? "timeline-step active"
                    : "timeline-step"
                }
              >
                <div className="timeline-circle">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FabricDetailsModal;
