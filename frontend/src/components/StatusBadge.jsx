function StatusBadge({ status }) {
  const classMap = {
    Pending: "status-badge pending",
    Processing: "status-badge processing",
    "Quality Check": "status-badge quality",
    Completed: "status-badge completed",
  };

  return <span className={classMap[status]}>{status}</span>;
}

export default StatusBadge;
