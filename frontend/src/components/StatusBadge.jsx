function StatusBadge({ status }) {
  const classNameMap = {
    Pending: "badge badge-pending",
    Processing: "badge badge-processing",
    "Quality Check": "badge badge-quality",
    Completed: "badge badge-completed",
  };

  return <span className={classNameMap[status]}>{status}</span>;
}

export default StatusBadge;
