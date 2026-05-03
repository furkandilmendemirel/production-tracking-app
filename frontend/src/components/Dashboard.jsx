function Dashboard({ fabrics }) {
  const totalFabricRolls = fabrics.length;
  const totalStock = fabrics.reduce((sum, fabric) => sum + fabric.quantity, 0);
  const pendingCount = fabrics.filter((fabric) => fabric.status === "Pending").length;
  const processingCount = fabrics.filter(
    (fabric) => fabric.status === "Processing"
  ).length;
  const qualityCheckCount = fabrics.filter(
    (fabric) => fabric.status === "Quality Check"
  ).length;
  const completedCount = fabrics.filter(
    (fabric) => fabric.status === "Completed"
  ).length;

  const cards = [
    { title: "Total Fabric Rolls", value: totalFabricRolls },
    { title: "Total Stock", value: `${totalStock} m` },
    { title: "Pending", value: pendingCount },
    { title: "Processing", value: processingCount },
    { title: "Quality Check", value: qualityCheckCount },
    { title: "Completed", value: completedCount },
  ];

  return (
    <section className="dashboard-grid">
      {cards.map((card) => (
        <div className="summary-card" key={card.title}>
          <p className="summary-label">{card.title}</p>
          <h2 className="summary-value">{card.value}</h2>
        </div>
      ))}
    </section>
  );
}

export default Dashboard;
